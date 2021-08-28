/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component } from 'react';
/* import '../css/App.css' */
import '../css/takeTest.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/testBody.css';
import nutmegLogo from '../media/nutmeg-800x800.png';
import Menu from '../components/MainMenu/mainMenuScreen';
import Scores from './scores';
import law from '../json/001_Federal_Law.json';

/* const test_1 = [
    {
        title: 'Events That Shaped A Presidency',
        test_id: '001',
        target: [
            {
                question: 'Theodore Roosevelt',
                option_1: 'Creator of The League of Nation',
                option_2: 'Civil Rights Movement',
                option_3: 'The Square Deal',
                option_4: 'The New Deal',
            }
        ],
        answer: 'The Square Deal',
        img: './media/theodore_roosevelt_1.jpg',
        points: '34',
        hint_1: 'A domestic program, which reflected his three maanswersr ' +
            'goals: conservation of natural resources, control of corporations, and consumer protection.',
        hint_2: 'Trust Buster: A term used to describe Theodore Roosevelt ' +
            'because of his aggressive use of U.S. antitrust laws to break up large business monopolies.',
        hint_3: 'Progressivism was a powerful political and social force by the turn of the century,' +
            'and many Americans considered Roosevelt as the leader of the Progressive movement. ' +
            'To most contemporaries, Progressivism meant the use of science, engineering, technology, ' +
            'and the new social sciences to promote modernization and identify solutions to political ' +
            'corruption and inefficiency. Roosevelt, trained as a biologist, identified himself and his ' +
            'programs with this scientific approach to targeting and eliminating social and political ills.',
    },
    {
        test_id: '002',
        target: [
            {
                question: 'George W. Bush',
                option_1: 'Creation of HUD',
                option_2: 'Halt student loan interest',
                option_3: 'First female president',
                option_4: '911',
            }
        ],
        answer: '911',
        img: '',
        points: '34',
        hint_1: 'Flight 93',
        hint_2: 'Osama Bin Laden - Al Qaeda',
        hint_3: 'The North and South Towers of The World Trade Center',
    },
    {
        test_id: '003',
        target: [
            {
                question: 'Richard Nixon',
                option_1: 'Creationjhblj of HUD',
                option_2: 'Hal,bhblt student loan interest',
                option_3: 'First female president',
                option_4: '911',
            }
        ],
        answer: '911 2',
        img: '',
        points: '34',
        hint_1: 'Flight 93',
        hint_2: 'Osama Bin Laden - Al Qaeda',
        hint_3: 'The North and South Towers of The World Trade Center',
    },
    {
        test_id: '004',
        target: [
            {
                question: 'Jimmy Carter',
                option_1: 'Creation of HUDkv',
                option_2: 'Halt student loan interesthbljhb',
                option_3: 'First female president',
                option_4: '911',
            }
        ],
        answer: '911 - 3',
        img: '',
        points: '34',
        hint_1: 'Flight 93',
        hint_2: 'Osama Bin Laden - Al Qaeda',
        hint_3: 'The North and South Towers of The World Trade Center',
    },
    {
        test_id: '004',
        target: [
            {
                question: 'Lydon B. Johnson',
                option_1: 'Creation of HUD',
                option_2: 'Signed The Civil Rights Act',
                option_3: 'Passed the First Abortion Laws',
                option_4: 'Outlawed LGBTQ+ Marriage',
            }
        ],
        answer: '911 - 3',
        img: '',
        points: '34',
        hint_1: 'Flight 93',
        hint_2: 'Osama Bin Laden - Al Qaeda',
        hint_3: 'The North and South Towers of The World Trade Center',
    }
]; */

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
        let correctAnswer = law[this.state.target].answer;

        if(answers[0].checked){ verifiedAnswer.innerHTML = law[this.state.target].target[0].option_1; }
        else if(answers[1].checked){ verifiedAnswer.innerHTML = law[this.state.target].target[0].option_2; }
        else if(answers[2].checked){ verifiedAnswer.innerHTML = law[this.state.target].target[0].option_3; }
        else if(answers[3].checked){ verifiedAnswer.innerHTML = law[this.state.target].target[0].option_4; }
        
        if(correctAnswer === verifiedAnswer.innerHTML){
           
        }else{
            
        }
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
        let qa = '';
        let answers = document.getElementsByName("answers");
        let verifiedAnswer = document.getElementById("verifiedAnswer");
        let correctAnswer = law[this.state.target].answer;
        
       if(this.state.questions + 1 === law.length + 1){
        qa = 'Test Complete';
        /////////////  test Score and Percentage %  ////////////
            this.state.target = law.length;
            this.state.score_Percentage = this.state.right/law.length * 100;
            document.getElementById('q').innerHTML = qa;
            this.setState({ questions: 0}); //restarts the test
            this.setState({ target:  0}); //restarts the test
            moveBtn.disabled = true;
            setTimeout(this.end_of_test, 1000);
        }else{ 
            /////// ACTIVE TEST ////////
            qa = law[this.state.target].target[0].question;

            ////// Place selected option on the preview line ////////
            /* if(answers[0].checked){ verifiedAnswer.innerHTML = law[this.state.target].target[0].option_1; }
            else if(answers[1].checked){ verifiedAnswer.innerHTML = law[this.state.target].target[0].option_2; }
            else if(answers[2].checked){ verifiedAnswer.innerHTML = law[this.state.target].target[0].option_3; }
            else if(answers[3].checked){ verifiedAnswer.innerHTML = law[this.state.target].target[0].option_4; } */
            
            ////// Check for at least one selected option //////
            if(answers[0].checked === false &&
                answers[1].checked === false &&
                answers[2].checked === false &&
                answers[3].checked === false ){
                    setTimeout(this.warning, 2000);
                    let selectionWarning = document.getElementById('selectionWarning');
                    selectionWarning.innerHTML = 'Please make a selection before proceeding';
                    this.setState({ questions: this.state.questions + 0});
                    this.setState({ option_1: this.state.option_1 + 0});
                    this.setState({ target: this.state.target + 0}); 
                }else{
                //////  Check for right or wrong answer and increment score, questions & options //////
                this.setState({ questions: this.state.questions + 1});
                this.setState({ option_1: this.state.option_1 + 1 });
                this.setState({ target: this.state.target + 1}); 
                if(correctAnswer === verifiedAnswer.innerHTML){
                    this.setState({ right: this.state.right + 1});
                }else{
                    this.setState({ right: this.state.right + 0});
                }
                ////// Initialize the beginning of test //////
                verifiedAnswer.innerHTML = " ";
                answers[0].checked = false;
                answers[1].checked = false;
                answers[2].checked = false;
                answers[3].checked = false;
            }
        }
    }

    end_of_test = () => {
        let mainPg = document.createElement("Button"); 
        mainPg.innerHTML = "Main Menu";     
        moveBtn.disabled = false;
        moveBtn.innerHTML = "Exit";
       
        this.setState({ scoreScreen: true});

        let testPg =  document.getElementById('testPg');
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
           { this.state.scoreScreen ? <Scores len={law.length} right={this.state.right} score_Percentage={this.state.score_Percentage}/> : null }
          <div id="mainTestBoard">
           <Container fluid id="container">
                <Row>
                    <Col><img src={ nutmegLogo} id="logo" alt="logo" ></img></Col>
                    <Col id="appName" xs={8}><h3>N * U * T * M * E * G</h3></Col>
                    <Col id="score">{this.state.questions}/{law.length}</Col>
                </Row>
                <Row id="currentTestTitle">
                    <Col id="c"></Col>
                    <Col id="c" xs={8}>{law[this.state.target].title}</Col>
                    <Col id="c"></Col>
                </Row>
                <Row id="currentTestQuestion">
                    <Col id="c"></Col>
                    <Col id="c" xs={8}>{law[this.state.target].target[0].question}</Col>
                    <Col id="c"></Col>
                </Row>
                <Row id="currentTest">
                    <Col id="c"></Col>
                    <Col id="c" xs={8}>
                    <ul id="testOptions">
                        <li id="q"></li>
                        <div id="unorderedList">
                            <li key="1"/><input type="radio" id="choice1" name="answers" value="choice1" onClick={this.answers}/> {law[this.state.target].target[0].option_1}
                            <li key="2"/><input type="radio" id="choice2" name="answers" value="choice2" onClick={this.answers}/> {law[this.state.target].target[0].option_2}
                            <li key="3"/><input type="radio" id="choice3" name="answers" value="choice3" onClick={this.answers}/> {law[this.state.target].target[0].option_3}
                            <li key="4"/><input type="radio" id="choice4" name="answers" value="choice4" onClick={this.answers}/> {law[this.state.target].target[0].option_4}
                        </div>
                        <div id="verifiedAnswer">__________________________</div>
                      
                        {/* <li>Time / Settings</li> */}
                    </ul>
                    </Col>
                    <Col id="c"></Col>
                </Row>
                <Row>
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
                </Row>
                <Row>
                    <Col id="c"></Col>
                    <Col id="colWarning" xs={8}><text id="selectionWarning"/></Col>
                    <Col id="c">
                        <button id="smallMenuBtn" onClick={this.getMenu}>menu</button>
                    </Col>
                </Row>
            </Container>
            </div>
    </div>
    }

}
export default TakeTest;
