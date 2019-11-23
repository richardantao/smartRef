import React, {Component} from "react";

import {Form, FormGroup, Label, Input, Button} from "reactstrap";

import "Search.css";

export default class Search extends Component {
	
	handleSubmit(e){
		e.preventDefault()
	}

	render(){
		return(
			<div>
				<Form>
					<FormGroup>
						<Input name="healthCard" type="text" placeholder="Patient Health Card #"/>
						<Input name="specType" type="text" placeholder="Specialist Type"/>
						<Button onSubmit={this.handleSubmit}>
						</Button>
					</FormGroup>
				</Form>
			</div>
		)
	}
}