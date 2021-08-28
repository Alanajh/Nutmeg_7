/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component } from 'react';
//import '../css/scores.css';
import NavBar from './navBar.jsx';
import FullList from './test_db.jsx';

class Scores extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            menu: false,
            score: 0,
            totalQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
        }
    }    
   
    return_to_MainMenu = () => {
        this.setState({menu: true});
        let btn_MainMenu = document.getElementById('btn_MainMenu');
        let scoreRow = document.getElementById('trScore');
        btn_MainMenu.remove();
        scoreRow.remove();
    }
    return_grade = () => {
        let percent = this.props.right/this.props.len;
        let letterGrade = "A";
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
           <NavBar/>
           <table className="tble">
           <thead></thead>
               <tbody>
               <tr className="trScoreClass" id="trScore">
                   <th id="header1">The History of Surgical Firsts</th>
                   <th id="header2">{this.props.right}/{this.props.len} : {this.props.score_Percentage}<span>% - {this.return_grade()}</span> </th>
                   <th id="header3"></th>
               </tr>
               <tr>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
               <tr>
                   <td></td>
                   <td> {this.state.menu ? <FullList/> : null}</td>
                   <td></td>
               </tr>
               <tr>
                   <td></td>
                   <td></td>
                   <td><button id="btn_MainMenu" onClick={this.return_to_MainMenu}>Main Menu</button></td>
               </tr>
               </tbody>
               <tfoot></tfoot>
           </table>
    </div>
    }

}
export default Scores;
