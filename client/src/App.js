import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Search from "./components/Search";
import Results from "./components/Results";
import Appointment from "./components/Appointment";

export default class App extends Component {
  render() {
    return ( 
      <Switch>
					<Route name="home" path="/" component={Home}/>
					<Route name="search" path="/search" component={Search}/>
          <Route name="results" path="/results" component={Results}/>
					<Route name="appointment" path="/appointment" component={Appointment}/>
			</Switch>
    );
  };
};