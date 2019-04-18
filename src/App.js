import React, { Component } from 'react';
import {BrowserRouter, Route } from "react-router-dom"; 
import Landing from "./pages/landing";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects  from "./pages/projects";
import './App.css';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route exact path = "/" component={Landing} />
				<Route exact path = "/about" component={About} />
				<Route exact path = "/contact" component={Contact} />
				<Route exact path = "/projects" component={Projects} />

			</BrowserRouter>
		);
	}
}

export default App;
