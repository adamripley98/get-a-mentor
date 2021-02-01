const Airtable = require("airtable");
const sgMail = require("@sendgrid/mail");
const base = new Airtable({ apiKey: process.env.AIRTABLEAPI }).base(
  process.env.AIRTABLEBASEID
);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    collegesOfInterest,
    currentGrade,
    fieldOfInterest,
    extracurriculars,
    hometown,
    highSchool,
    message,
    mentor
  } = req.body.data;

  // Construct message to send to mentor
  const msg = {
    to: mentor.Email,
    from: {
      name: "Get A College Mentor",
      email: process.env.ADMIN_EMAIL_ADDRESS
    },
    templateId: process.env.SENDGRID_MENTORSHIP_REQUEST_TEMPLATE_ID,
    dynamicTemplateData: {
      menteeFullName: `${firstName} ${lastName}`,
      message: `${message}`,
      menteeFirstName: `${firstName}`,
      menteeEmail: `${email}`,
      menteePhoneNumber: `${phoneNumber}`,
      menteeCollegesOfInterest: `${collegesOfInterest}`,
      menteeFieldOfInterest: `${fieldOfInterest}`,
      menteeCurrentGrade: `${currentGrade}`,
      menteeExtracurriculars: `${extracurriculars}`,
      menteeHighSchool: `${highSchool}`,
      menteeHometown: `${hometown}`
    }
  };

  // Send message to mentor
  sgMail
    .send(msg)
    .then(resp => {
      if (resp.data && resp.data.errors) {
        console.err(resp.data.errors);
      }
      // Construct message to mentee
      const menteeMsg = {
        to: email,
        from: {
          name: "Get A College Mentor",
          email: process.env.ADMIN_EMAIL_ADDRESS
        },
        templateId:
          process.env.SENDGRID_MENTEE_APPLICATION_COMFIRMATION_TEMPLATE_ID,
        dynamicTemplateData: {
          mentorFullName: `${mentor.Name}`,
          mentorFirstName: `${mentor.Name.split(" ")
            .slice(0, -1)
            .join(" ")}`,
          mentorEmail: `${mentor.Email}`
        }
      };
      // Send message to mentee
      sgMail
        .send(menteeMsg)
        .then(resp2 => {
          // Airtable payload
          var payload = [
            {
              fields: {
                Name: firstName + " " + lastName,
                Email: email,
                "Phone Number": phoneNumber,
                "Colleges of Interest": collegesOfInterest,
                "Current Grade": currentGrade,
                "Field of Interest": fieldOfInterest,
                Extracurriculars: extracurriculars,
                Hometown: hometown,
                "High School": highSchool
              }
            }
          ];

          // Add a mentee to Airtable database
          base(process.env.AIRTABLE_MENTEES_TABLE_NAME).create(
            payload,
            (err, records) => {
              if (err) {
                console.err(err);
                res.end(JSON.stringify({ success: "false" }));
                return;
              }
              // Update Mentors availablity, inc +1
              base(process.env.AIRTABLE_MENTEES_TABLE_NAME).update(
                mentor.id,
                {
                  currentMentees: mentor.currentMentees + 1
                },
                (e, rec) => {
                  if (e) {
                    console.err(e);
                    return;
                  }
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify({ success: "true" }));
                }
              );
            }
          );
        })
        .catch(e2 => {
          console.error(e2);
          res.end(JSON.stringify({ success: "false" }));
          return;
        });
    })
    .catch(e => {
      console.error(e);
      res.end(JSON.stringify({ success: "false" }));
      return;
    });
};
