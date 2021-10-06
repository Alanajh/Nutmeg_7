import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../../css/testComp.css'
import '../../../css/testBody.css'
import testQuestionsList from '../../../json/testListQuestions.json';

export const MediaTest = (props) => {
    return  (<div>
        <Container>
        <Row id="testTitleRow">
            <Col></Col>
            <Col>{props.selectCurrent}</Col>
            <Col></Col>
          </Row>
          <Row id="testRow">
            <Col xs={2}>Nothing here</Col>
            <Col>{console.log(testQuestionsList[0].questions.map((item, index) => {
                return item
            }))}</Col>
            <Col xs={2}>Nothing here</Col>
            </Row>
          <Row>
            <Col></Col>
            <Col><span>Warning Label</span></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col><button>Submit</button></Col>
            <Col></Col>
          </Row>
          <Row>
              <Col></Col>
              <Col></Col>
              <Col><button>Main Menu</button></Col>
            </Row>
        </Container>
      </div> )    
    }
export default MediaTest;
        
   