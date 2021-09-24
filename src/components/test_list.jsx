/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component} from 'react';
import Scores from './scores';
import MainMenu from './MainMenu/mainMenuScreen';

class TestUL extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            answers: 0,
            count: 0,
            question: 'Are you ready?',
            questions: 0,
            score: 0,
            target: 0,
            testLength: 0,
            testScreen: true,
            index: 0,
            x: false,

        };
    }
    render() {
       return  <div /* className="belt" id="mainBelt" */>
        { this.state.testScreen ? <MainMenu/> : <Scores/>}
        
    </div>
    }

}
export default TestUL;
