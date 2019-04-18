import React, {Component} from "react";
import "./landing.css";

import Background from "../images/background.png"
import Footer from "../components/footer/Footer";


const myStyles = {
    backgroundImage: `url( ${Background})`,
    backgroundSize: "cover",
    height:"700px"
}

class Landing extends Component {
    render(){
        return(
            <div id="body">

                <div id ="myName">
                    <h1 id ="name">ANNA PARK</h1>
                </div>
                
                <p className ="bio">I am a Web Developer</p>
                <p className ="bio">looking for a full time position in 2019.</p>


                <div id ="links">
                    <a href="/about" className ="landingLinks">ABOUT ME </a>
                    <a href="/projects" className ="landingLinks">MY WORK</a>
                    <a href="/contact" className ="landingLinks">CONTACT ME</a>
                </div>
            {/* </header> */}
            <Footer/>

            </div>
            

        );
    } 

}

// // function Landing() {
//     return (
//         <div>
//             <div id ="myName">
//                 <h1 id ="name">ANNA PARK</h1>
//             </div>
            
//             <p className ="bio">I am a Web Developer,</p>
//             <p className ="bio">looking for a full time position in 2019.</p>


//             <div id ="links">
//                 <a href="/about" className ="landingLinks">About Me</a>
//                 <a href="/projects" className ="landingLinks">See my work</a>
//                 <a href="/contact" className ="landingLinks">Contact Me</a>
//             </div>
            

//         </div>
// );
// //}

export default Landing;