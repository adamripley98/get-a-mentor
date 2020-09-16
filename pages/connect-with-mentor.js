import Nav from "../components/nav";
import ConnectForm from "../components/ConnectForm";

export default function ConnectWithMentorPage() {
  return (
    <div>
      <Nav />
      <section className="container mx-auto">
        <div className="container mx-auto px-2 py-12">
          <h1 className="mb-8 text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center dark-font">
            Connect with TODO:MENTOR NAME
          </h1>
          <div className="flex justify-center">
            <ConnectForm />
          </div>
        </div>
      </section>
    </div>
  );
}
