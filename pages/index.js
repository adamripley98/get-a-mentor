import Link from "next/link";
import Nav from "../components/nav";
import Button from "../components/button";
import Layout from "../components/layout";
import HeroImg from "../images/hero.jpg";
import MentorImg from "../images/mentor.png";

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <section id="top" className="top-background flex">
        <div className="container my-auto mx-6 sm:mx-auto lg:mx-20 flex flex-col lg:flex-row items-center justify-center rounded-lg">
          <div className="lg:w-1/2">
            <h1 className="mt-10 lg:mt-0 text-4xl xl:text-5xl font-extrabold leading-tight dark-font">
              Ready to take the next step towards your college dreams?
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Connect with South Africans studying abroad and discover the
              possibilities for your future.
            </p>
            <div className="my-8">
              <Link href="/get-a-mentor">
                <a className="btn-link">
                  <Button size="lg" className="mr-4">
                    Get A Mentor
                  </Button>
                </a>
              </Link>
              <Link href="/become-a-mentor">
                <a className="btn-link">
                  <Button size="lg" className="mr-4">
                    Become a Mentor
                  </Button>
                </a>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={MentorImg} alt="hero" />
          </div>
        </div>
      </section>
    </div>
  );
}
