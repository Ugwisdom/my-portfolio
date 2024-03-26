import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
        <CiLinkedin className="footer_socials_icons" />
      </a>
      <a href="http://github.com/ugwisdom" target="_blank" rel="noopener noreferrer">
        <FaGithub className="footer_socials_icons" />
      </a>
      <a href="http://dribbble.com" target="_blank" rel="noopener noreferrer">
        <FaDribbble className="footer_socials_icons" />
      </a>
    </div>
  );
};
export default HeaderSocials;
