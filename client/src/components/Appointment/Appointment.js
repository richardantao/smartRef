import React, {Component} from "react"
import {
    ModalHeader,
    Modal,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap"

import "./Appointment.css"

export default class Appointment extends Component {
    render() {
        return(
            <Modal>
                <ModalHeader>
                    <h1>
                        Appointment
                    </h1>
                </ModalHeader>
                <ModalBody>
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
                                Referenced By:
                            </Label>
                            <Input name="physicianName" type="text"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="availability">
                                Availability: 
                            </Label>
                            <Input name="availability" type="date"/>
                        </FormGroup>

                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}

