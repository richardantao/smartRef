import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

import axios from "axios";

import "./Results.css";

export default class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            results: []
        };
    }
    
    componentDidMount() {
        axios.get("https://localhost:3000/search/:_id?")
        .then(res => {
            const {  } = res.data;

            this.setState({
                error: null,
                results: res.data
            });
        }) 
        .catch(err => {
            this.setState({
                error: err,
                results: []
            });
        });
    };

    render() {  
        const results = this.state.results; 
        return (
            <Container>
                {results.map(( _id,  ) => {

                })}
            </Container>
        );    
    };
};