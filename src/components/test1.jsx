/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component} from 'react';
import '../css/App.css'

/* import App from '../App';
import nutmegLogo from '../media/nutmeg-800x800.png';
import TestUL from './test_list';
import Test3 from './Test2'; */
import Login from './login';
import Scores from './scores';
import Fortran from './fortran';

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
  ];


const test_1 = [
    {
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
        hint_1: 'A domestic program, which reflected his three major ' +
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
        test_id: '004',
        target: [
            {
                question: 'George W. Bush 3',
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
    }
];

class Test1 extends Component {
    
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
    componentDidMount(){
      //  document.getElementById('q').innerHTML = "Let's Begin";
    }
    
   /*  getNextQuestion = () => {
        let qa = '';
        let moveBtn =  document.querySelector('#moveBtn');
        console.log(document.getElementsByTagName('button'));
        console.log(this.state.x);
       if(this.state.questions === test_1.length ){
            qa = 'Test Complete';
            this.state.target = test_1.length;
            document.getElementById('q').innerHTML = qa;
            this.setState({ questions: 0}); //restarts the test
            this.setState({ target:  0}); //restarts the test
            moveBtn.disabled = true;
            setTimeout(this.end_of_test, 1000);
            if(qa === 'Test Complete'){
                this.state.x = true;
                console.log(this.state.x);
            }
        }else{ 
            qa = test_1[this.state.target].target[0].question;
            document.getElementById('q').innerHTML = qa;
            this.setState({ questions: this.state.questions + 1});
            this.setState({ target: this.state.target + 1}); 
        }
    }
    end_of_test = () => {
        moveBtn.disabled = false;
        moveBtn.innerHTML = "Exit";
        document.getElementById('moveBtn').onClick = this.title_list;
    }

   submit_button = () => {
    if(this.state.count < test_titles.length){       
       console.log(test_titles[this.state.count].title);
    }else{
        
    }
} */

    render() {
       return  <div className="belt" id="mainBelt">
           {<Login></Login>}
          {/*
           <div className="row">
          <div className="col-1">
            <img src={ nutmegLogo} id="logo" alt="logo" ></img>
          </div>
          <div className="col-2" id="logo_txt">
            <h3>N * U * T * M * E * G</h3>
          </div>
            <div className="col-3" id="score">{this.state.questions}/{test_1.length}</div>
      </div>
        <div className="row">
           <div className="col-4" id="title">
                    <p id="test_title">{test_titles[this.state.count].title}</p>
                </div>
            </div>
        <div className="row">
       <div className="col-5">
           <ul>
               <li id="q">Question:</li>
               <li>Answer</li>
               <li>Submit</li>
               <li>Time / Settings</li>
           </ul>
       </div>
    </div>
        <div className="row">
            <div className="col-7">
        <button
            className="submitBtn"
            id="moveBtn"
            type="button"
            onClick={this.getNextQuestion}>Submit</button>
        </div>
        </div> */}
    </div>
    }

}
export default Test1;
