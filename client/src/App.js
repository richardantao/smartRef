import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Search from "./components/Search";
import Results from "./components/Results";
import Appointment from "./components/Appointment";
import Booking from "./components/Booking";
import SearchFrench from "./components/SearchFrench";
import BookingFrench from "./components/BookingFrench";
import AppointmentFrench from "./components/AppointmentFrench";

export default class App extends Component {
  render() {
    return ( 
      <Switch>
		<Route name="home" path="/home" component={Home}/>
		<Route name="search" path="/search" component={Search}/>
		<Route name="results" path="/results" component={Results}/>
		<Route name="appointment" path="/appointment" component={Appointment}/>
		<Route name="booking" path="/booking" component={Booking}/>
		<Route name="searchFrench" path="/searchFrench" component={SearchFrench}/>
		<Route name="bookingFrench" path="/bookingFrench" component={BookingFrench}/>
		<Route name="appointmentFrench" path="/appointmentFrench" component={AppointmentFrench}/>
	  </Switch>
    );
  };
};