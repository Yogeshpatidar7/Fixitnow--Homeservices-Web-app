import React, { useState } from "react";
import { useAuth } from "../store/auth";

function About(){

    const {user} = useAuth();
    


    return(
        <>
            <div className="about-section">

                <div className="about-img">
                    <img className="about-img" src="./Assets/img/Aboutimg.jpg" alt="" />
                </div>

                <div className="about-intro">
                    
                    <div className="about-para">
                    <h3>Welcome, { user ?  ` ${user.username} to our website.` : `to our website.` } </h3>
                        A brief about<br /> <span id="fixitnow">E-HOUSEHOLD SERVICES</span> </div>
                    <p className="about-text">
                        <b>"E-Household Services"</b> is like a super easy way to get stuff fixed at home. You just tap on your phone, and boom! You find awesome pros to help with cleaning, painting, fixing pipes, repairing and more. It's like having a handy helper right on your phone! </p>
                </div>

               
            </div>
        </>
    )
}

export default About