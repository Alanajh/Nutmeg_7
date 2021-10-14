import { React } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/testComp.css';

import nutmegLogo from '../media/nutmeg-800x800.png';

export const FinalScore = (props) => {
    return <div>
        <Container fluid>
        <Row>
        <Col xs={2}><img src={nutmegLogo} id="logoNutmeg" alt="logo" /></Col>
        <Col xs={8} id="appName"><h4>N * U * T * M * E * G</h4></Col>
        <Col xs={2}></Col>
    </Row>
    <Row>
        <Col xs={2}></Col>
        <Col xs={8} id="appName">
            <span style={{fontSize: 36}} key={props.children}>{props.children}</span>
            s<p>Complete</p>
        </Col>
        <Col xs={2}></Col>
    </Row>
        </Container>
    </div>
}
export default FinalScore;