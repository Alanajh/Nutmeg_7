import { Component, React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/testComp.css';
import { IoFilterSharp } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi'
import '../css/takeTest.css';
import test_titles from '../json/testing_sample.json';
import Test from './testComp';

const testTitleData = test_titles.map(item => (
    <p>{item.title}</p>
));
const testGenreData = test_titles.map(item => (
    <p>{item.genre}</p>
));

class SortedTests extends Component { 
    render() {
        return <div>{testTitleData}</div>  
     }
}

export class TestTitlesSorted extends Component { 
    selectTest = (index, e) => {
        console.log(test_titles
            .filter( item => item.value === index)
            .map( item => 
                item.title
            ) )}
                
            render() {
                return   <div>
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
            {test_titles.map((item, index) => {
                return (<Test 
                    key={test_titles.value}
                    id={index} 
                    identifier={item.genre}
                    selectCurrent={this.selectTest.bind(this, index)}
                    >{item.title}</Test>)
            })}
        </div>
    }
}

export class TestGenresSorted extends Component { 
    render() {
        return <div>{testGenreData}</div>
     }
}

export default SortedTests;
