import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/testBody.css';
import nutmegLogo from '../media/nutmeg-800x800.png';
import Scores from './scores';
import law from '../json/001_Federal_Law.json';

export const  addTest = text => ({
    type: "ADD_TEST",
    payload: text
});

export const  deleteTest = reminder => ({
    type: "DELETE_TEST",
    payload: reminder
});

class TestBod extends Component {
    constructor(){
        super();
            
        this.state = {
            answers: 0,
            count: 0,
            index: 0,
            question: 'Are you ready?',
            questions: 1,
            right: 0,
            score: 0,
            scoreScreen: false,
            score_Percentage: 0,
            target: 0,
            testLength: 0,
            testScreen: true,
            wrong: 0,
            x: false,
        };
    }

    render(){
        return <div id="testbody">
            <Container fluid id="container">
                <Row>
                    <Col><img src={ nutmegLogo} id="logo" alt="logo" ></img></Col>
                    <Col id="appName" xs={8}><h3>N * U * T * M * E * G</h3></Col>
                    <Col id="score">{this.state.questions}/{law.length}</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={10}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                    </Row>
                    <Row>
                    <Col>1 of 3</Col>
                    <Col xs={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    }
}

export default TestBod;