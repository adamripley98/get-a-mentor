import useSwr from "swr";
import Head from "next/head";
import Nav from "../components/nav";
import Button from "../components/button";
import Layout from "../components/layout";
import HeroImg from "../images/hero.jpg";
import MentorImg from "../images/mentor.png";
import MentorCard from "../components/MentorCard";
import MentorCards from "../components/MentorCards";
import SchoolSelect from "../components/SchoolSelect";
import Loading from "../components/Loading";

const fetcher = url => fetch(url).then(res => res.json());

let mentors = null;

const formatMentors = data => {
  mentors = [];
  for (const mentor in data.mentors) {
    const mentorObj = data.mentors[mentor].fields;
    mentorObj.id = data.mentors[mentor].id;
    mentors.push(mentorObj);
  }
  return mentors;
};

export default function GetAMentorPage() {
  const { data, error } = useSwr("/api/mentors", fetcher);

  if (error) return <div>Failed to load users</div>;
  if (!data) {
    console.log("what is wrong");
    return (
      <div>
        <Head>
          <title>Get A Mentor | Get A College Mentor</title>
        </Head>
        <Nav />
        <Loading />
      </div>
    );
  }
  if (data) mentors = formatMentors(data);

  return (
    <div>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <title>Get A Mentor | Get A College Mentor</title>
      </Head>
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
