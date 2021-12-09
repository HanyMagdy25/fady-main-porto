import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.css";

import "swiper/swiper-bundle.css";
import "swiper/modules/pagination/pagination.min.css";

// import "./styles.css";

import SwiperCore, { Pagination } from "swiper";
import TestiModel from "./TestiModel";

import TestOne from "./../../assets/fady.jpg";
import TestTwo from "./../../assets/hany.jpg";

// install Swiper modules
SwiperCore.use([Pagination]);

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-container">
        <h1 className="global-title">Testimonials</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum
          sit nibh amet egestas tellus.
        </p>

        <Swiper
          spaceBetween={60}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestiModel
              title={"Fady Samy"}
              image={TestOne}
              position={"Designer"}
              qoute={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massasem faucibus nulla gravida arcu ante sollicitudin orci nuncgravida.Excepteur sint occaecat cupidatat non proident, sun in culpa qui officia deserunt mollit anim id est laborum. Sut perspiciatis unde omnis iste natur'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestiModel
              title={"Hany Magdy"}
              image={TestTwo}
              position={"Web Developer"}
              qoute={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massasem faucibus nulla gravida arcu ante sollicitudin orci nuncgravida.Excepteur sint occaecat cupidatat non proident, sun in culpa qui officia deserunt mollit anim id est laborum. Sut perspiciatis unde omnis iste natur'}
            />
          </SwiperSlide>
          <SwiperSlide>
          <TestiModel
              title={"Hany Magdy"}
              image={TestTwo}
              position={"Web Developer"}
              qoute={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massasem faucibus nulla gravida arcu ante sollicitudin orci nuncgravida.Excepteur sint occaecat cupidatat non proident, sun in culpa qui officia deserunt mollit anim id est laborum. Sut perspiciatis unde omnis iste natur'}
            />
          </SwiperSlide>
          <SwiperSlide>
          <TestiModel
              title={"Hany Magdy"}
              image={TestTwo}
              position={"Web Developer"}
              qoute={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massasem faucibus nulla gravida arcu ante sollicitudin orci nuncgravida.Excepteur sint occaecat cupidatat non proident, sun in culpa qui officia deserunt mollit anim id est laborum. Sut perspiciatis unde omnis iste natur'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestiModel
              title={"Hany Magdy"}
              image={TestTwo}
              position={"Web Developer"}
              qoute={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massasem faucibus nulla gravida arcu ante sollicitudin orci nuncgravida.Excepteur sint occaecat cupidatat non proident, sun in culpa qui officia deserunt mollit anim id est laborum. Sut perspiciatis unde omnis iste natur'}
            /></SwiperSlide>
          <SwiperSlide>
          <TestiModel
              title={"Hany Magdy"}
              image={TestTwo}
              position={"Web Developer"}
              qoute={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massasem faucibus nulla gravida arcu ante sollicitudin orci nuncgravida.Excepteur sint occaecat cupidatat non proident, sun in culpa qui officia deserunt mollit anim id est laborum. Sut perspiciatis unde omnis iste natur'}
            />
          </SwiperSlide>
          <SwiperSlide>
          <TestiModel
              title={"Hany Magdy"}
              image={TestTwo}
              position={"Web Developer"}
              qoute={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris ipsum sit nibh amet egestas tellus. Eu leo morbi massasem faucibus nulla gravida arcu ante sollicitudin orci nuncgravida.Excepteur sint occaecat cupidatat non proident, sun in culpa qui officia deserunt mollit anim id est laborum. Sut perspiciatis unde omnis iste natur'}
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
