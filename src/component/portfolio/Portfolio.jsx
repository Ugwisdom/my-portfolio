import React, { useRef, useState } from "react";
import "./Portfolio.css";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
     
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';


// import required modules
//import { EffectFlip, Pagination, Navigation } from "swiper/modules";

import slides1 from "../../assets/slider/slides1.png";
import slides2 from "../../assets/slider/slides2.png";
import slides3 from "../../assets/slider/slides3.png";
import slides4 from "../../assets/slider/slides4.png";
import slides5 from "../../assets/slider/slides5.png";
import slides6 from "../../assets/slider/slides6.png";
import slides7 from "../../assets/slider/slides7.png";
import slides8 from "../../assets/slider/slides8.png";
import slides9 from "../../assets/slider/slides9.png";
import slides10 from "../../assets/slider/slides10.png";
import slides11 from "../../assets/slider/slides11.png";
import slides12 from "../../assets/slider/slides12.png";
import slides13 from "../../assets/slider/slides13.png";
import slides14 from "../../assets/slider/slides14.png";
import slides15 from "../../assets/slider/slides15.png";
import slides16 from "../../assets/slider/slides16.png";
import slides17 from "../../assets/slider/slides17.png";
import slides18 from "../../assets/slider/slides18.png";
import slides19 from "../../assets/slider/slides19.png";
import slides20 from "../../assets/slider/slides20.png";
import slides21 from "../../assets/slider/slides21.png";
import slides22 from "../../assets/slider/slides22.png";
import slides23 from "../../assets/slider/slides23.png";
import slides24 from "../../assets/slider/slides24.png";
import slides25 from "../../assets/slider/slides25.png";
import slides26 from "../../assets/slider/slides26.png";
import slides27 from "../../assets/slider/slides27.png";
import slides28 from "../../assets/slider/slides28.png";
import slides29 from "../../assets/slider/slides29.png";
import slides30 from "../../assets/slider/slides30.png";
import slides31 from "../../assets/slider/slides31.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Personal</h5>
      <h2>Images / Designs</h2>
      <div className="container portfolio_container">
        <div className="portfolio__div">
         

      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
          <img src={slides1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides11} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides12} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides13} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides14} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides15} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides16} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides17} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides18} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides19} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides20} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides21} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides22} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides23} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides24} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides25} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides26} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides27} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides28} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides29} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides30} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slides31} />
        </SwiperSlide>
      </Swiper>

        
        </div>
      </div>
      
    </section>
  );
};

export default Portfolio;
