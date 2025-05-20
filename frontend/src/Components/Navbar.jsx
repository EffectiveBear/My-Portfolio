import React from "react";
import myImageIcon from "../assets/my-icon.jpg";

const Navbar = () => {
  return (
    <nav className="">
      {/* this will be the image that will travel */}
      <div className="rounded-full border-1 border-black w-10 h-10 overflow-hidden ">
        <img src={myImageIcon} alt="my image" className="min-w-full min-h-full hover:scale-105 transition ease-linear duration-300"/>
      </div>

      <div>
        <h3 className="">Ashu's World</h3>
      </div>
    </nav>
  );
};

export default Navbar;
