import Link from "next/link";
import NavButton from "./navbutton";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" }
];

export default function Nav() {
  return (
    <nav className="bg-white sticky top-0 shadow-lg z-50">
      <ul className="flex justify-between items-center px-6 py-3">
        <li className="text-4xl font-extrabold dark-font">
          <Link href="/">Get A Mentor</Link>
        </li>
        <ul className="flex justify-between items-center space-x-4 font-bold dark-font">
          <li className="px-3">
            <Link href="/">Home</Link>
          </li>
          <li className="px-3">
            <Link href="/about">About</Link>
          </li>
          <li className="px-3">
            <Link href="/get-a-mentor">Get A Mentor</Link>
          </li>
          <li className="px-3">
            <Link href="/become-a-mentor">Become A Mentor</Link>
          </li>
          <li className="px-3">
            <NavButton text="Contact"></NavButton>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
