import React from "react";
import "./About.css";

function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          
          <div className="col__2">
            <h1 className="about__heading">About Us</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Arcshop is an E-retailer that specializes in gaming electronics, video games, and gaming merchandise. Here you can find products starting from gaming consoles to RGB cables. We know how annoying it can be for gamers to search a bunch of websites to get genuine products at the right price. Our mission is to provide a seamless shopping experience to gamers and creators.
              </p>
              <p className="about__text p__color">
              We also provide a feature where one can build a custom PC that suits their style, requirement and budget. One can choose over 1000s of components spread across multiple categories, whether you want to build a Gaming PC, Editing PC or Workstation PC, we got your back. 
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
