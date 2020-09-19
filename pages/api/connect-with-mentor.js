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

  const emailBody = `<div>
      <h1>New mentor request from ${firstName} ${lastName}</h1>
      </br>
      <h2>Mentee Information</h2>
      <ul
        <li>Name: ${firstName} ${lastName}</li>
        <li>Email: <a href=mailto:${email}>${email}</a></li>
        <li>Phone number: ${phoneNumber}</li>
        <li>Colleges of Interest: ${collegesOfInterest}</li>
        <li>Field of Interest: ${fieldOfInterest}</li>
        <li>Current Grade Level: ${currentGrade}</li>
        <li>Extracurriculars: ${extracurriculars}</li>
        <li>High School: ${highSchool}</li>
        <li>Hometown: ${hometown}</li>
      </ul>
      </br>
      <h2>Message</h2>
      <p>${message}</p>
    </div>`;
  const msg = {
    to: mentor.Email,
    from: process.env.ADMIN_EMAIL_ADDRESS,
    subject: `Get A College Mentor Inquiry from ${firstName} ${lastName}`,
    html: emailBody
  };

  sgMail
    .send(msg)
    .then(resp => {
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

      base("Mentees").create(payload, (err, records) => {
        if (err) {
          console.log("ee", err);
          res.end(JSON.stringify({ success: "false" }));
          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ success: "true" }));
      });
    })
    .catch(e => {
      console.log("e", e);
      res.end(JSON.stringify({ success: "false" }));
      return;
    });
};
