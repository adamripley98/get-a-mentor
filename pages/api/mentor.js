var Airtable = require("airtable");
var base = new Airtable({ apiKey: process.env.AIRTABLEAPI }).base(
  process.env.AIRTABLEBASEID
);

export default (req, res) => {
  base(process.env.AIRTABLE_MENTORS_TABLE_NAME).find(
    req.query.id,
    (err, record) => {
      if (err) {
        res.end(JSON.stringify({ success: "false" }));
        return;
      }
      const mentorObj = record.fields;
      mentorObj.id = record.id;
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ success: true, data: mentorObj }));
    }
  );
};
