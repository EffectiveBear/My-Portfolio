import React, { useEffect, useRef } from "react";
import backgroundImageInHome from "../assets/home-bg-1.jpg";
import gsap from "gsap";
const Home = () => {
  const bgImageRef = useRef(null);
  const bgBigTextRef = useRef(null);
  const bgSmallTextRef = useRef(null);

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
      .from(bgBigTextRef, {
        x: 0,
        opacity: 1,
        duration: 1,
      })
      .fromTo(
        bgBigTextRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 }
      )
      .fromTo(
        bgSmallTextRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3 }
      );
  }, []);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[94vw] h-[94vh] flex flex-col justify-center items-center overflow-hidden relative ">
          <div
            className="w-full h-full overflow-hidden shadow-2xl "
            ref={bgImageRef}
          >
            <img
              src={backgroundImageInHome}
              alt=""
              className="w-full h-full object-cover  transition-all duration-2000 hover:scale-110 ease-linear "
            />
          </div>
          <div className="absolute top-1/4 flex flex-col items-center">
            <h3
              ref={bgBigTextRef}
              className="text-2xl sm:text-6xl league-spartan font-extralight whitespace-pre text-custom-color "
            >
              {"  "}A S H U T O S H{"    "} D A H A L
            </h3>
            <p
              ref={bgSmallTextRef}
              className="text-sm sm:text-2xl  my-2 sm:my-6 league-spartan font-extralight whitespace-pre text-custom-color mx-auto"
            >
              "{"  "}E X C I T E D{"      "}T O{"      "}L E A R N ,{"      "}E
              N T H U S I A S T I C{"      "}T O{"      "}B U I L D "
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
