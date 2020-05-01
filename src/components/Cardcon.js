import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Cardbox from './Cardbox.js';

class Cardcon extends Component {
    state = {
        apiCall: false,
        renderBtn: false,
    }

    clkAlert=()=>alert("I've been clicked");

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div>Am I working? Or am I dancer.</div>
                            <Cardbox btnName={"Get the Weather"} title={"Here is our title"} text={"Hello, I am text in props."} onClick={this.clkAlert()}></Cardbox>
                            <Cardbox></Cardbox>
                            <Cardbox></Cardbox>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Cardcon;