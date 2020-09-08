import Nav from "../components/nav";

export default function AboutPage() {
  return (
    <div>
      <Nav />
      <section className="container mx-auto">
        <div className="container mx-auto px-2 py-12">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center dark-font">
            Who We Are
          </h1>
          <div className="mx-6 md:mx-24">
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Get A Mentor was founded in 2020 by a group of South Africa
              students at the University of Pennsylvania. During the depths of
              the coronavirus pandemic, we began brainstorming ways in which we
              could assist other South Africans looking to study abroad, given
              the unusual challenges they faced as an admissions class. Each of
              us realised that we had had the extraordinary benefit of knowing
              other South Africans at UPenn before we even applied. Whether they
              were friends of friends from high school or close family members,
              we had each had access to a wealth of insight before arriving on
              campus. These inside scoops allowed us to make informed decisions
              during the application process. A few quick conversations gave us
              a considerably better idea of what to expect from student life,
              workload, job prospects, and academic opportunities when
              considering which colleges to choose.
            </p>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              We decided that every South African applicant should have access
              to a network of students studying abroad. After coming to this
              realisation, we founded Get A Mentor to band together a group of
              volunteer college mentors who could help alleviate the unknowns of
              planning for university.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
