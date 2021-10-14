import { React, Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/testComp.css';
import nutmegLogo from '../media/nutmeg-800x800.png';
import { Test } from '../components/testComp'
import FinalScore from './finalScore';

import TestQuestionList from '../json/testListQuestions.json'

import { IoFilterSharp } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi'
/*   const open_link = test_titles.map(item => {
    console.log(item.value);
  });
*/

const findTest = TestQuestionList
.filter( item => item.value === 1)
.map( item => 
    <p>{item.title}</p>
) 
const testTitleData = TestQuestionList.map((item, index, arr) => (
    <p>{item.title}</p>
));

/* const testGenreData = test_titles.map(item => (
    <a href="www" id="titles" value={item.value} key={item.value}><p>{item.genre}</p></a>
)); */   

class FullList extends Component{
    render() {
        return  <div>
                <p id='titles'>{testTitleData}</p>
            </div>   
     }
}
export class TestTitles extends Component { 
    constructor(props){
        super(props);
        this.state = {
            advanceQuestions: 0,
            finalScore: 0,
            selectedTestData: false,
            score: 0,
            sorted: false,
            target: 0,
            testChoice: 0,
            turnOnTest: false,
        }
    }

    componentDidMount = () =>{
        document.getElementById("testQuestions").hidden = true;
        document.getElementById("testData").hidden = true;
    }
    // selects and filters the test based on the json value that equals the index of the clicked test
    selectTest = (index, e) => {
       return  console.log(TestQuestionList
            .filter( item => item.value === index)
            .map( item => 
                console.log(item)
            ) )
    }
    testTitleDataSorted = () => {
        if(this.state.sorted === false) {
            this.setState({ sorted: true});
            return TestQuestionList;
           // return test_titles.
            
        }else{
            this.setState({ sorted: false});
            return TestQuestionList = TestQuestionList.sort();
        }
    }

    answers = () => {
        let answers = document.getElementsByName("answers");
        let verifiedAnswer = document.getElementById("verifiedAnswer");

        if(answers[0].checked){ verifiedAnswer.innerHTML = TestQuestionList[this.state.target].questions[this.state.advanceQuestions].option_1; }
        else if(answers[1].checked){ verifiedAnswer.innerHTML = TestQuestionList[this.state.target].questions[this.state.advanceQuestions].option_2; }
        else if(answers[2].checked){ verifiedAnswer.innerHTML = TestQuestionList[this.state.target].questions[this.state.advanceQuestions].option_3; }
        else if(answers[3].checked){ verifiedAnswer.innerHTML = TestQuestionList[this.state.target].questions[this.state.advanceQuestions].option_4; }
        if (verifiedAnswer.innerHTML === TestQuestionList[this.state.target].questions[this.state.advanceQuestions].answer){
            this.setState({ score: this.state.score + 1 });
            console.log("score: " + this.state.score)
        }else{
            this.setState({ score: this.state.score + 0 });
            console.log("score: " + this.state.score)
        }

    }
    getNext = (identifier, i) => {
        let answers = document.getElementsByName("answers");
        let verifiedAnswer = document.getElementById("verifiedAnswer");
        
        answers[0].checked = false;
        answers[1].checked = false;
        answers[2].checked = false;
        answers[3].checked = false;     
        verifiedAnswer.innerHTML = "__________________________";  

        if(this.state.advanceQuestions === TestQuestionList[this.state.target].questions.length - 1){
            document.getElementById("testData").hidden = true;
            this.setState({ target: 0 });
;           this.setState({ advanceQuestions: 0 });
            this.setState({ finalScore: true });
        }else{
            this.setState({ advanceQuestions: this.state.advanceQuestions + 1});
        }
        
    }
    // takes the selectTest and presents the correct title
    target = (identifier, i) => {
    let testListScreen = document.getElementById("completeList");
    let testQuestionsMedia = document.getElementById("testQuestionsMedia");


    document.getElementById("testTitleSelected").innerHTML = i.title;
    document.getElementById("testQuestions").hidden = false;
    document.getElementById("testData").hidden = false;
    this.setState({target: identifier});
       if(i.media_type === 0){
           //Reg test
           this.setState({ selectedTestData: true });
           document.getElementById("testTitleSelected").innerHTML = i.title
           testListScreen.hidden = true;
           testQuestionsMedia.hidden = true;
           this.setState({ turnOnTest: true });
       }else{
           //Media test
           testListScreen.hidden = true;
           testQuestionsMedia.hidden = false;
           document.getElementById("testTitleSelected").innerHTML = i.title
           this.setState({ turnOnTest: true });
       }
    }

    
    render() {
        return   <div>

            {/* STOPPED WORKING HERE ON 10/13/21 */}
            <div>{this.state.finalScore ? 
            <container>
                <FinalScore>{this.state.score}</FinalScore> : null} 
            </container>
            </div>
            /* END ON STOPPED WORK FOR 10/13/21 */
            <div id="testData">
            <Container fluid>
            <Row>
                    <Col xs={2}><img src={nutmegLogo} id="logoNutmeg" alt="logo" ></img></Col>
                    <Col id="appName" xs={8}><h4>N * U * T * M * E * G</h4></Col>
                    <Col id="score" xs={2}>{this.state.advanceQuestions + 1}/{TestQuestionList[this.state.target].questions.length}</Col>
                </Row>
                <Row id="titleRow">
                    <Col xs={2}></Col>
                    <Col xs={8} style={{textAlign: 'center', fontWeight: 'bold',  letterSpacing: 3 }} id="testTitleSelected"></Col>
                    <Col xs={2}></Col>
                </Row>
                <Row>
                <Col xs={2}></Col>
                    <Col xs={8} style={{textAlign: 'center' }} id="testQuestionsSelected">{TestQuestionList[this.state.target].questions[this.state.advanceQuestions].question}</Col>
                    <Col xs={2}></Col>
                </Row>
                <Row>
                <Col xs={2}></Col>
                    <Col xs={8} style={{textAlign: 'center' }} id="testQuestionsMedia"><img src={TestQuestionList[this.state.target].questions[this.state.advanceQuestions].img}/></Col>
                    <Col xs={2}></Col>
                </Row>
                <Row>
                    <Col xs={3}></Col>
                    <Col xs={7} style={{textAlign: 'center' }} id="testQuestions">
                    <div id="unorderedList" > 
                        <p key="1"/><input type="radio" id="choice1" name="answers" value="choice1" onClick={this.answers}/> {TestQuestionList[this.state.target].questions[this.state.advanceQuestions].option_1}
                        <p key="2"/><input type="radio" id="choice2" name="answers" value="choice2" onClick={this.answers}/> {TestQuestionList[this.state.target].questions[this.state.advanceQuestions].option_2} 
                        <p key="3"/><input type="radio" id="choice3" name="answers" value="choice3" onClick={this.answers}/> {TestQuestionList[this.state.target].questions[this.state.advanceQuestions].option_3} 
                        <p key="4"/><input type="radio" id="choice4" name="answers" value="choice4" onClick={this.answers}/> {TestQuestionList[this.state.target].questions[this.state.advanceQuestions].option_4} 
                    </div>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col> <div id="verifiedAnswer" style={{ textAlign: 'center'}}>__________________________</div></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col xs={2}></Col>
                    <Col xs={8} style={{textAlign: 'center', margin: '20px' }}>
                        <Button onClick={this.getNext} id="submitBtn">Submit</Button>
                    </Col>
                    <Col xs={2}></Col>
                </Row>
                </Container>
            </div>
            <div id="completeList">
             <Container id="container">
                <Row id="testRowHeader">
                    <Col xs={10} id="testColHeader">
                       Title 
                        <button id='filterBtn'><IoFilterSharp/></button>
                        <button id='sortBtn' onClick={this.testTitleDataSorted}><BiSort/></button>
                    </Col>
                    <Col xs={2}>
                        Genre
                    </Col>
                </Row> 
            </Container> 
            
            
            {TestQuestionList.map((item, index) => {
                return (
                    <div>
                <Test 
                    key={item.test_id}
                    id={index} 
                    identifier={item.genre}
                    selectCurrent={this.target.bind(this, index, item)}
                    >{item.title}</Test>
                    </div>)
            })}
           </div>
        </div>
     }
}
export class TestGenres extends Component { 
    render() {
        return   <div>
            
       {/*  {testGenreData} */}
    </div>
     }
}
    
export class FindTest extends Component {
    render() { 
        return <div> {findTest} </div>
    }
}

export default FullList; 