import Head from "next/head";
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
        <title>Become A Mentor | Get A College Mentor</title>
      </Head>
      <Nav />
      <section className="container mx-auto">
        <div className="container mx-auto px-2 py-12">
          <h1 className="mb-8 text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center dark-font">
            Help high schoolers get into their dream college
          </h1>
          <div className="flex justify-center">
            <MentorForm />
          </div>
        </div>
      </section>
    </div>
  );
}
