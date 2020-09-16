const Airtable = require("airtable");
const sgMail = require("@sendgrid/mail");
const base = new Airtable({ apiKey: process.env.AIRTABLEAPI }).base(
  process.env.AIRTABLEBASEID
);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  console.log("enters route");
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
  console.log("process.env.SENDGRID_API_KEY", process.env.SENDGRID_API_KEY);
  const msg = {
    to: email || "adamripley@gmail.com",
    from: process.env.ADMIN_EMAIL_ADDRESS,
    subject: `Get A Mentor Inquiry from ${firstName} ${lastName}`,
    text: "and easy to do anywhere, even with Node.js",
    html: emailBody
  };

  sgMail
    .send(msg)
    .then(resp => {
      console.log("rr", resp);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ success: "true" }));
    })
    .catch(e => {
      console.log("e", e);
      res.end(JSON.stringify({ success: "false" }));
      return;
    });
};
