import React, {Component} from "react"

import {Form, FormGroup, Label, Input, Container, Row, Col, h2, p} from "reactstrap";

import "./Appointment.css"

export default class Appointment extends Component {
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
								<Label for="specName">
									To:
								</Label>
								<Input name="specName" type="text"/>
							</FormGroup>

							<FormGroup>
								<Label for="subject">
									Subject:
								</Label>
								<Input name="subject" type="text"/>
							</FormGroup>

							<FormGroup>
								<Label for="message">
									Message:
								</Label>
								<Input name="message" type="textarea"/>
							</FormGroup>

							<FormGroup>
								<Label for="physicianName">
									Referred By:
								</Label>
								<Input name="physicianName" type="text"/>
							</FormGroup>

							<FormGroup>
								<Label for="availability">
									Select Appointment Time: 
								</Label>
								<Input name="availability" type="date"/>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</Container>
        )
    }
}

