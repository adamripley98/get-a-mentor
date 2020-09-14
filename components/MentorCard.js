import Button from "./button";

const MentorCard = ({ mentor }) => (
  <div
    className="mx-2 py-8 px-4 border border-solid rounded-sm border-gray-300 flex flex-col items-center"
    style={{
      boxShadow: "0 10px 28px rgba(0,0,0,.08)"
    }}
  >
    {console.log("mentor", mentor["Field of Study"])}

    <div className="flex flex-col items-center">
      <img
        src={mentor["Profile Picture"]}
        alt={mentor.Name}
        className="rounded-full h-40 w-40 mb-4 bg-auto"
      />
      <h1 className="text-3xl font-bold">{mentor.Name}</h1>
      <h3 className="text-xl text-gray-600 italic">{mentor.College}</h3>
      <div className="flex flex-wrap my-6">
        <div className="w-1/2 my-2 px-4">
          <p className="text-xs text-gray-900 font-thin">Major(s)</p>
          <p>{mentor["Field of Study"]}</p>
        </div>
        <div className="w-1/2 my-2 px-4">
          <p className="text-xs text-gray-900 font-thin">Year</p>
          <p>{mentor["Year of College"]}</p>
        </div>
        <div className="w-1/2 my-2 px-4">
          <p className="text-xs text-gray-900 font-thin">
            Professional Interests
          </p>
          <p>{mentor["Career Interests"]}</p>
        </div>
        <div className="w-1/2 my-2 px-4">
          <p className="text-xs text-gray-900 font-thin">
            On Campus Activities
          </p>
          <p>{mentor["On-Campus Activities"]}</p>
        </div>
        <div className="w-1/2 my-2 px-4">
          <p className="text-xs text-gray-900 font-thin">Hometown</p>
          <p>{mentor["Home City"]}</p>
        </div>
        <div className="w-1/2 my-2 px-4">
          <p className="text-xs text-gray-900 font-thin">High School</p>
          <p>{mentor["High School"]}</p>
        </div>
      </div>
    </div>
    <Button size="lg">
      <a className="btn-link" href="/TODO">
        CONNECT
      </a>
    </Button>
  </div>
);

export default MentorCard;
