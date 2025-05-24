import React, { use, useEffect, useRef, useState } from "react";
import backgroundImageInHome from "../assets/home-bg-1.jpg";
import backgroundImageInHome2 from "../assets/home-bg.jpg";
import { gsap } from "gsap";
import "./customCSS.css";
import Typed from "typed.js";
import { Link as ScrollLink } from "react-scroll";
import EducationImported from "./Education/Education";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImageIcon from "../assets/my-icon.jpg";
import myTreatIconPhoto from "../assets/my-treat-photo.jpg";
import myEngineerIconPhoto from "../assets/my-engineer-photo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const Home = () => {
  const navigate = useNavigate();

  const swipeHandler = useSwipeable({
    onSwipedRight: () => {
      navigate("/feats");
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    window.addEventListener("resize", () => {
      window.scrollTo(0, 0);
      location.reload();
    });
    return () => {
      window.removeEventListener("resize", () => {
        location.reload();
      });
    };
  }, []);

  return (
    <>
      <div {...swipeHandler}>
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
      </div>
    </>
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
            <div className="text-white text-2xl flex flex-col justify-between  md:h-1/3 h-fit  items-center w-[90%] sm:w-full relative">
              <Link to="/feats-and-projects" className="self-start">
                <div className="self-start  relative transition-all duration-300 flex hover:scale-110 cursor-pointer my-5">
                  <button
                    className="bright-btn-overlay cursor-pointer text-xs sm:text-sm md:text-lg hero-button-animation-gsap-left w-fit z-10 sm:px-7 sm:py-3 py-3  px-3  border-3 rounded-lg titillium-web font-light"
                    style={{
                      maskImage: `linear-gradient(to right, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0) 100%)`,
                    }}
                  >
                    See my Feats
                  </button>
                  <button className="dark-btn-overlay cursor-pointer text-xs sm:text-sm md:text-lg hero-button-animation-gsap-left absolute w-fit z-9 sm:px-7 sm:py-3 py-3  px-3 border-3 rounded-lg border-green-400 text-green-400 titillium-web font-light ">
                    See my Feats
                  </button>
                </div>
              </Link>
              <ScrollLink
                to="about-me-scroll-link"
                smooth={true}
                duration={1000}
                className="self-end"
              >
                <div className="self-end  relative transition-all duration-300 flex hover:scale-110 cursor-pointer my-5 ">
                  <button
                    className="bright-btn-overlay cursor-pointer text-xs sm:text-sm md:text-lg hero-button-animation-gsap-right w-fit z-10 sm:px-7 sm:py-3 py-3  px-3 border-3 rounded-lg titillium-web font-light"
                    style={{
                      maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 0%)`,
                    }}
                  >
                    Learn about me
                  </button>
                  <button className="dark-btn-overlay cursor-pointer text-xs sm:text-sm md:text-lg hero-button-animation-gsap-right absolute w-fit z-9 sm:px-7 sm:py-3 py-3  px-3 border-3 rounded-lg border-green-400 text-green-400 titillium-web font-light">
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

const AboutMe = () => {
  const [iconMoveErrorHandlingX, seticonMoveErrorHandlingX] = useState(null);
  const [iconMoveErrorHandlingY, seticonMoveErrorHandlingY] = useState(null);

  useEffect(() => {
    // if (!iconMoveErrorHandlingX || !iconMoveErrorHandlingY) {
    const topIconBox = document.querySelector("#top-moving-photo-icon");
    const rect = topIconBox.getBoundingClientRect();
    seticonMoveErrorHandlingY(rect.top);
    seticonMoveErrorHandlingX(rect.left);
    // }
  }, []);
  useEffect(() => {
    const aboutMeTextRef = document.querySelector(".about-me-text");
    let imageContainerGsap = document
      .querySelector(".image-container-gsap")
      .getBoundingClientRect();
    const topIconBox = document.querySelector("#top-moving-photo-icon");
    const iconBoxPhoto = topIconBox.querySelector("img");
    const aboutMeAllAnimationsGsap = gsap.matchMedia();

    aboutMeAllAnimationsGsap.add("(min-width: 1024px)", () => {
      const iconMoveTimeline = gsap.timeline({ paused: true }).to(topIconBox, {
        x: imageContainerGsap.left + imageContainerGsap.width / 2,
        y: imageContainerGsap.top + imageContainerGsap.height / 2,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
        scale: 10,
        rotate: 360,
        border: "2px solid #ddf0e3",
        duration: 0.75,
        onStart: () => {
          iconBoxPhoto.src = myEngineerIconPhoto;
        },
        onReverseComplete: () => {
          iconBoxPhoto.src = myImageIcon;
        },
      });

      const borderCurveTimeline = gsap
        .timeline({ paused: true })
        .to(".about-me-big-container-gsap", {
          borderBottomRightRadius: "30%",
          duration: 1,
        })
        .to(
          iconBoxPhoto,
          {
            scale: 1.2,
            duration: 1,
          },
          "<"
        );

      ScrollTrigger.create({
        trigger: ".image-container-gsap",
        start: "top 60%",
        onEnter: async () => {
          await iconMoveTimeline.play();
          borderCurveTimeline.play();
        },
        onLeaveBack: () => {
          iconMoveTimeline.progress(1).reverse();
          borderCurveTimeline.reverse();
        },
      });
    });

    const typewriter = () => {
      if (!window.matchMedia("(min-width: 1024px)").matches) return;

      if (
        window.scrollY + window.innerHeight >
          imageContainerGsap.top + imageContainerGsap.height * 0.4 &&
        window.innerWidth >= 1024
      ) {
        new Typed(aboutMeTextRef, {
          strings: [
            "I'm Ashutosh Dahal, a 3rd year Civil Engineering student at IOE Pulchowk Campus. I'm interested in how things work—whether it's structures in the real world or systems in the digital one. Alongside my engineering studies, I enjoy learning about design, development, and building things that are both useful and thoughtful. Lately, I've been exploring web development and finding ways to bring ideas to life online. I value clarity, curiosity, and good design:- whether in code, concrete, or conversation.",
          ],
          typeSpeed: 1,
          backSpeed: 0,
          showCursor: false,
          loop: false,
        });
      }
    };
    window.addEventListener("scroll", typewriter);
    return () => {
      window.removeEventListener("scroll", typewriter);

      aboutMeAllAnimationsGsap.revert();
     
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-gradient-custom-about-me about-me-scroll-link about-me-big-container-gsap">
      <div className="w-[95vw] sm:w-[80vw] min-h-[40vh] lg:h-[70vh] xl:h-[80vh] flex  flex-col-reverse lg:flex-row justify-between  lg:mt-auto ">
        <div className="text-box basis-3/5  h-3/5 sm:h-full flex justify-center items-center">
          <div className="my-6 mt-1 flex flex-col justify-center items-center">
            <h3 className="underline underline-offset-8 text-3xl titillium-web sm:my-10 my-3 ml-4 self-start">
              ABOUT ME
            </h3>
            <p className="whitespace-pre-wrap text-left sm:text-lg text-md px-4 self-start overflow-visible max-w-[900px] about-me-text">
              {window.innerWidth < 1024 &&
                `"I'm Ashutosh Dahal, a 3rd year Civil Engineering student at IOE Pulchowk Campus. I'm interested in how things work—whether it's structures in the real world or systems in the digital one. Alongside my engineering studies, I enjoy learning about design, development, and building things that are both useful and thoughtful. Lately, I've been exploring web development and finding ways to bring ideas to life online. I value clarity, curiosity, and good design:- whether in code, concrete, or conversation."`}
            </p>
          </div>
        </div>
        <div className="image-container-gsap basis-2/5 h-2/5 sm:h-full flex justify-center items-center mt-10">
          <div className="rounded-full w-[40vw] overflow-hidden mx-2 border-3  justify-start items-center lg:hidden flex">
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

const Education = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.matchMedia().add("(min-width: 1024px)", () => {
      const educationTimeline = gsap
        .timeline({ paused: true })
        .set(".education-text-animate-gsap", {
          y: -100,
          opacity: 0,
          scale: 1.4,
        })
        .to(".education-text-animate-gsap", {
          duration: 1,
          y: 0,
          opacity: 1,
          scale: 1,
        });

      ScrollTrigger.create({
        trigger: ".education-container-rect-gsap",
        start: "top 60%",
        once: true,
        onEnter: () => educationTimeline.play(),
        // onLeaveBack: () => educationTimeline.progress(1).reverse(),
      });
    });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center education-container-rect-gsap bg-gradient-custom-education min-h-[80vh] ">
        <div className="w-[90vw] flex justify-center items-center flex-col mt-20 mb-20">
          <div>
            <h2 className="underline underline-offset-8 opacity-100 lg:opacity-0 titillium-web text-2xl my-5 education-text-animate-gsap">
              MY EDUCATION
            </h2>
          </div>
          <EducationImported />
        </div>
      </div>
    </>
  );
};

const Skills = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const topIconBox = document.querySelector("#top-moving-photo-icon");
    const iconBoxPhoto = topIconBox.querySelector("img");
    const skillsBigContainerGsap = document.querySelector(
      ".skills-big-container-gsap"
    );
    const skillsContainerGsap = document.querySelector(
      ".skills-container-gsap"
    );

    const skillsContainerRectGsap = skillsContainerGsap.getBoundingClientRect();
    const skillsAllAnimationGsap = gsap
      .matchMedia()
      .add("(min-width: 1024px)", () => {
        const iconMoveTimeline = gsap
          .timeline({ paused: true })
          .to(topIconBox, {
            duration: 1,
            x: skillsContainerRectGsap.left + skillsContainerRectGsap.width / 2,
            y: skillsContainerRectGsap.top + skillsContainerRectGsap.height / 2,
            xPercent: -50,
            yPercent: -50,
            border: "2.5px solid #4e73dc",
            scale: 10,
            rotate: 0,
            ease: "circ.inOut",
            onStart: () => {
              iconBoxPhoto.src = myTreatIconPhoto;
            },
            onReverseComplete: () => {
              iconBoxPhoto.src = myEngineerIconPhoto;
            },
          })
          .to(
            ".skills-big-container-gsap",
            {
              duration: 1,
              ease: "power3.inOut",
              background:
                "linear-gradient(90deg,rgba(212, 186, 116, 0.51) 0%, rgba(93, 131, 204, 0.47) 100%, rgba(79, 124, 215, 0.5) 56%)",
              borderTopLeftRadius: "20%",
            },
            "<"
          );

        const skillListTimeline = gsap
          .timeline({ paused: true })

          .to(
            ".skills-list-text-animation-gsap",
            {
              opacity: 1,
              duration: 0.5,
            },
            "<"
          )
          .set(".skills-list-animation-gsap", {
            x: 100,
            opacity: 0,
          })
          .to(".skills-list-animation-gsap", {
            duration: 0.75,
            stagger: 0.05,
            x: 0,
            opacity: 1,
            // ease: "bounce.inOut",
          })
          .to(".skills-list-animation-gsap", {
            duration: 1,
            x: (i) => (i % 2 == 0 ? -75 : 75),
          });

        ScrollTrigger.create({
          trigger: skillsBigContainerGsap,
          start: "top 80%",
          onEnter: async () => {
            await iconMoveTimeline.play();
            skillListTimeline.play();
          },
          onLeaveBack: () => {
            iconMoveTimeline.progress(1).reverse();
            // skillListTimeline.reverse();
          },
        });
      });
    return () => {
      skillsAllAnimationGsap.revert();
    };
  }, []);
  return (
    <>
      <div className="bg-gradient-custom-skills flex justify-center items-center skills-big-container-gsap ">
        <div className="flex min-h-[50vh] justify-center items-center w-[90vw] flex-col lg:flex-row my-5">
          {/* This div is for floating image */}
          <div className="basis-1/2 min-w-1/2 min-h-full skills-container-gsap">
            {window.innerWidth < 1024 && (
              <div className="image-container-gsap basis-2/5 h-2/5 sm:h-full flex justify-center items-center mt-10">
                <div className="rounded-full w-[40vw] overflow-hidden mx-2 border-3  justify-start items-center lg:hidden flex">
                  <img
                    src={myImageIcon}
                    alt="my image"
                    className="scale-110 object-cover w"
                  />
                </div>
              </div>
            )}
          </div>
          <div className=" min-w-1/2 min-h-[90%] flex flex-col justify-start items-center my-8 ">
            <h3
              className="underline underline-offset-2 text-3xl opacity-100 lg:opacity-0 tittilium-web self-center lg:self-start my-8 mx-8 skills-list-text-animation-gsap"
              style={{ color: "#1e0b85" }}
            >
              MY SKILLS
            </h3>
            <div className="lg:flex lg:flex-col lg:gap-1 w-3/4 justify-start grid grid-cols-2 gap-3">
              {[
                "C/C++",
                "React",
                "Express",
                "Python",
                "AutoCAD",
                "Event Management",
                "Guitar/Flute",
                "Dancing",
              ].map((skill, key) => {
                return (
                  <div
                    key={key}
                    className={`skills-list-animation-gsap opacity-100 lg:opacity-0 bg-gradient-custom-skills-list text-md sm:text-2xl  my-[10px] py-2 px-4 font-semibold  border-2 border-gray-100 rounded-xl min-w-[90%] cursor-pointer  flex justify-center lg:block`}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
