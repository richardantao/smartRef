import React, {Component} from "react";

import {Form, FormGroup, Label, Input, Button, Container, Row, Col} from "reactstrap";

import "./Search.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Search extends Component {
	
	handleSubmit(e){
		e.preventDefault()
	}

	render(){
		return(
			<Container>
				<Row>
					<Col className="bkgd">
						<Form>
							<FormGroup>
								<Input name="healthCard" type="text" placeholder="Patient Health Card #"/>
							</FormGroup>
							<FormGroup>
								<Input name="specType" type="text" placeholder="Specialist Type"/>
							</FormGroup>
								<Button onSubmit={this.handleSubmit}>
									<FontAwesomeIcon icon={faSearch}/>
								</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		)
	}
}