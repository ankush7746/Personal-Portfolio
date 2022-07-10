import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/ib.png";
import profilePic2 from "../../img/gfg.jpg";
import profilePic3 from "../../img/hr2.jpg";
import profilePic4 from "../../img/ib.png";



const Testimonial = () => {
  const clients = [
    {
    
      img: profilePic1,
      review:
     "Achieved Rank 1 at Interview Bit in NIT BHOPAL.",
     
         
    },
    {
      img: profilePic2,
      review:
        "GeeksForGeeks ranking under top 3 among 4200 students in NIT BHOPAL.",
    },
    {
      img: profilePic3,
      review:
        "4 Star Coder at HackerRank.",
    },
    {
      img: profilePic4,
      review:
        "Global Ranking Under 2000 at Interview Bit.",
    },
  ];
 <a></a>
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Here are some of my </span>
        <span>Achievements </span>
        <span></span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
