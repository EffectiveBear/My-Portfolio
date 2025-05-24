import React from "react";
import Blogs from "./Blogs/Blogs";
import '../customCSS.css'

const Feats = () => {

 
  return (
    <div   className="bg-gradient-custom-feats h-full flex justify-center items-center">
      <div className="flex justify-center items-center w-[full] h-full">
        <div className="flex justify-center items-center feats-big-container-gsap min-w-[95vw] min-h-[70vh] flex-col">
          <h3 className="underline underline-offset-8 text-3xl opacity-100 lg:opacity-100 tittilium-web  mx-8 mt-20 ">
            My FEATS/PROJECTS
          </h3>
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Feats;
