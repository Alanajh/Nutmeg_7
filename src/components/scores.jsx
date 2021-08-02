/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component, useState} from 'react';
import '../css/scores.css';

import nutmegLogo from '../media/nutmeg-800x800.png';
import Question from './filter_Icon';
import FullList from './test_db';

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
        let gogo = document.getElementById('trScore');
        gogo.remove();
    }
    render() {
       return  <div className="scoreBelt" id="belt">
           <table className="tble">
               <tr className="trScore" id="trScore">
                   <th id="header1">The History of Surgical Firsts</th>
                   <th id="header2">{this.props.right}/{this.props.len} : {this.props.score_Percentage}<span>%</span> </th>
                   <th id="header3">A+</th>
               </tr>
               <tr>
                   <td></td>
                   <td></td>
                   <td><Question/></td>
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
           </table>
    </div>
    }

}
export default Scores;
