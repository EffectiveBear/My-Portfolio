import gsap from "gsap";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
gsap;

const Contact = () => {
  useEffect(() => {
    const rect = document
      .querySelector("#top-moving-photo-original-position")
      .getBoundingClientRect();

    gsap.to("#top-moving-photo-icon", {
      x: rect.left,
      y: rect.top,
      rotate: 0,
      xPercent: -50,
      yPercent: -80,
      scale: 1,
      border: "3px solid black",
      duration: 0,
    });
  }, []);
  const navigate = useNavigate();

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => {
      navigate("/feats");
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });
  return <div>Contact</div>;
};

export default Contact;
