import gsap from "gsap";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactImport from "../Pages/Contact/Contact";
import { Toaster } from "react-hot-toast";

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
    gsap.to(".contact-container-animation-gsap", {
      background: `linear-gradient(
    135deg,
    rgb(242, 242, 242) 0%,
    #ddf0e3 100%
    
  )`,
      duration: 1,
    });
  }, []);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-full flex-col contact-container-animation-gsap">
      <Toaster position="top-center" reverseOrder="false" />

      <h3 className="underline underline-offset-8 text-2xl opacity-100 lg:opacity-100 tittilium-web mx-8 mt-12 ">
        SEND ME A MAIL
      </h3>
      <ContactImport />
    </div>
  );
};

export default Contact;
