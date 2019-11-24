import React, {Component} from "react"

import {Form, FormGroup, Label, Input, Container, Row, Col, h2, p, Button} from "reactstrap";

import "./AppointmentFrench.css"

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default class AppointmentFrench extends Component {
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
							 R&#233;servez Votre Rendez-Vous
						</h2>
						<Form>
							<FormGroup>
								<Label className="to" for="specName">
									&Agrave;:
								</Label>
								<Input className="apptInput" name="specName" type="text"/>
							</FormGroup>

							<FormGroup>
								<Label className="subject" for="subject">
									Objet:
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
									Adress&#233; Par:
								</Label>
								<Input className="apptInput" name="physicianName" type="text"/>
							</FormGroup>

							<FormGroup>
								<Label className="time" for="availability">
									Date: 
								</Label>
								<DatePicker className="datepicker" selected={this.state.startDate} onChange={this.handleChange}/>
							</FormGroup>
							<Button className="apptButton" onSubmit={this.handleSubmit} href="/bookingFrench">
								<FontAwesomeIcon icon={faCheckCircle}/>
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
        )
    }
}

