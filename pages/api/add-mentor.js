const axios = require("axios");
var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLEAPI }).base(
  process.env.AIRTABLEBASEID
);

export default (req, res) => {
  console.log("enters add-mentor", req.body);
  const {
    name,
    email,
    phoneNumber,
    college,
    yearOfCollege,
    fieldOfStudy,
    activities,
    careerInterests,
    hometown,
    highSchool,
    numMentees
  } = req.body.user;

  var payload = [
    {
      fields: {
        Name: name,
        Email: email,
        "Phone Number": phoneNumber,
        College:
          college === "upenn"
            ? "University of Pennsylvania"
            : college.charAt(0).toUpperCase() + college.slice(1),
        "Year of College":
          yearOfCollege.charAt(0).toUpperCase() + yearOfCollege.slice(1),
        "Field of Study": fieldOfStudy,
        "On-Campus Activities": activities,
        "Career Interests": careerInterests,
        "Home City": hometown,
        "High School": highSchool,
        "Mentees/month": numMentees
      }
    }
  ];

  base("Mentors").create(payload, (err, records) => {
    if (err) {
      console.error("Err", err);
      return;
    }
    records.forEach(function(record) {
      console.log("id: ", record.getId());
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ implemented: "false" }));
  });
};
