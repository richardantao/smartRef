import React, {Component} from "react";

import {Form, FormGroup, Label, Input, Container, Row, Col, h2, p} from "reactstrap";

import "./Booking.css";

export default class Search extends Component {

	render(){
		return(
			<Container>
				<Row>
					<Col className="bkgdBooking">
							<h2 className="h2Booking">
								Success!
							</h2>
							<p className="bookInfo">
								<ins>booking</ins>
							</p>
							<Form>
								<FormGroup>
									<Input className="phoneNum" name="phoneNumber" type="tel" placeholder="Patient Phone #"/>
								</FormGroup>
							</Form>
					</Col>
				</Row>
			</Container>
		)
	}
}