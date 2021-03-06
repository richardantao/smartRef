import React, {Component} from "react";

import {Form, FormGroup, Label, Input, Container, Row, Col, h2, Button} from "reactstrap";

import "./Booking.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class Booking extends Component {

	render(){
		return(
			<Container>
				<Row>
					<Col className="bkgdBooking">
							<h2 className="h2Booking">
								Success!
							</h2>
				
							<Form>
								<FormGroup>
									<Input className="phoneNum" name="phoneNumber" type="tel" placeholder="Patient Phone #"/>
								</FormGroup>
								<Button className="bookButton" onSubmit={this.handleSubmit} href="/home">
									<FontAwesomeIcon icon={faCheckCircle}/>
								</Button>
							</Form>
					</Col>
				</Row>
			</Container>
		)
	}
}