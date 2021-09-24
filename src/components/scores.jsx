/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */

import { Component } from 'react';
/* import '../css/App.css'
import '../css/takeTest.css'; */ 
import '../css/scores.css';
import { Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navBar.jsx';
import Menu from './MainMenu/mainMenuScreen';
import law from '../json/3_test-SocialScience-Law.json';

class Scores extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            menu: false,
            score: 0,
            target: 0,
            totalQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
        }
    }    
    componentDidMount = () => {
        this.return_grade();
    }
   
    return_to_MainMenu = () => {
        if(this.state.referenceScreenmenu === false){  
            let btn_MainMenu = document.getElementById('btn_MainMenu');
            let scoreRow = document.getElementById('trScore');
            this.setState({menu: true});
            btn_MainMenu.remove();
            scoreRow.remove();
        }else{
            this.setState({ menu: false});
        }
    }
    return_grade = () => {
        let percent = this.props.score_Percentage;
        alert(percent);
        let letterGrade = document.getElementById('letterGrade').innerHTML;
        if(percent <= 59){ letterGrade = "F"}
        if(percent >= 60 && percent <= 66){letterGrade = "D"}
        if(percent >= 67 && percent <= 69){letterGrade = "D+"}
        if(percent >= 70 && percent <= 72){letterGrade = "C-"}
        else if(percent >= 73 && percent <= 76){letterGrade = "C"}
        else if(percent >= 77 && percent <= 79){letterGrade = "C+"}
        else if(percent >= 80 && percent <= 82){letterGrade = "B-"}
        else if(percent >= 83 && percent <= 86){letterGrade = "B"}
        else if(percent >= 87 && percent <= 89){letterGrade = "B+"}
        else if(percent >= 90 && percent <= 93){letterGrade = "A-"}
        else if(percent >= 94){letterGrade = "A"} 
        return letterGrade;
    }
    render() {
       return  <div className="scoreBelt" id="belt">
           <div>{ this.state.menuScreen ? <Menu/> : null }</div>
           <NavBar/>
           <Row id="headerRow">
               <Col xs={2}>Genre</Col>
               <Col xs={8}>Test Title</Col>
               <Col xs={2}>Score/Grade</Col>
           </Row>
           <Row id="currentTestTitle">
                    <Col xs={2} id="c">{law[this.state.target].genre}</Col>
                    <Col id="c" xs={8}>{law[this.state.target].title}</Col>
                    <Col xs={2} id="c">{this.props.right}/{this.props.len} : {this.props.score_Percentage}% -<span id="letterGrade"> {/* {this.return_grade()} */}</span> </Col>
                </Row>
                <Row style={{position: 'fixed', bottom: 20, right: 0}}>
                    <Col xs={12}><Button onClick={this.reference} id='menuBtn'>Main Menu</Button></Col>
                </Row>
    </div>
    }

}
export default Scores;
