import { React, Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/testComp.css';
import nutmegLogo from '../media/nutmeg-800x800.png';
import { Test } from '../components/testComp'

import TestQuestionList from '../json/testListQuestions.json'

import { IoFilterSharp } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi'
import TakeTest from './takeTest';

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
            score: 0,
            sorted: false,
            turnOnTest: false,
            advanceQuestions: 0,
            selectedTestData: false,
            target: 0,
            testChoice: 0,
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
        
    }
    getNext = (identifier, i) => {
        let answers = document.getElementsByName("answers");
        let verifiedAnswer = document.getElementById("verifiedAnswer");
        
        this.setState({ advanceQuestions: this.state.advanceQuestions + 1});
        answers[0].checked = false;
        answers[1].checked = false;
        answers[2].checked = false;
        answers[3].checked = false;     
        verifiedAnswer.innerHTML = "__________________________";  

        if (verifiedAnswer.innerHTML === TestQuestionList[this.state.target].questions[this.state.advanceQuestions].answer){
            this.setState({ score: this.state.score + 1 });
            console.log("score: " + this.state.score)
        }else{
            this.setState({ score: this.state.score + 0 });
            console.log("score: " + this.state.score)
        }

        if(this.state.advanceQuestions + 1 > TestQuestionList[this.state.target].questions.length){
            console.log("")
        }
        
    }
    // takes the selectTest and presents the correct title
    target = (identifier, i) => {
    let testListScreen = document.getElementById("completeList");
    document.getElementById("testTitleSelected").innerHTML = i.title;
    document.getElementById("testQuestions").hidden = false;
    document.getElementById("testData").hidden = false;
    this.setState({target: identifier});
       if(i.media_type === 0){
           this.setState({ selectedTestData: true });
           console.log("Regular Test");
           document.getElementById("testTitleSelected").innerHTML = i.title
           testListScreen.hidden = true;
           this.setState({ turnOnTest: true });
       }else{
           console.log("Media Test");
           testListScreen.hidden = true;
           document.getElementById("testTitleSelected").innerHTML = i.title
           this.setState({ turnOnTest: true });
       }
    }

    render() {
        return   <div>
            <div>{this.state.turnOnTest ? <TakeTest/> : null }</div>
            
            <div id="testData">
            <Container>
            <Row>
                    <Col><img src={nutmegLogo} id="logo" alt="logo" ></img></Col>
                    <Col id="appName" xs={8}><h3>N * U * T * M * E * G</h3></Col>
                    <Col id="score">{this.state.advanceQuestions + 1}/{TestQuestionList[this.state.target].questions.length}</Col>
                </Row>
                <Row>
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