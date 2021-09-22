import { React, Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/testComp.css';
import test_titles from '../json/testing_test_titles.json';
import Test from '../components/testComp';
import TakeTest from './takeTest';

import TestQuestionList from '../json/testListQuestions.json'

import { IoFilterSharp } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi'

/*   const open_link = test_titles.map(item => {
    console.log(item.value);
  });
*/

const findTest = test_titles
.filter( item => item.value === 1)
.map( item => 
    <p>{item.title}</p>
) 
const testTitleData = test_titles.map((item, index, arr) => (
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
            sorted: false,
            turnOnTest: false,
        }
    }

    tryA = () => {

    }
    // selects and filters the test based on the json value that equals the index of the clicked test
    selectTest = (index, e) => {
       return  console.log(test_titles
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

    // takes the selectTest and presents the correct title
    target = (identifier) => {
        let r = document.getElementById('')
    }

    render() {
        return   <div>
            <div>{this.state.turnOnTest ? <TakeTest/> : null }</div>
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
                return (<Test 
                    key={TestQuestionList.value}
                    id={index} 
                    identifier={item.test_id}
                    selectCurrent={this.target.bind(this, index)}
                    >{item.title}</Test>)
            })}
           {/*  {testTitleData} */}
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