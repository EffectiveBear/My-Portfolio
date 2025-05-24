import React from "react";
import Blogs from "./Blogs/Blogs";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

const Feats = () => {
  const navigate = useNavigate();

  const swipeHandler = useSwipeable({
    onSwipedRight: () => {
      navigate("/contact");
    },
    onSwipedLeft: () => {
      navigate("/");
    },
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });
  return (
    <div {...swipeHandler}  className="bg-gradient-custom-feats h-full flex justify-center items-center">
      <div className="flex justify-center items-center w-[95%] h-full">
        <div className="flex justify-center items-center feats-big-container-gsap min-w-[95vw] min-h-[70vh] flex-col">
          <h3 className="underline underline-offset-8 text-3xl opacity-100 lg:opacity-100 tittilium-web  mx-8 mt-20 mb- ">
            My FEATS/PROJECTS
          </h3>
          <Blogs />
        </div>
      </div>
    </div>
  );
};

export default Feats;
