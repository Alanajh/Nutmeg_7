/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component } from 'react';
//import '../css/App.css'
import '../css/login.css';
import nutmegLogo from '../media/nutmeg-800x800.png';
import Scores from './scores';
import Fortran from './fortran';
import TestUL from './test_list';

import TakeTestFun from './takeTestFun';

const test_titles = [
    {
        title: 'U.S. Event, Landmarks & Monuments',
        genre: 'U.S. History'
    },
    {
        title: 'Great Lines from Great Works',
        genre: 'Literature'
    },
    {
        title: 'Famous Discoveries of Biological Science',
        genre: 'Biology'
    },
    {
        title: 'Flags of the Americas',
        genre: 'Geography'
    },
    {
        title: 'Flags of Africa',
        genre: 'Geography'
    },
    {
        title: 'Flags of Europe',
        genre: 'Geography'
    },
    {
        title: 'The Elements of the Periodic Table',
        genre: 'Science'
    },
    {
        title: 'Famous Companies That Changed Their Names',
        genre: 'Business'
    }

  ];

const test_1 = [
    {
         /// 0 are NO 1 are YES ?? //////
        test_id: '001',
        target: [
            {
                question: 'Theodore Roosevelt',
                option_1: 'Creator of The League of Nation',
                option_2: 'Civil Rights Movement',
                option_3: 'The Square Deal',
                option_4: 'The New Deal',
            }
        ],
        answer: 'The Square Deal',
        img: './media/theodore_roosevelt_1.jpg',
        points: '34',
        hint_1: 'A domestic program, which reflected his three maanswersr ' +
            'goals: conservation of natural resources, control of corporations, and consumer protection.',
        hint_2: 'Trust Buster: A term used to describe Theodore Roosevelt ' +
            'because of his aggressive use of U.S. antitrust laws to break up large business monopolies.',
        hint_3: 'Progressivism was a powerful political and social force by the turn of the century,' +
            'and many Americans considered Roosevelt as the leader of the Progressive movement. ' +
            'To most contemporaries, Progressivism meant the use of science, engineering, technology, ' +
            'and the new social sciences to promote modernization and identify solutions to political ' +
            'corruption and inefficiency. Roosevelt, trained as a biologist, identified himself and his ' +
            'programs with this scientific approach to targeting and eliminating social and political ills.',
    },
    {
        test_id: '002',
        target: [
            {
                question: 'George W. Bush',
                option_1: 'Creation of HUD',
                option_2: 'Halt student loan interest',
                option_3: 'First female president',
                option_4: '911',
            }
        ],
        answer: '911',
        img: '',
        points: '34',
        hint_1: 'Flight 93',
        hint_2: 'Osama Bin Laden - Al Qaeda',
        hint_3: 'The North and South Towers of The World Trade Center',
    },
    {
        test_id: '003',
        target: [
            {
                question: 'George W. Bush 2',
                option_1: 'Creationjhblj of HUD',
                option_2: 'Hal,bhblt student loan interest',
                option_3: 'First female president',
                option_4: '911',
            }
        ],
        answer: '911 2',
        img: '',
        points: '34',
        hint_1: 'Flight 93',
        hint_2: 'Osama Bin Laden - Al Qaeda',
        hint_3: 'The North and South Towers of The World Trade Center',
    },
    {
        test_id: '004',
        target: [
            {
                question: 'George W. Bush 3',
                option_1: 'Creation of HUDkv',
                option_2: 'Halt student loan interesthbljhb',
                option_3: 'First female president',
                option_4: '911',
            }
        ],
        answer: '911 - 3',
        img: '',
        points: '34',
        hint_1: 'Flight 93',
        hint_2: 'Osama Bin Laden - Al Qaeda',
        hint_3: 'The North and South Towers of The World Trade Center',
    }
];

class TakeTest extends Component {
    
    constructor(){
        super();
            
        this.state = {
            answers: 0,
            count: 0,
            index: 0,
            question: 'Are you ready?',
            questions: 1,
            right: 0,
            score: 0,
            scoreScreen: false,
            score_Percentage: 0,
            target: 0,
            testLength: 0,
            testScreen: true,
            wrong: 0,
            x: false,
        };
    }
    componentDidMount(){
      //  document.getElementById('q').innerHTML = "Let's Begin";
    }
   
