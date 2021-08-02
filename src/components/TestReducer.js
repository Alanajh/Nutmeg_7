/* import { Component, React, ReactDOM } from 'react';

import { IoFilterSharp } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi'

import '../css/takeTest.css';
import FullList from './test_db';
import SortedTests from './sortedTests';

const test_titles = [
    {
        title: 'U.S. Event, Landmarks & Monuments',
        genre: 'American History'
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
    },
    {
        title: 'Zodiac Signs',
        genre: 'Astrology'
    },
    {
        title: 'Music of the 90s',
        genre: 'Music'
    },
    {
        title: 'Sounds of Motown',
        genre: 'Music'
    },
    {
        title: 'The Siege of/at Yorktown',
        genre: 'American History'
    }

  ];
class TestPage extends Component {
    constructor(props){
        super(props);
            
        this.state = {
            sorted: false,
        };
    }

    testTitleDataSorted(){
        this.setState({ sorted: true});
    }
    /* testTitleData = test_titles.map(item => (
        <a href="www" id="titles"><p>{item.title}</p></a>
    ));
    testGenreData = test_titles.map(item => (
        <a href="www" id="titles"><p>{item.genre}</p></a>
    ));    
    render() {
        return  <div className="testPage" id="testPageId">
             <table id="scoreTbl">
            <tr>
                <th>Title<button id='filterBtn'><IoFilterSharp/></button><button id='sortBtn'><BiSort/></button></th>
                <th>Genre<button id='filterBtn'><IoFilterSharp/></button><button id='sortBtn'><BiSort/></button></th>
                <th>Score</th>
            </tr>
            <tr>
                <td id='titles'>{ this.state.sorted ? <SortedTests/> : <FullList/>}</td>
                {/* <td>{testGenreData}</td> 
                <td></td>
            </tr>
        </table>     
    </div>
    }
}
export default TestPage; */

import { React, Component } from 'react';
import '../css/takeTest.css';

const test_titles = [
    {
        title: 'U.S. Event, Landmarks & Monuments',
        genre: 'American History'
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
    },
    {
        title: 'Zodiac Signs',
        genre: 'Astrology'
    },
    {
        title: 'Music of the 90s',
        genre: 'Music'
    },
    {
        title: 'Sounds of Motown',
        genre: 'Music'
    },
    {
        title: 'The Siege of/at Yorktown',
        genre: 'American History'
    }

  ];
const testTitleData = test_titles.map(item => (
    <a href="www" id="titles"><p>{item.title}</p></a>
));
const testGenreData = test_titles.map(item => (
    <a href="www" id="titles"><p>{item.genre}</p></a>
));   

class FullList extends Component{
   
    render() {
        return  <div>
                <p id='titles'>{testTitleData}</p>
            </div>   
     }
}
export class TestTitles extends Component { 
    render() {
        return   <div>
            <p>{testTitleData}</p>
        </div>
     }
}
export class TestGenres extends Component { 
    render() {
        return   <div>
        <p>{testGenreData}</p>
    </div>
     }
}
    
export default FullList; 