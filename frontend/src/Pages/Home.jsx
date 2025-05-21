import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import backgroundImageInHome from "../assets/home-bg-1.jpg";
import backgroundImageInHome2 from "../assets/home-bg.jpg";
import { gsap } from "gsap";
import { CSSPlugin, ScrollTrigger } from "gsap/all";
import "./customCSS.css";

const Home = () => {
  const bgImageRef = useRef(null);

  const handleMouseMoveForOverlayEffect = (event) => {
    const brightImageOverlay = document.querySelector("#bright-image-overlay");
    const brightTextOverlay = document.querySelector("#bright-text-overlay");

    requestAnimationFrame(() => {
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
        brightTextOverlay.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%)`;
        brightImageOverlay.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%)`;
      }

      // for image overlay
      brightImageOverlay.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) ${
        (event.clientX / window.innerWidth) * 100
      }%, rgba(0, 0, 0, 0) ${(event.clientX / window.innerWidth) * 100}%)`;

      //for text overlay
      const textRect = brightTextOverlay.getBoundingClientRect();

      if (event.clientX < textRect.x) {
        brightTextOverlay.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 0%)`;
        return;
      } else if (event.clientX > textRect.x + textRect.width) {
        brightTextOverlay.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%)`;
        return;
      }
      if (
        event.clientX >= textRect.x &&
        event.clientX <= textRect.x + textRect.width
      ) {
        brightTextOverlay.style.maskImage = `linear-gradient(to right, rgba(0, 0, 0, 1) ${
          ((event.clientX - textRect.x) / textRect.width) * 100
        }%, rgba(0, 0, 0, 0) ${
          ((event.clientX - textRect.x) / textRect.width) * 100
        }%)`;
      }
    });
  };

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        bgImageRef.current,
        { scale: 0.85, opacity: 0, filter: "blur(10px)" },
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
                transition: "mask-image 0.4s ease-linear",
                maskImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 50%)`,
              }}
            />
            <img
              src={backgroundImageInHome}
              alt=""
              className="w-full h-full object-cover absolute top-0 sm:block z-95"
            />
          </div>
          <div className="absolute top-1/4 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center pointer-events-none relative">
              <div
                className="flex flex-col items-center pointer-events-none z-20"
                id="bright-text-overlay"
                style={{
                  transition: "mask-image 0.4s ease-linear",
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
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
