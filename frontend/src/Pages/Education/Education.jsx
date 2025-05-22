import React, { useEffect } from "react";
import "./Education.css";
import gsap from "gsap";
import class_10 from "../../assets/10-class.jpg";
import class_12 from "../../assets/12-class.jpg";
import bachelor from "../../assets/bachelor.jpg";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function EducationBox(props) {
  return (
    <div className="education titillium-web text-white education-card-animation-gsap">
      <img src={props.image} alt="class-12-img" />
      <div className="over-text-box">
        <div className="education-over-text">
          <h3 className=" titillium-web ">{props.level}</h3>
          <span className="titillium-web ">{props.sclName}</span>
          <p className="titillium-web ">
            Year: {props.startingYear} - {props.endingYear}
          </p>
        </div>{" "}
      </div>
    </div>
  );
}
const Education = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".education-container-rect-gsap",
          start: "top 70%",
          once: true,
          toggleActions: "play reverse play reverse",
        },
      })
      .fromTo(
        ".education-card-animation-gsap",
        {
          y: -75,
          opacity: 0,
        },
        {
          y: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.3,
        }
      );
  }, []);
  return (
    <div className="container">
      <div className="educations">
        {/* just for compensation of stagger */}
        <div className="education-card-animation-gsap"></div>

        <EducationBox
          image={class_10}
          level="Secondary"
          sclName="Shree Harikul Model Secondary School"
          startingYear="2011"
          endingYear="2019"
        />
        <EducationBox
          image={class_12}
          level="Higher Secondary"
          sclName="Shree Kankai Secondary School"
          startingYear="2020"
          endingYear="2022"
        />
        <EducationBox
          image={bachelor}
          level="Bachelor"
          sclName="IOE, Pulchowk Engineering Campus"
          startingYear="2023"
          endingYear="ongoing"
        />
      </div>
    </div>
  );
};

export default Education;
