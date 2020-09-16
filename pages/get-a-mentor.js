import useSwr from "swr";

import Nav from "../components/nav";
import Button from "../components/button";
import Layout from "../components/layout";
import HeroImg from "../images/hero.jpg";
import MentorImg from "../images/mentor.png";
import MentorCard from "../components/MentorCard";
import MentorCards from "../components/MentorCards";
import SchoolSelect from "../components/SchoolSelect";

const fetcher = url => fetch(url).then(res => res.json());

let mentors = null;

const formatMentors = data => {
  mentors = [];
  for (const mentor in data.mentors) {
    mentors.push(data.mentors[mentor].fields);
  }
  return mentors;
};

export default function GetAMentorPage() {
  const { data, error } = useSwr("/api/mentors", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;
  if (data) mentors = formatMentors(data);

  return (
    <div>
      <Nav />
      <section className="container mx-auto">
        <div className="container mx-auto px-2 py-12">
          <h1 className="mb-8 text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center dark-font">
            Find the right mentor for you
          </h1>
          {mentors && mentors.length ? <MentorCards mentors={mentors} /> : null}
        </div>
      </section>
    </div>
  );
}