    getNextQuestion = () => {
        let qa = '';
        let answers = document.getElementsByName("answers");
        let verifiedAnswer = document.getElementById("verifiedAnswer");
        let correctAnswer = test_1[this.state.target].answer;
        
       if(this.state.questions + 1 === test_1.length + 1){
        qa = 'Test Complete';
        /////////////  test Score and Percentage %  ////////////
            this.state.target = test_1.length;
            this.state.score_Percentage = this.state.right/test_1.length * 100;
            console.log("Percentage: " + this.state.score_Percentage);
            document.getElementById('q').innerHTML = qa;
            this.setState({ questions: 0}); //restarts the test
            this.setState({ target:  0}); //restarts the test
            moveBtn.disabled = true;
            setTimeout(this.end_of_test, 1000);
        }else{ 
            /////// ACTIVE TEST ////////
            qa = test_1[this.state.target].target[0].question;

            if(answers[0].checked){ verifiedAnswer.innerHTML = test_1[this.state.target].target[0].option_1; }
            else if(answers[1].checked){ verifiedAnswer.innerHTML = test_1[this.state.target].target[0].option_2; }
            else if(answers[2].checked){ verifiedAnswer.innerHTML = test_1[this.state.target].target[0].option_3; }
            else if(answers[3].checked){ verifiedAnswer.innerHTML = test_1[this.state.target].target[0].option_4; }
            
            this.setState({ questions: this.state.questions + 1});
            this.setState({ option_1: this.state.option_1 + 1 });
            this.setState({ target: this.state.target + 1}); 
            if(correctAnswer === verifiedAnswer.innerHTML){
                this.setState({ right: this.state.right + 1});
            }else{
                console.log("wrong");
            }
        }
    }

    end_of_test = () => {
        let mainPg = document.createElement("Button"); 
        mainPg.innerHTML = "Main Menu";     
        moveBtn.disabled = false;
        moveBtn.innerHTML = "Exit";
       
        this.setState({ scoreScreen: true});

        let testPg =  document.getElementById('testPg');
        testPg.remove();
        return(
            <div
            testLength={test_titles.length}
            />
        );
    }

    render() {
       return  <div className="belt" id="mainBelt">
           {/* REPLACE WITH END OF TEST SCRIPT OR SCORE SCREEN */}
           { this.state.scoreScreen ? <Scores len={test_1.length} right={this.state.right} score_Percentage={this.state.score_Percentage}/> : null }
           <table id="testPg">
               <tr>
                   <td id="col-1b"><img src={ nutmegLogo} id="logo" alt="logo" ></img></td>
                   <td id="col-2b"><h3>N * U * T * M * E * G</h3></td>
                   <td id="col-3b">{this.state.questions}/{test_1.length}
                        <p>{}</p>
                   </td>
               </tr>
               <tr>
                   <td id="col-4a"><img src={ nutmegLogo} id="logo" alt="logo" ></img></td>
                   <td id="col-4">
                   <ul >
                        <li id="q">{test_1[this.state.target].target[0].question}</li>
                        <div className="unorderedList">
                            <li/><input type="radio" id="choice1" name="answers" value="choice1" onClick={this.answers}/> {test_1[this.state.target].target[0].option_1}
                            <li/><input type="radio" id="choice2" name="answers" value="choice2" onClick={this.answers}/> {test_1[this.state.target].target[0].option_2}
                            <li/><input type="radio" id="choice3" name="answers" value="choice3" onClick={this.answers}/> {test_1[this.state.target].target[0].option_3}
                            <li/><input type="radio" id="choice4" name="answers" value="choice4" onClick={this.answers}/> {test_1[this.state.target].target[0].option_4}
                        </div>
                        <div id="verifiedAnswer">__________________________</div>
                      
                        {/* <li>Answer</li>
                        <li>Submit</li>
                        <li>Time / Settings</li> */}
                    </ul>
                   </td>
                   <td id="col-4b"><img src={ nutmegLogo} id="logo" alt="logo" ></img></td>
               </tr>
               <tr>
                   <td></td>
                   <td className="submitBtn"> 
                       <button
                        className="submitBtn"
                        id="moveBtn"
                        type="button"
                        onClick={this.getNextQuestion}>Submit
                        </button>
                    </td>
                    <td id="col-4b">{this.state.questions}/{test_1.length}</td>
               </tr>
           </table>
    </div>
    }

}
export default TakeTest;
