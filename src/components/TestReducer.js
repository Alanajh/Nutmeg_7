import { React, Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/testComp.css';
import test_titles from '../json/testing_sample.json';
import Test from '../components/testComp';

import { IoFilterSharp } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi'

import { TestTitlesSorted } from './sortedTests';

/*   const open_link = test_titles.map(item => {
    console.log(item.value);
  });
*/
test_titles.sort(function( itemTitle1, itemTitle2){
    <Test>{itemTitle1.title}</Test>
    if(itemTitle1.title > itemTitle2.title){
        return 1;
    }else{
        return -1;
    }
});
const findTest = test_titles
.filter( item => item.value === 1)
.map( item => 
   <p>{item.title}</p>
) 

const testTitleData = test_titles.map((item, index, arr) => (
    <p>{item.title}</p>
));
/* const testGenreData = test_titles.map(item => (
   <p>{item.genre}</p>
));  */  

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
        }
    }
    selectTest = (index, e) => {
        console.log(test_titles
            .filter( item => item.value === index)
            .map( item => 
                item.title
            ) )
    }
    testTitleDataSorted = () => {
        if(this.state.sorted === false) {
            this.setState({ sorted: true});
        }else{
            this.setState({ sorted: false});
        }
    }
    render() {
        return   <div>
            <div>{this.state.sorted ? <TestTitlesSorted/> : null }</div>
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
           {/*  {testTitleData} */}
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