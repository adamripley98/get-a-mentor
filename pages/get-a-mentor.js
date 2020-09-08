import Nav from "../components/nav";
import Button from "../components/button";
import Layout from "../components/layout";
import HeroImg from "../images/hero.jpg";
import MentorImg from "../images/mentor.png";
import MentorCard from "../components/MentorCard";
import SchoolSelect from "../components/SchoolSelect";
import mentors from "../mentors/mentors.js";

export default function GetAMentorPage() {
  return (
    <div>
      <Nav />
      <section className="container mx-auto">
        <div className="container mx-auto px-2 py-12">
          <h1 className="mb-8 text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center dark-font">
            Find the right mentor for you
          </h1>
          <SchoolSelect />
          <div className="flex justify-center">
            {mentors.map(mentor => (
              <div
                key={mentor.lastName}
                className="w-full md:w-1/2 lg:w-1/3 mb-4"
              >
                <MentorCard mentor={mentor} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
