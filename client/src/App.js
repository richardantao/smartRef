import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

export default class App extends Component {
  render() {
    return ( 
      <Switch>
					<Route name="appointment" path="/appointment" component={Appointment}/>
			</Switch>
    );
  };
};