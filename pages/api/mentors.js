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
        return mentor.fields.isApproved && mentor.fields.acceptingMentees;
      });
      res.end(JSON.stringify({ success: true, mentors }));
    })
    .catch(e => {
      res.end(JSON.stringify({ success: false }));
    });
};
