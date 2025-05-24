import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Feats from "./Pages/Feats/Feats";
import Footer from "./Components/Footer/Footer"
import gsap from "gsap";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer/>
      </BrowserRouter>
    </>
  );
};

const AnimatedRoutes = () => {
  const routesRef = useRef();
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(null);
  const locationOnOrder = ["home", "feats-and-projects", "contact"];
  const PAGE_TRANSITION_NUMBER = 30;
  const PAGE_TRANSITION_DURATION = 0.5;
  useEffect(() => {
    if (prevLocation == null && location.pathname == "/") {
      setPrevLocation(location.pathname);
      return;
    }

    if (prevLocation === location.pathname) {
      return;
    }
    gsap.fromTo(
      routesRef.current,
      {
        filter: "blur(25px)",
        xPercent: () => {
          setPrevLocation(location.pathname);
          if (prevLocation && location.pathname == "/") {
            return 0;
          }

          if (
            locationOnOrder.indexOf(String(prevLocation).split("/")[1]) <
            locationOnOrder.indexOf(String(location.pathname).split("/")[1])
          ) {
            return PAGE_TRANSITION_NUMBER;
          }
          return -PAGE_TRANSITION_NUMBER;
        },
      },
      {
        filter: "blur(0px)",
        xPercent: 0,
        duration: PAGE_TRANSITION_DURATION,
      }
    );
  }, [location.pathname]);
  return (
    <div ref={routesRef}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feats-and-projects" element={<Feats />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default App;
