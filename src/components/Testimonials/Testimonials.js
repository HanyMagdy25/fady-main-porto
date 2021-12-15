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
          What people say about me.
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
              title={"Doug Becker"}
              image={TestOne}
              position={"Project Manager"}
              qoute={"I Project Managed a SharePoint migration where Fady was the Lead Engineer. He did a great job. Full understanding of the customer's requirements. Timely implementation and migration. Excellent communication with the customer and the rest of the technical team. Customer was very happy with the end result of the project. I would not hesitate to work with Fady again and highly recommend him"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestiModel
              title={"Mohamed Abd Elmaksoud"}
              image={TestTwo}
              position={"Business Development Consultant"}
              qoute={'It’s my absolute pleasure to recommend Fady M. Samy. I thoroughly enjoyed my time working with him and came to know him as a truly valuable asset to absolutely any team. He is honest, dependable, and incredibly hard-working. His knowledge of network engineering and expertise in infrastructure/cloud projects was a huge advantage. He put this skillset to work in order to increase our business achievement. Along with his undeniable talent, Fady has always been an absolute joy to work with. He is a true team player and always manages to foster positive discussions and bring the best out of other employees. Without a doubt, I confidently recommend fady. As a dedicated, knowledgeable and an all-around great person, I know that he will be a beneficial addition to any enterprise .'}
            />
          </SwiperSlide>
          <SwiperSlide>
          <TestiModel
              title={"Farooq Khan"}
              image={TestTwo}
              position={"Senior IT Deployment Manager at Vodafone Group Service GmbH"}
              qoute={'I had the opportunity to work with Fady for more than 2.5 years. He is passionate and friendly and command good communication skills. He possess high commitment with the services, strong technical understanding , end user commitment, and holds very strong problem solving skills. I wish him good luck.'}
              />
          </SwiperSlide>
          <SwiperSlide>
          <TestiModel
              title={"Abeer Makki"}
              image={TestTwo}
              position={"Store Technology – MBA Digital Transformation candidate"}
              qoute={'I was pleased to work with Fady for nearly 1 year. Fady was one of key players in vodafone collaboration team, and one of the best I ever worked with, very dedicated and self driven. ’m really impressed with his knowledge and level of technicality. Moreover, his ability to solve problems is really outstanding. We worked together to enhance monitoring the Sharepoint solution. The extra effort he put into this really made a big difference not only for me, but the team also. Thank you!'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <TestiModel
              title={"Noha Salah"}
              image={TestTwo}
              position={"Customer Success & Inside Sales Sr Specialist at CEQUENS"}
              qoute={"I worked with Fady for a couple of years. He has excellent technical knowledge and communication skills enough to solve any customer's issue and make him happy and very satisfied. Our customers are very skilled techies based in the US and Europe and always have the confidence that their technical issues will be solved, thanks to him. His dedication to work and productivity contributed to the growth of the business, not only he helped our business serve satisfied and loyal customers but also helped in doing business with new enterprises overseas. I'm so proud and pleased to work with him and looking forward to working with him someday."}
            /></SwiperSlide>
          <SwiperSlide>
          <TestiModel
              title={"Bassant Morgan"}
              image={TestTwo}
              position={"Business Analyst at Vodafone International Service"}
              qoute={'Fady was not such my colleague in Vodafone but also he was a brother. I was enjoying travelling with him... He is so professional, hard worker and dedicated. It was very nice working with you. :)'}
            />
          </SwiperSlide>
          <SwiperSlide>
          <TestiModel
              title={"Ahmed AbdElMoneim"}
              image={TestTwo}
              position={"Application Manager"}
              qoute={'I’ve worked with Fady for more than 2 years in two different teams under the same Collaboration domain however we worked together a lot. He always used to provide work with good quality. Fady supported the HUB service –Vodafone worldwide intranet- for long time where he used to handle support cases, vendor engagements & SharePoint deployments successfully in a professional way. Also he handled different high value projects like Vodafone Discover & Vodafone Learning Platform. Fady was always an example of discipline & providing work with good quality. I always have a great admiration to Fady either on the work level or the personal level. I wish him the best in his new challenges.'}
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
