import Nav from "../components/nav";
import ConnectForm from "../components/ConnectForm";

export default function ConnectWithMentorPage() {
  return (
    <div>
      <Nav />
      <section className="container mx-auto">
        <div className="container mx-auto px-2 py-12">
          <ConnectForm />
        </div>
      </section>
    </div>
  );
}
