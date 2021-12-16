import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-container">
          <div className="left-about">
            <div className="left-about-container">
              <div className="global-title">About Me</div>
              <div className="about-content">
                <h3>Hi, I'm <span>Fady Samy</span></h3>
                <p>
                  I'm an IT Professional with 11+ years of experience in Microsoft Systems & Network Infrastructure and Cloud Services.
                </p>
                <p>
                 "Specialties:"
    
                 "Microsoft Azure, Office 365, Cloud, Azure DevOps (VSTS), Microsoft SharePoint Server, Unified Communications, Microsoft Skype for Business Server, Microsoft Lync Server, Microsoft Teams, Enterprise Voice, Microsoft Exchange Server, Mail Security (Trend Micro), Unified Messaging, SQL Server, IIS, System Center, Virtualization (VMware, Hyper-V) , Network and Security (Cisco & Juniper & Aruba), Firewalls (PaloAlto & Fortigate & Cisco ASA), Backup Solutions (DPM, Veeam), Monitor Solutions (SCOM, PRTG, Veeam One, 24x7), Load Balancing (Kemp & Nginx), Linux, Technical & Customer Support, Troubleshooting, Video Conferencing and IT Services Operation & Delivery (ITIL based)."
                  </p>
              </div>
              <div className="about-btns">
                <a href="front.pdf" download="fady.pdf"><button className="first-btn">Download CV</button></a>
              </div>
            </div>
          </div>

          <div className="right-about">
            <div className="about-pic">
              <div className="about-pic-real"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
