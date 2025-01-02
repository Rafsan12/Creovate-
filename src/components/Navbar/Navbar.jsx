import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("About");
  const content = useRef();

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from(content.current, {
      y: -20,
      duration: 0.5,
      stagger: 0.1,
    });
  });

  const handleSetActive = (link) => setActiveLink(link);

  const links = (
    <>
      {["About", "Our Works", "Our Services"].map((link) => (
        <li key={link}>
          <a
            href={`#${link.toLowerCase().replace(" ", "-")}`}
            className={activeLink === link ? "active" : ""}
            onClick={() => handleSetActive(link)}
          >
            {link}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar" ref={content}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Creovate </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-blue-500 hover:bg-blue-600 text-white">
          Get Started
        </a>
      </div>
    </div>
  );
}
