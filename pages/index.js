import Nav from "../components/nav";
import Button from "../components/button";
import Layout from "../components/layout";
import HeroImg from "../images/hero.jpg";

export default function IndexPage() {
  return (
    <div>
      <Nav />

      <section id="top" className="top-background flex items-center">
        <div className="container mx-20 lg:flex lg:items-center bg-gray-100 shadow-2xl rounded-lg">
          <div className="lg:w-1/2">
            <img
              src={HeroImg}
              className="hide-on-mobile rounded-l-lg"
              alt="hero"
            />
          </div>
          <div className="text-center mx-10 lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-none text-purple-900">
              Get A Mentor
            </h1>
            <p className="text-2xl lg:text-3xl mt-6 font-light">
              Include some sort of catchy statement here about all that this
              opportunity can offer mentors and mentees.
            </p>
            <div className="mt-8">
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
        </div>
      </section>
    </div>
  );
}
