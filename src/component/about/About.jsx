import React from "react";
import "./About.css";
import bg5 from "../../assets/bg5.png";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={bg5} alt="about me image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years working </small>
            </article>
            <article className="about_card">
              <FiUser className="about_icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>70+ Completed </small>
            </article>
          </div>
          <div className="about_p">
             <p>
            I am wisdom Ugwu, A software engineer with several years of working experience as a web developer and moblie App developer, I have a proven track record of creativity and exceptionalism. my goal is to create innovative ideas that exceeds any clients expectations. Lets collectively create and bring your Ideas to life.
          </p>
          </div>
         
          <a href="#contact" className="btn btn_primary">
            inbox me
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
