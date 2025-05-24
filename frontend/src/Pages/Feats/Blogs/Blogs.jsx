import React, { useEffect } from "react";
import "./Blogs.css";
import class10Topperphoto from "../../../assets/12TOPPER.jpg"
import class12Topperphoto from "../../../assets/TOP100IOE.jpg"
import bestFlashmobphoto from "../../../assets/FLASHMOB.jpg"
import Cprojectphoto from "../../../assets/voting-system-image.jpg"
import SICcampusphoto from "../../../assets/sic-campus.jpg"
import miniBallPhoto from "../../../assets/mini-ball-photo.jpg"
import gsap from "gsap";

const Memories = () => {
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
  return (
    <div className="container flex justify-center items-center">
      <div className="memories w-[95%]">
        <Memory
          image={class10Topperphoto}
          heading="Topper of Kanakai municipality(2079) - NEB 2079"
          description="I have secured 1st position in the NEB 2079 +2 exams, becoming the topper of Kanakai Municipality with an outstanding 3.76 GPA. In acknowledgment of my accomplishment, the Mayor presented me with distinguished awards, marking my success with honor and celebration."
        />
        <Memory
          image={class12Topperphoto}
          heading="Top 100 in IOE Entrance Examination - IOE 2079"
          description="I have secured Rank 73 in the IOE Entrance Examination (IOE 2079), earning a full scholarship to pursue civil engineering. This achievement marks a significant milestone in my academic journey, opening doors to an exciting future in engineering. 
"
        />
        <Memory
          image={bestFlashmobphoto}
          heading="Organized the Best Flashmob Ever - FLASHMOB 2081"
          description={`We organized the best flashmob ever :-FLASHMOB 2081, together with incredible friends like Suyog Mahato, Swastiishree, Prabesh Waiba (my inspiration in dancing), Rasmi Mishra, Dipika, Nikita, and Ashim. Our electrifying performance on "Kurchi Madapetti" went viral, amassing over 1 million likes on Instagram and getting featured by Times of India and PinkVilla. As the coordinator for Aadhar 2081, I had the privilege of leading and shaping this unforgettable event, making it a celebration of creativity, passion, and pure energy.
`}
        />
        <Memory
          image={Cprojectphoto}
          heading="Mini Voting System using C/C++ - C/C++ Project"
          description="We built the Mini Voting System as our 1st semester C Final Project, aiming to implement a basic election process using C/C++. The system includes admin, candidates, and voters, allowing the admin to set up voters and control access. Each voter is assigned a login username and password, ensuring only registered users can participate.
                      During the election, voters can log in and vote for candidates, while unauthorized users cannot access the system. Once the voting ends, the final candidate rankings are displayed based on votes received. This project helped us understand user authentication, structured data handling, and basic programming logic in C/C++.
"
        />
        <Memory
          image={miniBallPhoto}
          heading="Mini Ball game using HTML Canvas - Personal project"
          description="I have built the Mini Ball Game using HTML Canvas, showcasing dynamic ball movement through JavaScript animations and event handling. The game implements real-time rendering, allowing users to interact with the ball while demonstrating collision detection mechanics. This project highlights creative coding and an engaging use of canvas functionalities. 

"
        />
        <Memory
          image={SICcampusphoto}
          heading="Completed Samsung Interactive Python - SIC 2025"
          description="I recently completed an 80-hour long Interactive Python course organized by Samsung Interactive Campus under Coding & Programming. It was an exciting and rewarding experience, where I got to dive deep into Python and apply what I learned in hands-on projects. At the end of the course, I worked on a capstone project where my team and I developed an NPL analysis program. The entire journey—from learning new concepts to building a functional project—was both challenging and fun!"
        />
      </div>
    </div>
  );
};
function Memory(props) {
  {
    return (
      <div className="memory shadow-md py-8 max-h-[50vh]:">
        <div className="memory-image">
          <img src={props.image} alt="no" className="cursor-pointer" />
        </div>
        <div className="memories-details titillium-web ">
          <h4 className="league-spartan text-4xl mb-8 sm:text-3xl">{props.heading}</h4>
          <p className="titillium-web">{props.description}</p>
        </div>
      </div>
    );
  }
}
export default Memories;
