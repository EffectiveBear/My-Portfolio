import React, { useEffect, useRef, useState } from "react";
import backgroundImageInHome from "../assets/home-bg-1.jpg";
import backgroundImageInHome2 from "../assets/home-bg.jpg";
import { gsap } from "gsap";
import myImageIcon from "../assets/my-icon.jpg";
import "./customCSS.css";
import Typed from "typed.js";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
    </>
  );
};

const AboutMe = () => {
  const aboutMeTextRef = useRef(null);

  useEffect(() => {
    let imageBox = document.querySelector(".image-box").getBoundingClientRect();
    const topIconBox = document.querySelector("#top-moving-photo-icon");
    window.scrollTo(0, 0);
    const gsapTransitionforIconBox = () => {
      gsap.matchMedia().add("(min-width: 1024px)", () => {
        if (
          window.scrollY + window.innerHeight >
            imageBox.top + imageBox.height * 0.4 &&
          window.scrollY + window.innerHeight <
            imageBox.top + imageBox.height * 1.5
        ) {
          new Typed(aboutMeTextRef.current, {
            strings: [
              "I'm Ashutosh Dahal, a 3rd year Civil Engineering student at IOE Pulchowk Campus. I'm interested in how things work—whether it's structures in the real world or systems in the digital one. Alongside my engineering studies, I enjoy learning about design, development, and building things that are both useful and thoughtful. Lately, I've been exploring web development and finding ways to bring ideas to life online. I value clarity, curiosity, and good design:- whether in code, concrete, or conversation.",
            ],
            typeSpeed: 1,
            backSpeed: 0,
            showCursor: false,
            loop: false,
          });

          gsap.timeline().to(topIconBox, {
            x: imageBox.left + imageBox.width / 2,
            y: imageBox.top + imageBox.height / 2,
            xPercent: -50,
            yPercent: -50,
            transformOrigin: "50% 50%",
            scale: 8,
            rotate: 360,
            border: "2px solid #ddf0e3",
            duration: 0.75,
          });
        } else {
          gsap.timeline().to(topIconBox, {
            x: "",
            y: "",
            transform: "",
            duration: 0.75,
            rotate: 0,
            scale: 1,
            border: "",
          });
        }
      });
    };

    gsapTransitionforIconBox();
    window.addEventListener("scroll", () => {
      gsapTransitionforIconBox();
    });
    window.addEventListener("resize", () => {
      location.reload();
    });
  }, []);

  return (
    <div className="flex justify-center items-center bg-gradient-custom-about-me about-me-scroll-link">
      <div className="w-[95vw] sm:w-[80vw] min-h-[40vh] lg:h-[60vh] flex  flex-col-reverse lg:flex-row justify-between  lg:mt-auto ">
        <div className="text-box basis-3/5  h-3/5 sm:h-full flex justify-center items-center">
          <div className="my-6 sm:mt-20 mt-1 flex flex-col justify-start items-center">
            <h3 className="underline underline-offset-8 text-3xl titillium-web sm:my-10 my-3 self-start">
              ABOUT ME
            </h3>
            <p
              ref={aboutMeTextRef}
              className="whitespace-pre-wrap text-left text-lg self-start overflow-visible max-w-[900px]"
            >
              {window.innerWidth < 1024 &&
                `"I'm Ashutosh Dahal, a 3rd year Civil Engineering student at IOE Pulchowk Campus. I'm interested in how things work—whether it's structures in the real world or systems in the digital one. Alongside my engineering studies, I enjoy learning about design, development, and building things that are both useful and thoughtful. Lately, I've been exploring web development and finding ways to bring ideas to life online. I value clarity, curiosity, and good design:- whether in code, concrete, or conversation."`}
            </p>
          </div>
        </div>
        <div className="image-box basis-2/5 h-2/5 sm:h-full flex justify-center items-center mt-10">
          <div className="rounded-full w-[60vw] overflow-hidden mx-2 border-3  justify-start items-center lg:hidden flex">
            <img
              src={myImageIcon}
              alt="my image"
              className="scale-110 object-cover w"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const bgImageRef = useRef(null);

  const handleMouseMoveForOverlayEffect = (event) => {
    const imageOverlay = document.querySelector("#bright-image-overlay");
    const textOverlay = document.querySelector("#bright-text-overlay");
    const buttonOverlay1 = document.querySelectorAll(".bright-btn-overlay")[0];
    const buttonOverlay2 = document.querySelectorAll(".bright-btn-overlay")[1];

    const overlayFunction = (DomSelector, event) => {
      const elementRect = DomSelector.getBoundingClientRect();

      if (event.clientX < elementRect.x) {
        DomSelector.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 0%)`;
        return;
      } else if (event.clientX > elementRect.x + elementRect.width) {
        DomSelector.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%)`;
        return;
      } else {
        DomSelector.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) ${
          ((event.clientX - elementRect.x) / elementRect.width) * 100
        }%, rgba(0, 0, 0, 0) ${
          ((event.clientX - elementRect.x) / elementRect.width) * 100
        }%)`;
      }
    };

    requestAnimationFrame(() => {
      {
        // darkImageOverlay.style.clipPath = `circle(20% at ${
        //   (event.clientX / window.innerWidth) * 100
        // }% ${(event.clientY / window.innerHeight) * 100}%)`;
        //   brightImageOverlay.style.maskImage = `radial-gradient(circle at ${
        //     (event.clientX / window.innerWidth) * 100
        //   }% ${
        //     (event.clientY / window.innerHeight) * 100
        //   }%, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 70%)`;
        // });
        if (window.innerWidth < 640) {
          textOverlay.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%)`;
          imageOverlay.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%)`;
          return;
        }

        overlayFunction(imageOverlay, event); //image-overlay
        overlayFunction(textOverlay, event); //text-overlay
        overlayFunction(buttonOverlay1, event);
        overlayFunction(buttonOverlay2, event);
      }
    });
  };

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        bgImageRef.current,
        { scale: 1.4, opacity: 0, filter: "blur(10px)" },
        { scale: 1, opacity: 1, duration: 1 }
      )
      .to(bgImageRef.current, { duration: 1, scale: 1, filter: "blur(2px)" });

    gsap
      .timeline()
      .from(".big-text-gsap", {
        x: -20,
        opacity: 0,
        duration: 1,
      })
      .fromTo(
        ".big-text-gsap",
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 }
      )
      .fromTo(
        ".small-text-gsap",
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 }
      )
      .fromTo(
        ".hero-button-animation-gsap-left",
        {
          y: -75,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        }
      )
      .fromTo(
        ".hero-button-animation-gsap-right",
        {
          y: 75,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
        }
      );
  }, []);

  return (
    <>
      <div className="flex justify-center items-center bg-gradient-custom">
        <div
          className="w-full h-[94vh] flex flex-col justify-center items-center overflow-hidden relative "
          onMouseMove={handleMouseMoveForOverlayEffect}
        >
          <div
            className="w-full h-full overflow-hidden shadow-2xl relative flex items-center justify-center"
            ref={bgImageRef}
          >
            <img
              src={backgroundImageInHome2}
              alt=""
              id="bright-image-overlay"
              className="w-full h-full object-cover filter brightness-[65%] z-100"
              style={{
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%)`,
              }}
            />
            <img
              src={backgroundImageInHome}
              alt=""
              className="w-full h-full object-cover absolute top-0 sm:block z-95 "
            />
          </div>
          <div className="absolute top-1/4 flex flex-col items-center justify-between md:h-1/2 h-1/3">
            <div className="flex flex-col items-center pointer-events-none relative">
              <div
                className="flex flex-col items-center pointer-events-none z-20"
                id="bright-text-overlay"
                style={{
                  maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%)`,
                }}
              >
                <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-custom-color league-spartan font-extralight whitespace-pre pointer-events-none big-text-gsap">
                  {"  "}A S H U T O S H{"    "} D A H A L
                </h3>
                <p className="text-xs sm:text-sm md:text-lg lg:text-2xl  my-2 sm:my-6 league-spartan font-extralight whitespace-pre xs-scale-reduce-for-text text-custom-color mx-5 px-5 sm:px-0 sm:mx-auto pointer-events-none small-text-gsap">
                  "{"  "}E X C I T E D{"      "}T O{"      "}L E A R N ,
                  {"      "}E N T H U S I A S T I C{"      "}T O{"      "}B U I
                  L D "
                </p>
              </div>

              <div
                className="flex flex-col items-center pointer-events-none absolute "
                id="green-text-overlay"
              >
                <h3 className="text-2xl sm:text-3xl  text-custom-color-green md:text-5xl lg:text-6xl text-custom-color league-spartan font-extralight whitespace-pre pointer-events-none big-text-gsap">
                  {"  "}A S H U T O S H{"    "} D A H A L
                </h3>
                <p className="text-xs sm:text-sm md:text-lg text-custom-color-green lg:text-2xl  my-2 sm:my-6 league-spartan font-extralight whitespace-pre xs-scale-reduce-for-text text-custom-color mx-5 px-5 sm:px-0 sm:mx-auto pointer-events-none small-text-gsap">
                  "{"  "}E X C I T E D{"      "}T O{"      "}L E A R N ,
                  {"      "}E N T H U S I A S T I C{"      "}T O{"      "}B U I
                  L D "
                </p>
              </div>
            </div>
            <div className="text-white text-2xl flex flex-col justify-between  md:h-1/3 h-fit  items-center w-full relative">
              <div className="self-start  relative transition-all duration-300 flex hover:scale-110 cursor-pointer my-5">
                <button
                  className="bright-btn-overlay text-xs sm:text-sm md:text-lg hero-button-animation-gsap-left w-fit z-10 sm:px-7 sm:py-3 py-3  px-3  border-3 rounded-lg titillium-web font-light"
                  style={{
                    maskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0) 100%)`,
                  }}
                >
                  See my Feats
                </button>
                <button className="dark-btn-overlay text-xs sm:text-sm md:text-lg hero-button-animation-gsap-left absolute w-fit z-9 sm:px-7 sm:py-3 py-3  px-3 border-3 rounded-lg border-green-400 text-green-400 titillium-web font-light ">
                  See my Feats
                </button>
              </div>
              <ScrollLink
                to="about-me-scroll-link"
                smooth={true}
                duration={1000}
                className="self-end"
              >
                <div className="self-end  relative transition-all duration-300 flex hover:scale-110 cursor-pointer my-5 ">
                  <button
                    className="bright-btn-overlay text-xs sm:text-sm md:text-lg hero-button-animation-gsap-right w-fit z-10 sm:px-7 sm:py-3 py-3  px-3 border-3 rounded-lg titillium-web font-light"
                    style={{
                      maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%)`,
                    }}
                  >
                    Learn about me
                  </button>
                  <button className="dark-btn-overlay text-xs sm:text-sm md:text-lg hero-button-animation-gsap-right absolute w-fit z-9 sm:px-7 sm:py-3 py-3  px-3 border-3 rounded-lg border-green-400 text-green-400 titillium-web font-light">
                    Learn about me
                  </button>
                </div>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
