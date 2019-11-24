import React, {Component} from "react";

import {Form, FormGroup, Label, Input, Container, Row, Col, h2, Button} from "reactstrap";

import "./BookingFrench.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class BookingFrench extends Component {

	render(){
		return(
			<Container>
				<Row>
					<Col className="bkgdBooking">
							<h2 className="h2Booking">
								Succ&egrave;s!
							</h2>
				
							<Form>
								<FormGroup>
									<Input className="phoneNum" name="phoneNumber" type="tel" placeholder="Num&#233;ro de T&#233;l&#233;phone"/>
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