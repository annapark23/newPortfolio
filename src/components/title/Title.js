import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
  render() {
    return(
        <header>
            <h1>{this.props.pageTitle}</h1>
        </header>
    );
  }
}

export default Title;
