import React, { Component } from "react";

import { Button } from "reactstrap";

import "Home.css";


export default class Home extends Component {
    render() {
        return(
            <div>
                <Button href="/search">
                    English
                </Button>

                <Button href="/">
                    Français
                </Button>

            </div>
        );
    };
};