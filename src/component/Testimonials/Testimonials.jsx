import React from "react";
import "./Testimonials.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";
import avatar6 from "../../assets/avatar6.png";
import avatar7 from "../../assets/avatar7.png";
import avatar8 from "../../assets/avatar8.png";
import avatar9 from "../../assets/avatar9.png";


const data = [
  {
    avatar: avatar1,
    name: "Engr. victor jonathan",
    review:
      "it was fun working with you as a team, you are so smart and intelligent you are such a nice person, I hope to work with you  some other times in the future.",
  },
  {
    avatar: avatar2,
    name: "Miss grace ugwu",
    review:
      "I love the website you made for my business, it was really one of a kind very fast, interative and colourful more than what i expected.",
  },
  {
    avatar: avatar3,
    name: "Mr. paradise ",
    review:
      "you wow me with the disign you made for me, I have heard so many tales about how creative you are but now that i have seen for my self i am convinced.",
  },
  {
    avatar: avatar4,
    name: "Alh. Ibrahim",
    review:
      "The Ecomerce webApp you made for my shop is so effective and interactive, it has generated so much cash flow for my business, its a pleasure to meet you.",
  },
  {
    avatar: avatar5,
    name: "Mavelous God'swill",
    review:
      "I under esteemated you at first but now you have cleared all my doubt with your level of excellence and professionalism, keep it up boy I love your work.",
  },
  {
    avatar: avatar6,
    name: "Pamela johnson",
    review:
      "I must say your such a genius, so artistic and flawless, your designs took my business to another level thank you so much.",
  },
  {
    avatar: avatar7,
    name: "McClem Moses",
    review:
      "It was a great working with you as a team, your creative is just out of this world you deserve an award i look forward to working with in the future.",
  },
  {
    avatar: avatar8,
    name: "Miguel Godswill",
    review:
      "You are great teacher I have learnt so much from you in a short period of time thank you for teaching web design in an easy way.",
  },
  {
    avatar: avatar9,
    name: "Michelle williams ",
    review:
      "Bro I like the effort you put into the work you do, you are always prompt and keep to time you always within any given time frame keep it up bro.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients </h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[ Pagination,A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
