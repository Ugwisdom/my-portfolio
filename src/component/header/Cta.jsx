import React from "react";
import cv from "../../assets/cv.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={cv} download className="btn btn-bg">
        download my cv
      </a>
      <a href="#contact" className="btn btn-primary">
        Let`s talk
      </a>
    </div>
  );
};
export default Cta;
