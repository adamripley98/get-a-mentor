import Link from "next/link";
import React from "react";
import NavButton from "./navbutton";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen, eventsOpen: false, aboutOpen: false });
  }

  render() {
    return (
      <nav className="bg-white sticky top-0 shadow-lg z-50">
        <ul className="flex justify-between items-center px-6 py-3">
          <li className="text-2xl lg:text-3xl xl:text-4xl font-extrabold dark-font">
            <Link href="/">Get A College Mentor</Link>
          </li>
          <div className="lg:hidden">
            <button
              onClick={this.toggle}
              type="button"
              className="block text-blue-900 hover:text-blue-800 focus:text-blue-800 focus:outline-none"
            >
              <svg className="w-8 fill-current" viewBox="0 0 24 24">
                <path
                  className={
                    this.state.isOpen
                      ? "text-blue-900 hover:text-blue-800"
                      : "hidden"
                  }
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  className={
                    !this.state.isOpen
                      ? "text-blue-900 hover:text-blue-800"
                      : "hidden"
                  }
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:inline-flex flex">
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
                <a href="mailto:ntap@wharton.upenn.edu">
                  <NavButton text="Contact" />
                </a>
              </li>
            </ul>
          </div>
        </ul>
        <div
          className={`lg:hidden ${
            this.state.isOpen ? "inline-block" : "hidden"
          } flex flex-col items-start px-5 bg-gray-200 py-2 shadow sticky top-20`}
        >
          <Link activeStyle={{ "text-decoration": "underline" }} href="/">
            <a href="" className="my-1">
              Home
            </a>
          </Link>
          <Link activeStyle={{ "text-decoration": "underline" }} href="/about">
            <a href="" className="my-1">
              About
            </a>
          </Link>
          <Link
            activeStyle={{ "text-decoration": "underline" }}
            href="/get-a-mentor"
          >
            <a href="" className="my-1">
              Get a Mentor
            </a>
          </Link>
          <Link
            activeStyle={{ "text-decoration": "underline" }}
            href="/become-a-mentor"
          >
            <a href="" className="my-1">
              Become a Mentor
            </a>
          </Link>
          <a href="mailto:ntap@wharton.upenn.edu" className="my-2">
            <NavButton text="Contact" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
