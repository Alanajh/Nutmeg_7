import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/testComp.css';

const Test = (props) => {
    return (
            <Container id="container">
                <Row id="testRows">
                    <Col xs={10} id="testCol">
                        <button  id="textBtnSelect" onClick={props.selectCurrent}>
                            <span onSelect={props.selectCurrent}>{props.children}</span>  
                        </button> 
                    </Col>
                    <Col xs={2} id="testGenre">
                        {props.identifier}
                    </Col>
                </Row> 
            </Container>     )
}
export default Test;