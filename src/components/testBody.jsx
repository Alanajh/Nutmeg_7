import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/testBody.css';
import nutmegLogo from '../media/nutmeg-800x800.png';
import law from '../json/001_Federal_Law.json';

class TestBody extends Component {
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
                <Row id="currentTestTitle">
                    <Col id="c">1 of 3</Col>
                    <Col id="c" xs={8}>Current Test Title</Col>
                    <Col id="c">3 of 3</Col>
                </Row>
                <Row id="currentTest">
                    <Col id="c">1 of 3</Col>
                    <Col id="c" xs={8}>2 of 3 (wider)</Col>
                    <Col id="c">3 of 3</Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    }
}

export default TestBody;