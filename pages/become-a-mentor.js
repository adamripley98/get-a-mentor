import Nav from "../components/nav";
import Button from "../components/button";
import Layout from "../components/layout";
import HeroImg from "../images/hero.jpg";
import MentorImg from "../images/mentor.png";
import MentorCard from "../components/MentorCard";
import SchoolSelect from "../components/SchoolSelect";
import MentorForm from "../components/MentorForm";
import mentors from "../mentors/mentors.js";

export default function GetAMentorPage() {
  return (
    <div>
      <Nav />
      <section className="container mx-auto">
        <div className="container mx-auto px-2 py-12">
          <h1 className="mb-8 text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center dark-font">
            Give back by helping South African high schoolers get into their
            dream college
          </h1>
          <MentorForm />
        </div>
      </section>
    </div>
  );
}
