import Head from "next/head";
import Nav from "../components/nav";

export default function AboutPage() {
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
        <title>Who We Are | Get A College Mentor</title>
      </Head>
      <Nav />
      <section className="container mx-auto">
        <div className="container mx-auto px-2 py-12">
          <h1 className="mx-6 md:mx-24 text-2xl lg:text-3xl xl:text-4xl font-extrabold dark-font">
            Who We Are
          </h1>
          <div className="mx-6 md:mx-24 text-justify mb-6">
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Get A College Mentor was founded in 2020 by a group of Southern
              African students at the University of Pennsylvania. During the
              depths of the coronavirus pandemic, we began brainstorming ways in
              which we could assist other Southern Africans looking to study
              abroad, given the unusual challenges they faced as an admissions
              class. Each of us realised that we had had the extraordinary
              benefit of knowing other Southern Africans at UPenn before we even
              applied. Whether they were friends of friends from high school or
              close family members, we had each had access to a wealth of
              insight before arriving on campus. These inside scoops allowed us
              to make informed decisions during the application process. A few
              quick conversations gave us a considerably better idea of what to
              expect from student life, workload, job prospects, and academic
              opportunities when considering which colleges to choose.
            </p>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              We decided that every Southern African applicant should have
              access to a network of students studying abroad. After coming to
              this realisation, we founded Get A College Mentor to band together
              a group of volunteer college mentors who could help alleviate the
              unknowns of planning for university.
            </p>
          </div>

          <h1 className="mx-6 md:mx-24 text-2xl lg:text-3xl xl:text-4xl font-extrabold dark-font">
            Our Policies
          </h1>
          <div className="mx-6 md:mx-24 text-justify" id="policies">
            <p className="text-xl lg:text-2xl mt-6 font-light">
              <span className="font-bold">
                Our mentors are not college advisors, and therefore do not and
                cannot provide any assistance in the application process.
              </span>{" "}
              Our mentors aim to shed light on their university experiences so
              that applicants can make more informed choices about which
              colleges might be the right fit. We can provide insight on topics
              like what to expect from student life, workload, job prospects,
              and academic opportunities. Essentially, we foster conversations,
              not consultations.
            </p>
            <p className="text-xl lg:text-2xl mt-6 font-light">
              Given that our mentors are volunteers and have very limited time
              to offer each student,{" "}
              <span className="font-bold">
                we do not permit parents to participate in our services.
              </span>{" "}
              Mentor requests should be made by the students themselves, and any
              conversations held should involve only the student and their
              mentor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
