const Airtable = require("airtable");
const AWS = require("aws-sdk");

const base = new Airtable({ apiKey: process.env.AIRTABLEAPI }).base(
  process.env.AIRTABLEBASEID
);

const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_USER_KEY = process.env.AWS_USER_KEY;
const AWS_USER_SECRET = process.env.AWS_USER_SECRET;

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "3mb"
    }
  }
};

export default (req, res) => {
  const {
    name,
    email,
    profilePicture,
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

  // Set up bucket
  const s3bucket = new AWS.S3({
    accessKeyId: AWS_USER_KEY,
    secretAccessKey: AWS_USER_SECRET,
    Bucket: AWS_BUCKET_NAME
  });

  const imageConverted = new Buffer(
    profilePicture.binaryStr.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  const params = {
    Bucket: AWS_BUCKET_NAME,
    Key: `profilePictures/${profilePicture.imgName || Math.random()}}`,
    ContentType: "image/jpeg",
    Body: imageConverted,
    ContentEncoding: "base64",
    ACL: "public-read"
  };

  s3bucket.upload(params, (errUpload, data) => {
    if (errUpload) {
      console.log("what is err", errUpload);
      res.end(JSON.stringify({ success: "false" }));
      return;
    }
    // Airtable payload
    var payload = [
      {
        fields: {
          Name: name,
          "Profile Picture": data.Location,
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
        console.log("what is err", err);
        res.end(JSON.stringify({ success: "false" }));
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ success: "true" }));
    });
  });
};
