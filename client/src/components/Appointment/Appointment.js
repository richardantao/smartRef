import React, {Component} from "react"

import {Form, FormGroup, Label, Input, Container, Row, Col, h2, p, Button} from "reactstrap";

import "./Appointment.css"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class Appointment extends Component {
	state = {startDate: new Date()};
	handleChange = date => {this.setState({startDate: date})};
	handleSubmit(e){
		e.preventDefault()
	}
    render() {
        return(
			<Container>
				<Row>
					<Col className="bkgdAppt">
						 <h2 className="h2Appt">
							 Book Appointment
						</h2>
						<Form>
							<FormGroup>
								<Label className="to" for="specName">
									To:
								</Label>
								<Input className="apptInput" name="specName" type="text"/>
							</FormGroup>

							<FormGroup>
								<Label className="subject" for="subject">
									Subject:
								</Label>
								<Input className="apptInput" name="subject" type="text"/>
							</FormGroup>

							<FormGroup>
								<Label className="message" for="message">
									Message:
								</Label>
								<Input className="apptInput" name="message" type="textarea"/>
							</FormGroup>

							<FormGroup>
								<Label className="refer" for="physicianName">
									Referred By:
								</Label>
								<Input className="apptInput" name="physicianName" type="text"/>
							</FormGroup>

							<FormGroup>
								<Label className="time" for="availability">
									Time: 
								</Label>
								<DatePicker className="datepicker" selected={this.state.startDate} onChange={this.handleChange}/>
							</FormGroup>
							<Button className="apptButton" onSubmit={this.handleSubmit} href="/booking">
								<FontAwesomeIcon icon={faCheckCircle}/>
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
        )
    }
}

