
import React, { Component } from "react";

import { Button } from "reactstrap";

import "./Home.css";

import logo from "./SmartRef.png"


export default class Home extends Component {
    render() {
        return(
            <div>
                <Button href="/search">
                    English
                </Button>

                <Button href="/searchFrench">
                    Français
                </Button>

				<img src={logo} width="350" height="250"/>

            </div>
        );
    };
};