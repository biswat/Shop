import React, {useState} from "react";
import "./Home.css";
import logo from "./img/arcshop.png";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img className="arcshop" src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Kryptonite</li>
              </a>
            </ul>
          </div>
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10"> </h1>
              <h5 className="home__text pz__10" style={{fontSize: "40px", fontStyle: "italic"}}>Games don't make you violent,</h5>
              <h5 className="home__text sweet pz__10" style={{fontSize: "40px", fontStyle: "italic"}}>
              lag does  </h5>
              <br />
              <br />
              <p className="home__text pz__10" style={{color:"#d815c1", fontSize:"50px"}}>One Stop Shop for Gamers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
