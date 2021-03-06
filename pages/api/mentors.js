const axios = require("axios");

export default (req, res) => {
  axios
    .get(
      `https://api.airtable.com/v0/${process.env.AIRTABLEBASEID}/${process.env.AIRTABLE_MENTORS_TABLE_NAME}?view=Grid%20view`,
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
        const acceptingMentees =
          mentor.fields.currentMentees < mentor.fields.menteesPerMonth;
        return mentor.fields.isApproved && acceptingMentees;
      });
      res.end(JSON.stringify({ success: true, mentors }));
    })
    .catch(e => {
      res.end(JSON.stringify({ success: false }));
    });
};
