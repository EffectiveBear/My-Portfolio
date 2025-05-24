import React, { useEffect } from "react";
import "./Footer.css";
import footer_icon from "../../assets/title-icon.png";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";



const Footer = () => {
  const [trueCaste, setTrueCaste] = React.useState(true);
  useEffect(() => {
    const resizeCaste = () => {
      if (window.innerWidth <= 540) {
        setTrueCaste(false);
      } else {
        setTrueCaste(true);
      }
    };
    resizeCaste();
    window.addEventListener("resize", resizeCaste);
  }, []);
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={footer_icon} alt="icon" />
        <span className="trueName titillium-web text-amber-50">
          Ashutosh {trueCaste && <span>Dahal |</span>}{" "}
        </span>{" "}
        <span className="gameName bad-script-custom font text-amber-50">
          {" "}
          Effective Bear
        </span>
      </div>
      <span className="footer-middle true-bad-script-custom-font text-amber-50">
        Gamer for Life!
      </span>
      <div className="footer-right">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100090923439538"
              target="_blank"
            >
              <FaFacebook className="text-blue-600 border-2 border-green-200 rounded-full scale-160 mx-6 bg-white transition-transform hover:scale-180" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ashutosh.dahal/" target="_blank">
              <RiInstagramFill className="text-rose-400 border-2 border-green-200 rounded-full scale-160 mx-6 bg-white transition-transform hover:scale-180" />
            </a>
          </li>
          <li>
            <a href="https://github.com/EffectiveBear" target="_blank">
              {" "}
              <FaGithub className="text-black border-2 border-green-200 rounded-full scale-160 mx-6 bg-white transition-transform hover:scale-180" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ashutosh-dahal-3a3a5b273/"
              target="_blank"
            >
              <FaLinkedin className="text-blue-600 border-2 border-green-200 rounded-full scale-160 mx-6 bg-white transition-transform hover:scale-180" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
