import React from "react";
import "./Project.css";

function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 style={{fontSize:"45px"}} className="heading">What is Kryptonite</h1>
                <p style={{fontSize:"25px"}} className="heading p__color">
                    Superman fans must be familiar with the name 
                </p>
                <p style={{fontSize:"25px"}} className="heading p__color">
                kryptonite but here it's a bit different.
                </p>
                <p style={{fontSize:"25px"}} className="heading p__color">
                    Kryptonite is just like an in-app purchase feature in games.
                </p>
                <p style={{fontSize:"25px"}} className="heading p__color">
                You can earn kryptonite through your purchases and 
                </p>
                <p style={{fontSize:"25px"}} className="heading p__color">
                can redeem them on your subsequent purchases. 
                </p>
                <br />
                <br />
                <p style={{fontSize:"20px"}} className="heading p__color">
                    E.g. You purchased a Razer gaming Mouse for 6500 INR 
                </p>
                <p style={{fontSize:"20px"}} className="heading p__color">
                    now after the return period is over 30 Kryptonite
                </p>
                <p style={{fontSize:"20px"}} className="heading p__color">
                     will be credited to your account and the value
                </p>
                <p style={{fontSize:"20px"}} className="heading p__color">
                    of 1 kryptonite is 10 INR, So 300 INR worth money is credited.
                </p>
                <p style={{fontSize:"20px"}} className="heading p__color">
                    And you can use these to make partial or full payments on your subsequent purchases.
                </p> 
            </div>
        </div>
    );
}

export default Project;
