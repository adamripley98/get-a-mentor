import Nav from "../components/nav";
import Button from "../components/button";
import Layout from "../components/layout";
import HeroImg from "../images/hero.jpg";
import MentorImg from "../images/mentor.png";

export default function IndexPage() {
  return (
    <div>
      <Nav />

      <section id="top" className="top-background flex items-center">
        <div className="container mx-20 lg:flex lg:items-center rounded-lg">
          <div className="lg:w-1/2">
            <h1 className="mt-8 text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight dark-font">
              Ready to take the next step towards your college dreams?
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Connect with South Africans studying abroad and discover the
              possibilities for your future.
            </p>
            <div className="my-8">
              <Button size="lg" className="mr-4">
                <a className="btn-link" href="/get-a-mentor">
                  Get A Mentor
                </a>
              </Button>
              <Button size="lg" className="mr-4">
                <a className="btn-link" href="/become-a-mentor">
                  Become a Mentor
                </a>
              </Button>
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
