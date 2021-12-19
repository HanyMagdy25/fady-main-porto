import React from 'react';

import "./HomePage.css";

const HomePage = () => {
//     const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
    return (
        <div className="home">
            {/* <nav className="navbar-top">
                <div className="navbar-top-container">
                    <div className="logo-navbar">
                        <div className="logo-container">
                            <h1><span>F</span>ady</h1>
                        </div>
                    </div>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                </div>
            </nav>   */}

            <div className="home-container">
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>
                <div className="home-title">
                    <h1>"Hi! I'm Fady"</h1>
                    <p>Infrastructure Consultant</p>
                    <p>A Passionate Infrastructure Consultant with 11+ years of experience in Microsoft infrastructure, cloud services, network, and security.</p>
                </div>
                <div className="home-links">
                    <a href="https://www.facebook.com/FadyMounirSamy">
                    <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fadymounir/">
                    
                    <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fadymounir/">
                    <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/fadymounir/">
                    <i className="fab fa-twitter-square"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomePage
