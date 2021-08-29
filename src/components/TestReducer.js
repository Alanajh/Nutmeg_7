import { React, Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/testComp.css';
import test_titles from '../json/testing_sample.json';
import Test from '../components/testComp';
import law from '../json/001_Federal_Law.json';

import { IoFilterSharp } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi'

/*   const open_link = test_titles.map(item => {
    console.log(item.value);
  });
*/

const findTest = test_titles
.filter( item => item.value === 1)
.map( item => 
    <a href="www" id="titles" value={item.value}><p>{item.title}</p></a>
) 
const testTitleData = test_titles.map((item, index, arr) => (
    <a href="www" id="titles" value={item.value} key={index}  data-index={index}><p>{item.title}</p></a>
));
const testGenreData = test_titles.map(item => (
    <a href="www" id="titles" value={item.value} key={item.value}><p>{item.genre}</p></a>
));   

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

    // opens a test based on the target sent from the target function
    openTest = (target) => {
        
    }
    // selects and filters the test based on the json value that equals the index of the clicked test
    selectTest = (index, e) => {
       return  console.log(test_titles
            .filter( item => item.value === index)
            .map( item => 
                item
            ) )
    }
    testTitleDataSorted = () => {
        if(this.state.sorted === false) {
           // return test_titles.
            //this.setState({ sorted: true});
        }else{
            //this.setState({ sorted: false});
        }
    }
    // takes the selectTest and presents the correct title
    target = (selectTest) => {
      test_titles.filter( item => item.value === selectTest)
                    .map( item => 
                        console.log(item.title + ": " + item.genre)             
        )
    }
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
                    selectCurrent={this.target.bind(this, index)}
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