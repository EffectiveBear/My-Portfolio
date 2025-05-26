import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImageIcon from "../assets/my-icon.jpg";
import myTreatIconPhoto from "../assets/my-treat-photo.jpg";
import myEngineerIconPhoto from "../assets/my-engineer-photo.jpg";

const allIconAnimations = () => {
  //All necessary containers
  const imageContainerGsap = document
    .querySelector(".about-image-container-gsap")
    .getBoundingClientRect();

  const skillsContainerRectGsap = document
    .querySelector(".skills-container-gsap")
    .getBoundingClientRect();

  const originalContainerRectGsap = document
    .querySelector("#top-moving-photo-original-position")
    .getBoundingClientRect();

  //ICON Boxes
  const topIconBox = document.querySelector("#top-moving-photo-icon");
  const iconBoxPhoto = topIconBox.querySelector("img");

  // GSAP starts here
  const AllAnimationsGsap = gsap.matchMedia();

  AllAnimationsGsap.add("(min-width: 1024px)", () => {
    //MOVE TO ORIGINAL
    const iconMoveToOriginalTimeline = gsap
      .timeline({ paused: true })
      .to(topIconBox, {
        x: originalContainerRectGsap.left,
        y: originalContainerRectGsap.top ,
        xPercent: -50,
        yPercent: 0,
        transformOrigin: "50% 50%",
        scale: 1,
        rotate: 0,
        border: "2.8px solid black",
        duration: 0.6,
        onStart: () => {
          iconBoxPhoto.src = myImageIcon;
        },
      });

    //MOVE TO ABOUT
    const iconMoveToAboutFromOriginalTimeline = gsap
      .timeline({ paused: true })
      .set(topIconBox, {
        x: "",
        y: "",
        xPercent: "",
        yPercent: "",
        transformOrigin: "50% 50%",
        scale: 1,
        rotate: 0,
        border: "2px solid black",
        onStart: () => {
          iconBoxPhoto.src = myImageIcon;
        },
      })
      .to(topIconBox, {
        x: imageContainerGsap.left + imageContainerGsap.width / 2,
        y: imageContainerGsap.top + imageContainerGsap.height / 2,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
        scale: 10,
        rotate: 360,
        border: "2px solid #ddf0e3",
        duration: 0.6,
        onStart: () => {
          iconBoxPhoto.src = myEngineerIconPhoto;
        },
        onLeaveBack: () => {
          iconBoxPhoto.src = myImageIcon;
        },
      });
    const iconMoveToAboutFromSkillsTimeline = gsap
      .timeline({ paused: true })
      .set(topIconBox, {
        duration: 1,
        x: skillsContainerRectGsap.left + skillsContainerRectGsap.width / 2,
        y: skillsContainerRectGsap.top + skillsContainerRectGsap.height / 2,

        xPercent: -50,
        yPercent: -50,
        border: "2.5px solid #4e73dc",
        scale: 10,
        opacity: 1,
        rotate: 0,
        ease: "circ.inOut",
      })
      .to(topIconBox, {
        x: imageContainerGsap.left + imageContainerGsap.width / 2,
        y: imageContainerGsap.top + imageContainerGsap.height / 2,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
        scale: 10,
        rotate: 360,
        border: "2px solid #ddf0e3",
        duration: 0.6,
        onStart: () => {
          iconBoxPhoto.src = myEngineerIconPhoto;
        },
        onLeaveBack: () => {
          iconBoxPhoto.src = myImageIcon;
        },
      });

    //MOVE TO SKILLS

    const iconMoveToSkillsTimeline = gsap
      .timeline({ paused: true })
      .set(topIconBox, {
        x: imageContainerGsap.left + imageContainerGsap.width / 2,
        y: imageContainerGsap.top + imageContainerGsap.height / 2,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
        scale: 10,
        rotate: 360,
        border: "2px solid #ddf0e3",
      })
      .to(topIconBox, {
        duration: 1,
        x: skillsContainerRectGsap.left + skillsContainerRectGsap.width / 2,
        y: skillsContainerRectGsap.top + skillsContainerRectGsap.height / 2,

        xPercent: -50,
        yPercent: -50,
        border: "2.5px solid #4e73dc",
        scale: 10,
        opacity: 1,
        rotate: 0,
        ease: "circ.inOut",
        onStart: () => {
          iconBoxPhoto.src = myTreatIconPhoto;
        },
        onLeaveBack: () => {
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
    ScrollTrigger.create({
      trigger: ".about-image-container-gsap",
      start: "top 60%",
      onEnter: () => {
        iconMoveToAboutFromOriginalTimeline.restart();
      },
      onLeaveBack: (self) => {
        if (self.direction === -1) {
          iconMoveToOriginalTimeline.restart();
        } else {
          iconMoveToSkillsTimeline.restart();
        }
      },
    });
    ScrollTrigger.create({
      trigger: ".skills-big-container-gsap",
      start: "top 80%",
      onEnter: () => {
        iconMoveToSkillsTimeline.restart();
      },
      onLeaveBack: () => {
        iconMoveToAboutFromSkillsTimeline.restart();
      },
    });
  });
};

export default allIconAnimations;
