import Head from "next/head";
import Nav from "../components/nav";
import ConnectForm from "../components/ConnectForm";

export default function ConnectWithMentorPage() {
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
        <title>Connect | Get A College Mentor</title>
      </Head>
      <Nav />
      <section className="container mx-auto">
        <div className="container mx-auto px-2 py-12">
          <ConnectForm />
        </div>
      </section>
    </div>
  );
}
