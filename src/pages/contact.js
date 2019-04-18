import React from "react";
import Navigation from "../components/navigation/Navigation";
import Title from "../components/title/Title";
import Footer from "../components/footer/Footer";
import "./contact.css";


function Contact() {
    return (

        <div>
            <Navigation logoTitle ="Anna Park" />
            <Title pageTitle = "CONTACT"/>

            <p id ="contact">
                <i class="fas fa-at"></i> : annapark23@gmail.com

                <br/>
                <i class="fab fa-linkedin"></i>: 
                <a href="https://www.linkedin.com/in/anna-park-571925149/">LinkedIn</a>
                <br/>
                <i class="fab fa-github"></i> : 
                <a href="https://github.com/annapark23">GitHub</a>



            </p>
            <Footer/>

        </div>
        

        
);
}

export default Contact;