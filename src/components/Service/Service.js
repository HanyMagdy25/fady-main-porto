import React, { useState } from "react";
import "./Service.css";
import FirstCardPic from "../../assets/test.jpg";
import SecondCardPic from "../../assets/test2.jpg";
import ThirdCardPic from "../../assets/fady.jpg";

const Service = () => {
  //first card
  const [firstDiv, setFirstDiv] = useState(false);
  const handleFirstDiv = () => setFirstDiv(!firstDiv);
  //second card
  const [secondtDiv, setSecondtDiv] = useState(false);
  const handleSecondtDiv = () => setSecondtDiv(!secondtDiv);
  //third card
  const [thirdDiv, setThirdDiv] = useState(false);
  const handleThirdtDiv = () => setThirdDiv(!thirdDiv);
  //fourth card
  const [fourthDiv, setFourthDiv] = useState(false);
  const handleFourthDiv = () => setFourthDiv(!fourthDiv);

  // const x = divContainer;

  return (
    <div className="service">
      <div className="service-container">
        <div className="service-title">
          <h1 className="global-title">What I Do</h1>
          <p>
            These are our works. Feel free to check them out.
          </p>
        </div>
        <div className="cards">
          <div className="cards-container">
            <div className="card-item">
              <div className="card-item-title">
                <span className="icon">
                  <i className="fas fa-american-sign-language-interpreting"></i>
                </span>
                <h3>IT Management</h3>
              </div>
              <button className="first-btn" onClick={handleFirstDiv}>
                Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="card-item">
              <div className="card-item-title">
                <span className="icon">
                  <i className="fab fa-windows"></i>
                </span>
                <h3>IT Operations</h3>
              </div>
              <button className="first-btn" onClick={handleSecondtDiv}>
                Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="card-item">
              <div className="card-item-title">
                <span className="icon">
                <i className="fas fa-project-diagram"></i>
                </span>
                <h3>Monitoring</h3>
              </div>
              <button className="first-btn" onClick={handleThirdtDiv}>
              Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="card-item">
              <div className="card-item-title">
                <span className="icon">
                <i className="fas fa-database"></i>
                </span>
                <h3>Disaster Recovery</h3>
              </div>
              <button className="first-btn" onClick={handleFourthDiv}>
              Learn More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

          </div>
        </div>
            
        {firstDiv && (
          <div className="first-div">
            <div className="first-div-container">
              <div className="first-div-inner">
                <img src={FirstCardPic} alt="test" />
                
                <h1>IT Management</h1>
                <p>
                  "I have over 10 years of combined experience managing and supporting technology for businesses in several industries.  I believe in empowering your business to rely on your technology in support of your business goals."
                </p>
                <p>
                  "To get started, I provide a technology assessment to determine your company’s needs.  I then work with you to plan a strategy to implement the desired solutions within a time frame that is reasonable for your company, on a payment plan that you can afford."
                </p>
                <p>
                  Test content 1 
                </p>
                <p>
                  Test content 2
                </p>
                
              </div>
            </div>
            <div className="remove-card">
              <span onClick={handleFirstDiv}>
                <i className="far fa-times-circle"></i>
              </span>
            </div>
          </div>
        )}

        {secondtDiv && (
          <div className="first-div">
            <div className="first-div-container">
              <div className="first-div-inner">
                <img src={SecondCardPic} alt="test" />
                
                <h1>IT Operations</h1>
                <p>
                  We provide a full range of managed services for your on-premises and cloud infrastructure and applications. We design and implement end-to-end solutions with the right KPIs.
                </p>
                <p>
                  Test content 1
                </p>
                <p>
                 Test content 2
                </p>
                <p>
                Test content 3
                </p>
                
              </div>
            </div>
            <div className="remove-card">
              <span onClick={handleSecondtDiv}>
                <i className="far fa-times-circle"></i>
              </span>
            </div>
          </div>
        )}

        {thirdDiv && (
          <div className="first-div">
            <div className="first-div-container">
              <div className="first-div-inner">
                <img src={ThirdCardPic} alt="test" />
                
                <h1>IT Monitoring</h1>
                <p>
                  "We design and implement end-to-end monitoring solutions with the right KPIs for your business case. We monitor the availability, network connectivity, performance and security of your infrastructure and applications 24/7 with free opensource tools."
                </p>
                <p>
                  Test content 1
                </p>
                <p>
                  Test content 2
                </p>
                <p>
                  Test content 3
                </p>
                
              </div>
            </div>
            <div className="remove-card">
              <span onClick={handleThirdtDiv}>
                <i className="far fa-times-circle"></i>
              </span>
            </div>
          </div>
        )}

        {fourthDiv && (
          <div className="first-div">
            <div className="first-div-container">
              <div className="first-div-inner">
                <img src={FirstCardPic} alt="test" />
                
                <h1>Motion Graphic Breakdown In Cinema 4D</h1>
                <p>
                  Planning for disaster recovery and data protection is an essential part of your business continuity plan.
                </p>
                <p>
                 Test content 1
                </p>
                <p>
                  Test content 2
                </p>
                <p>
                  Test content 3
                </p>
                
              </div>
            </div>
            <div className="remove-card">
              <span onClick={handleFourthDiv}>
                <i className="far fa-times-circle"></i>
              </span>
            </div>
          </div>
        )}



      </div>
    </div>
  );
};

export default Service;
