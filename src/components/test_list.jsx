/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component} from 'react';
//import '../css/App.css'
import '../css/login.css';
import nutmegLogo from '../media/nutmeg-800x800.png';
import Scores from './scores';

import TakeTest from './takeTest';

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
    componentDidMount(){
       // document.getElementById('q').innerHTML = "Let's Begin";
    }  
  
    render() {
       return  <div className="belt" id="mainBelt">
        { this.state.testScreen ? <TakeTest/> : <Scores/>}
        
    </div>
    }

}
export default TestUL;
