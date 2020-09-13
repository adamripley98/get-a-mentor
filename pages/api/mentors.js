const axios = require("axios");

export default (req, res) => {
  console.log("enters");
  console.log("proces", process.env.AIRTABLEBASEID);
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
      console.log("what is resp", resp.data.records);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ mentors: resp.data.records }));
    })
    .catch(e => {
      console.log("e", e);
    });
};
