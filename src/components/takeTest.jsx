/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component } from 'react';
/* import '../css/App.css'
import '../css/takeTest.css'; */ 
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/testBody.css'; 
import nutmegLogo from '../media/nutmeg-800x800.png';
import Menu from '../components/MainMenu/mainMenuScreen';

import testQuestionsList from '../json/testListQuestions.json';
import { Test } from './testComp';



class TakeTest extends Component {
    
    constructor(){
        super();
            
        this.state = {
            answers: 0,
            count: 0,
            index: 0,
            menuScreen: false,
            question: 'Are you ready?',
            questions: 1,
            right: 0,
            score: 0,
            scoreScreen: false,
            score_Percentage: 0,
            target: 0,
            testLength: 0,
            wrong: 0,
            x: false,
        };
    }
    //////  Place selection in verified sections //////
    answers = () => {
        let answers = document.getElementsByName("answers");
        let verifiedAnswer = document.getElementById("verifiedAnswer");

        if(answers[0].checked){ verifiedAnswer.innerHTML = testQuestionsList[this.state.target].questions[0].option_1; }
        else if(answers[1].checked){ verifiedAnswer.innerHTML = testQuestionsList[this.state.target].questions[0].option_2; }
        else if(answers[2].checked){ verifiedAnswer.innerHTML = testQuestionsList[this.state.target].questions[0].option_3; }
        else if(answers[3].checked){ verifiedAnswer.innerHTML = testQuestionsList[this.state.target].questions[0].option_4; }
        
    }
    getMenu = () => { 
        let mainTestBoard = document.getElementById('mainTestBoard');
        if(this.state.menuScreen === false){
            this.setState({ menuScreen: true});
            mainTestBoard.remove();
        }else{
            this.setState({ menuScreen: false});
        }
    }
    getNextQuestion = () => {
        //let answers = document.getElementsByName("answers");        
        //let correctAnswer = testQuestionsList[this.state.target].questions[0].answer;
       /// let verifiedAnswer = document.getElementById("verifiedAnswer");
        
     //  if(this.state.questions + 1 === testQuestionsList[this.state.target].questions.length + 1){
        /////////////  test Score and Percentage %  ////////////
      //  this.state.testQuestionsList.question = testQuestionsList[this.state.target].questions.length;
            //this.state.target = law.length;
         /*    this.state.score_Percentage = this.state.right/testQuestionsList[this.state.target].questions.length * 100;
            this.setState({ questions: 0}); //restarts the test
            this.setState({ target:  0}); //restarts the test
            moveBtn.disabled = true;
            setTimeout(this.end_of_test, 1000); */
      //  }else{ 
            /////// ACTIVE TEST ////////
            
            ////// Check for at least one selected option //////
           /*  if(answers[0].checked === false &&
                answers[1].checked === false &&
                answers[2].checked === false &&
                answers[3].checked === false ){
                    setTimeout(this.warning, 2000);
                    let selectionWarning = document.getElementById('selectionWarning');
                    selectionWarning.innerHTML = 'Please make a selection before proceeding';
                    this.setState({ questions: this.state.questions + 0});
                    this.setState({ option_1: this.state.option_1 + 0});
                    this.setState({ target: this.state.target + 0}); 
                }else{ */
                //////  Check for right or wrong answer and increment score, questions & options //////
                this.setState({ questions: this.state.questions + 1});
                this.setState({ option_1: this.state.option_1 + 1 });
                this.setState({ target: this.state.target + 1}); 
               
                
            /*     if(correctAnswer === verifiedAnswer.innerHTML){
                    this.setState({ right: this.state.right + 1});
                }else{
                    this.setState({ right: this.state.right + 0});
                } */
                ////// Initialize the beginning of test //////
                /* verifiedAnswer.innerHTML = " ";
                answers[0].checked = false;
                answers[1].checked = false;
                answers[2].checked = false;
                answers[3].checked = false;
            } */
        }
    
        target = (identifier, i) => {
            return console.log(i.title)
            }
        
    end_of_test = () => {
        let mainPg = document.createElement("Button"); 
        mainPg.innerHTML = "Main Menu";     
        moveBtn.disabled = false;
        moveBtn.innerHTML = "Exit";
       
        this.setState({ scoreScreen: true});
 
        let testPg =  document.getElementById('mainTestBoard');
        testPg.remove(); 
    }
    warning = () => {
        let selectionWarning = document.getElementById('selectionWarning');
        selectionWarning.innerHTML = null;
    }

    render() {
       return  <div className="belt" id="mainBelt">
           
           <div>{ this.state.menuScreen ? <Menu/> : null }</div>
           {/* REPLACE WITH END OF TEST SCRIPT OR SCORE SCREEN */}
          {/*  { this.state.scoreScreen ? <Scores len={testQuestionsList[this.state.target].questions.length} right={this.state.right} score_Percentage={this.state.score_Percentage}/> : null }
           */}<div id="mainTestBoard">
           <Container fluid>
              {/*  <Test/> */}
                {/* <Row>
                    <Col><img src={nutmegLogo} id="logo" alt="logo" ></img></Col>
                    <Col id="appName" xs={8}><h3>N * U * T * M * E * G</h3></Col>
                    <Col id="score">{this.state.questions}/{testQuestionsList.length}</Col>
                </Row> */}
            
                <Row id="currentTest">
                   {/*  <Col id="c"></Col> */}
                   {/*  <Col id="c" xs={8}>
                        <div id="unorderedList"> */}
{/*                             <p key="1"/><input type="radio" id="choice1" name="answers" value="choice1" onClick={this.answers}/> {law[this.state.target].target[0].option_1}
                            <p key="2"/><input type="radio" id="choice2" name="answers" value="choice2" onClick={this.answers}/> {law[this.state.target].target[0].option_2}
                            <p key="3"/><input type="radio" id="choice3" name="answers" value="choice3" onClick={this.answers}/> {law[this.state.target].target[0].option_3}
                      /*       <p key="4"/><input type="radio" id="choice4" name="answers" value="choice4" onClick={this.answers}/> {law[this.state.target].target[0].option_4} */}
                        {/* </div>
                        <div id="verifiedAnswer">__________________________</div> */ }
                      
                        {/* <li>Time / Settings</li> */}
                    {/* </Col>
                    <Col id="c"></Col> */}
                </Row>
              {/*   <Row>
                    <Col id="c"></Col>
                    <Col id="buttonSubmit" xs={8}>
                    <button
                        className="submitBtn"
                        id="moveBtn"
                        type="button"
                        onClick={this.getNextQuestion}>Submit
                    </button>
                    </Col>
                    <Col id="c"></Col>
                </Row> */}
                <Row>
                    <Col id="c"></Col>
                    <Col id="colWarning" xs={12}><span id="selectionWarning"/></Col>
                    <Col id="c"></Col>
                </Row>
            </Container>
            </div>
    </div>
    }

}
export default TakeTest;
