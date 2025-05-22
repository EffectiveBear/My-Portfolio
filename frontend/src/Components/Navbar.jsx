import React, { useEffect, useRef } from "react";
import myImageIcon from "../assets/my-icon.jpg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./customCss.css";

const Navbar = () => {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        ".gsap-updown-custom-animate",
        {
          y: -10,
          opacity: 0,
        },
        {
          duration: 1,
          y: -10,
          opacity: 0,
        }
      )
      .fromTo(
        ".gsap-updown-custom-animate",
        {
          y: -10,
          opacity: 0,
        },
        {
          // duration: ,
          y: 0,
          opacity: 1,
          stagger: 0.3,
        }
      );

    gsap
      .timeline()
      .fromTo(
        ".title-block-animation-gsap",
        {
          position: "absolute",
          x: "50%",
          y: "50%",
          transform: "translate(-50%,-50%)",
        },
        {
          position: "absolute",
          x: "50%",
          y: "50%",
          transform: "translate(-50%,-50%)",
          duration: 1.5,
        }
      )
      .fromTo(
        ".title-block-animation-gsap",
        {
          position: "absolute",
          x: "50%",
          y: "50%",
          transform: "translate(-50%,-50%)",
        },
        {
          position: "",
          x: "",
          y: "",
          transform: "",
        }
      );
    gsap
      .timeline()
      .fromTo(
        ".title-each-letter-animation-gsap",
        {
          opacity: 0.6,
          fontSize: "100px",
          fontFamily: "League Spartan",
          fontWeight: 200,
          padding: "0 15px",
          x: window.innerWidth / 4,
          y: window.innerHeight / 4,
        },
        {
          x: window.innerWidth / 4,
          y: window.innerHeight / 4,
          opacity: 0,
          duration: 1.5,
        }
      )
      .set(".title-each-letter-animation-gsap", {
        fontSize: "",
        fontFamily: "",
        fontWeight: "",
        padding: "",
        y: "",
      })
      .fromTo(
        ".title-each-letter-animation-gsap",
        {
          opacity: 0,
          color: "#ffffff",
          x: window.innerWidth / 10,
          // y: window.innerHeight / 4,
        },
        {
          duration: 0.6,
          opacity: 1,
          x: "",
          y: "",
          color: "",
          stagger: 0.04,
          fontSize: "",
        }
      );
  }, []);

  return (
    <nav
      className="flex justify-between items-center shadow-sm bg-custom-color flex-col md:flex-row md:justify-between md:items-center"
      style={{ backgroundColor: "#f3eeee9c" }}
    >
      {/* this will be the image that will travel */}
      <div className="flex justify-start items-center mx-4 h-[55px] self-start">
        <div id="top-moving-photo-icon" className="rounded-full w-8 h-8 overflow-hidden mx-2 border-3 z-[9999]">
          <img
            src={myImageIcon}
            alt="my image"
            className="min-w-[90%] min-h-[90%] hover:scale-110 transition ease-linear duration-300  "
          />
        </div>
        <Link to="/">
          {" "}
          <div className="flex title-block-animation-gsap z-10 mt-1">
            {"Ashu's World".split("").map((letter, key) => {
              return (
                <p
                  key={key}
                  className="bad-script-custom-font text-gray-700 font-extrabold text-2xl px-1 cursor-pointer whitespace-pre title-each-letter-animation-gsap opacity-0"
                >
                  {letter}
                </p>
              );
            })}
          </div>
        </Link>
      </div>
      <div className="mx-20">
        <ul className="flex justify-center items-center xs-gap-reduce gap-20 md:gap-15">
          {/*this is to compensate for the stagger effect..it staggger onnly for other not for this*/}
          <li className="hidden gsap-updown-custom-animate"></li>{" "}
          <Link to="/">
            <li className="gsap-updown-custom-animate -translate-y-4 opacity-0 cursor-pointer font-semibold text-gray-600 hover:text-black text-lg transition-all hover:scale-105  duration-300">
              Home
            </li>
          </Link>
          <Link to="/vault">
            <li className="gsap-updown-custom-animate -translate-y-4 opacity-0 cursor-pointer font-semibold text-gray-600 hover:text-black text-lg transition-all hover:scale-105 duration-300">
              Vault
            </li>
          </Link>
          <Link to="/contact">
            <li className="gsap-updown-custom-animate -translate-y-4 opacity-0 cursor-pointer font-semibold text-gray-600 hover:text-black text-lg transition-all hover:scale-105 duration-300">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
