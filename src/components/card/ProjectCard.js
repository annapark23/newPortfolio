import React, { Component } from 'react';
import { Card } from "react-bootstrap";
import "./ProjectCard.css";

class ProjectCard extends Component {
  render() {
    return(
      <Card>
      <Card.Img variant="top" src={this.props.cardImage} />
      <Card.Body>
        <Card.Text>
            <a href={this.props.cardLink}> {this.props.CardTitle}</a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
  }
}

export default ProjectCard;
