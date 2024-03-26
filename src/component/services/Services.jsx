import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>what I offer</h5>
      <h2>Services</h2>

      <div className="contain services_container">
        <article className="service">
          <div className="service_head">
            <h3>UX / UI Design</h3>
          </div>
         
          
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>I create landing page designs of any kind.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p> I design latest and trending designs with customised icons.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>I also collaborate with a team or group of co-engineers.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>I create my own illustration for each job if needed.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>My Fees are moderate and open to negotiations.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Video/image Editing </h3>
          </div>
         
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>I have several years of experience working as video and image editing of any kind.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>I have been working with corel draw, canva, adobe photoshop ETC.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>For video editing i have a skill working with adobe premium, After Effect capcut ETC.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>Editing is my hubby bring all your Ideas lets make it a reality.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>My Fees are moderate and open to negotiations.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>I have been a content creator since 2013.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>I have worked with 3 companies for over 5 years as a proffessional blogger.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p> I also create ADs and generate leeds to boost sale.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>I can be your brand ambassedor and help grow your business.</p>
            </li>
          </ul>
          <ul className="service_list">
            <li>
              <BiCheck className="serice_list_icons" />
              <p>My Fees are moderate and open to negotiations.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
