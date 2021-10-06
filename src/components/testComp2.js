import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/testComp.css';

export const Test2 = (props) => {
    return (
            <Container id="container">
                <Row>
                <Col xs={12} id="testCol">
                        <button  id="textBtnSelect" onClick={props.selectCurrent}>
                            <span>{props.children}</span>  
                        </button> 
                    </Col>
                    </Row>
            </Container>)
}

export default Test2;