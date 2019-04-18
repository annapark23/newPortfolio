import React from "react";
import Navigation from "../components/navigation/Navigation";
import Title from "../components/title/Title";
import Footer from "../components/footer/Footer";
import ProjectCard from "../components/card/ProjectCard";
import {Container, Row, Col} from "react-bootstrap";


function Projects() {
    return (
        <div>
            <Navigation logoTitle ="Anna Park" />
            <Title pageTitle = "PROJECTS"/>

            <Container>
                <Row>
                    <Col sm={3}>
                        <ProjectCard CardTitle ="Cat Collector" cardImage={require("../images/cat.png")} cardLink ="https://annapark23.github.io/unit-4-game/"/>
                    </Col>
                    
                    <Col sm={3}>
                        <ProjectCard CardTitle ="Psychic Game " cardImage={require("../images/psychic.png")} cardLink ="https://annapark23.github.io/Psychic-Game/"/>
                    </Col>

                    <Col sm={3}>
                        <ProjectCard CardTitle ="GifTastic" cardImage={require("../images/gif.png")} cardLink ="https://annapark23.github.io/giftastic/"/>
                    </Col>

                    <Col sm={3}>
                        <ProjectCard CardTitle ="Trivia Game" cardImage={require("../images/trivia.png")} cardLink ="https://annapark23.github.io/TriviaGame/"/>
                    </Col>
                </Row>

                <Row>
                    
                    
                    <Col sm={3}>
                        <ProjectCard CardTitle ="Sunny Weekend" cardImage={require("../images/sunny.png")} cardLink ="https://annapark23.github.io/Project1/"/>
                    </Col>

                    <Col sm={3}>
                        <ProjectCard CardTitle ="Liri Bot" cardImage={require("../images/liri.png")} cardLink ="https://github.com/annapark23/liri"/>
                    </Col>

                    <Col sm={3}>
                        <ProjectCard CardTitle ="Bamazon" cardImage={require("../images/bam.png")} cardLink ="https://github.com/annapark23/node-sql"/>
                    </Col>
                    
                    <Col sm={3}>
                        <ProjectCard CardTitle ="Burger List" cardImage={require("../images/burger.png")} cardLink ="https://github.com/annapark23/burger"/>
                    </Col>

                </Row>

                <div id ="lastRow">
                
                <Row>
                    <Col sm={3}>
                        <ProjectCard CardTitle ="Brew-Stash" cardImage={require("../images/brew.png")} cardLink ="https://brewstash.herokuapp.com/"/>
                    </Col>
                    
                    <Col sm={3}>
                        <ProjectCard CardTitle ="Mongo Scrape" cardImage={require("../images/mongo.png")} cardLink ="https://github.com/annapark23/scrape"/>
                    </Col>

                    <Col sm={3}>
                        <ProjectCard CardTitle ="Clicky Game" cardImage={require("../images/clicky.png")} cardLink ="https://github.com/annapark23/ClickyGame"/>
                    </Col>

                    <Col sm={3}>
                        <ProjectCard CardTitle ="Justo" cardImage={require("../images/justo.png")} cardLink ="https://immense-tundra-20963.herokuapp.com/"/>
                    </Col>
                </Row>
                </div>

            </Container>
            <Footer/>

        </div>
        
);
}

export default Projects;