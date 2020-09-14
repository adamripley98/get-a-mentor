import useSwr from "swr";

import Nav from "../components/nav";
import Button from "../components/button";
import Layout from "../components/layout";
import HeroImg from "../images/hero.jpg";
import MentorImg from "../images/mentor.png";
import MentorCard from "../components/MentorCard";
import SchoolSelect from "../components/SchoolSelect";

const fetcher = url => fetch(url).then(res => res.json());

let mentors = null;
let filteredMentors = mentors;

const formatMentors = data => {
  mentors = [];
  for (const mentor in data.mentors) {
    mentors.push(data.mentors[mentor].fields);
  }
  return mentors;
};

const filterMentors = checkStates => {
  console.log("checkState", checkStates);
};

// // Get college name in right format to compare
// const college =
//   e.target.value === "upenn" ? "University of Pennsylvania" : e.target.value;
// // Check to see if school is present already. If so, remove school from mentors shown
// filteredMentors.forEach(mentor => {
//   if (mentor.College.toUpperCase() === college.toUpperCase()) {
//     removeSchool = true;
//     const newFilteredMentors = filteredMentors.filter(
//       mentor => mentor.College !== college
//     );
//     filteredMentors = newFilteredMentors;
//   }
// });
// // If school wasn't already present, we will add it to mentors shown
// if (!removeSchool) {
//   const mentor = filteredMentors.push();
// }

export default function GetAMentorPage() {
  const { data, error } = useSwr("/api/mentors", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <div>Loading...</div>;
  if (data) console.log(data);
  if (data) mentors = formatMentors(data);
  return (
    <div>
      <Nav />
      <section className="container mx-auto">
        <div className="container mx-auto px-2 py-12">
          <h1 className="mb-8 text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center dark-font">
            Find the right mentor for you
          </h1>
          <SchoolSelect filterMentors={filterMentors} />
          {mentors && mentors.length ? (
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
          ) : null}
        </div>
      </section>
    </div>
  );
}
