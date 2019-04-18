import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Navigation from "../components/navigation/Navigation";
import Title from "../components/title/Title";
import Footer from "../components/footer/Footer";
import './about.css';


function About() {
    return (
        <div>
            <Navigation logoTitle ="Anna Park" />
            <Title pageTitle = "ABOUT ME"/>
            <Container>
                <Row>
                    <Col sm={2}>
                        <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/47317043_10212110909320708_1866084773814861824_o.jpg?_nc_cat=100&_nc_ht=scontent-dfw5-1.xx&oh=1fbc717d8f8c569dd4535a73041934ed&oe=5D2A6F31" id = "mypic" className="picOfMe" alt="Anna Park"/>  
                    </Col>
                    
                    <Col sm={10}>
                        <p id ="mybio">

                            I am a Korean-American born and raised in San Antonio, Texas. I attended the Univeristy of Texas at Austin and graduated with a Bachelor's of Science and Arts in Biology in 2018. Promptly after graduation, I enrolled in The Coding Bootcamp at UT and recieved a certifiate in Full Stack Web Development. While enrolled in coding boot camp, I spent time building my programming and debugging skills for both client and server side applications. I am focused and diligent when managing workloads and prioritizing tasks to meet deadlines. I thrive in environments where I am able to make a direct impact utilizing quality control skills and complex problem-solving to find solutions and achieve results.

                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer/>

            
        </div>
    );
}

export default About;