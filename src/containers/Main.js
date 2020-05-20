import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Profile from "./profile/Profile";
import Projects from '../pages/projects/Projects';

export default class Main extends Component {
	render() {
		return (
			<div>
				<HashRouter basename="/">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/experience" exact component={Experience} />
						<Route path="/education" component={Education} />
						<Route path="/contact" component={Profile} />
						<Route path="/projects" component={Projects} />
					</Switch>
				</HashRouter>

			</div>
		);
	}
}
