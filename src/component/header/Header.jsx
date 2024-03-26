import React from "react";
import "./Header.css";
import Cta from "./Cta";
import HeaderSocials from "./HeaderSocials";
import bg1 from "../../assets/bg1.png";
import Typed from "typed.js";

const Header = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "a Web Developer.",
        "an App developer.",
        "a Content creator.",
        "an Influencer.",
        "a Software Engr.",
        "an IT Consultant.",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <header id="home">
      <div className="container header__container">
        <div className="content">

          
          <h5 className="text-light name">Wisdom P. Ugwu</h5>
          <h1 className="">
            I am <span ref={el} className="multitext " />
          </h1>
          <Cta />
          <HeaderSocials />
        </div>
        <div className="hero_img">
          <img src={bg1} alt="profile" className="bg" />
        </div>
      </div>
    </header>
  );
};
export default Header;
