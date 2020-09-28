const axios = require("axios");

export default (req, res) => {
  axios
    .get(
      `https://api.airtable.com/v0/${process.env.AIRTABLEBASEID}/${process.env.AIRTABLETABLENAME}?view=Grid%20view`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLEAPI}`
        }
      }
    )
    .then(resp => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      const mentors = resp.data.records.filter(mentor => {
        console.log(
          "typeof curr",
          mentor.fields.currentMentees,
          typeof mentor.fields.currentMentees
        );
        console.log(
          "typeof allowed",
          mentor.fields.currentMentees,
          typeof mentor.fields.currentMentees
        );
        console.log(
          "typeof allowed",
          mentor.fields.menteesPerMonth,
          typeof mentor.fields.menteesPerMonth
        );
        return mentor.fields.isApproved && mentor.fields.acceptingMentees;
      });
      res.end(JSON.stringify({ success: true, mentors }));
    })
    .catch(e => {
      res.end(JSON.stringify({ success: false }));
    });
};
