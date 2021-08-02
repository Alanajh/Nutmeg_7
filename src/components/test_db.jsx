/* import { React } from 'react';

import '../css/takeTest.css';
import { IoFilterSharp } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi'

function FullList(){
    
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
        <a href="www" id="titles"><h3>{item.title}</h3></a>
    ));
    const testGenreData = test_titles.map(item => (
        <a href="www" id="titles"><h3>{item.genre}</h3></a>
    ));   

    const testTitleDataSort = testTitleData.sort(function(itemTitle1,itemTitle2 ){
        <a href="www" id="titles"><h3>{itemTitle1.title}</h3></a>
         if(itemTitle1.title > itemTitle2.title){
            return 1;
        }else{ 
            return -1;
        }
    });
   
    return <div id='complete'>
        <table id="scoreTbl">
            <tr>
                <th>Title<button id='filterBtn'><IoFilterSharp/></button><button id='sortBtn'><BiSort/></button></th>
                <th>Genre<button id='filterBtn'><IoFilterSharp/></button><button id='sortBtn'><BiSort/></button></th>
                <th>Score</th>
            </tr>
            <tr>
                <td id='titles'>{testTitleDataSort}</td>
                <td>{testGenreData}</td>
                <td></td>
            </tr>
        </table>     
    </div>
    }
export default FullList; */

import { Component, React, ReactDOM } from 'react';

import { IoFilterSharp } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi'

import '../css/takeTest.css';
import FullList from './TestReducer';
import TestTitles, { TestGenres }  from './TestReducer';
import SortedTests from './sortedTests';
import TestTitlesSorted, { TestGenresSorted } from './sortedTests'

/* const test_titles = [
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

  ]; */

  const list = <FullList/>
  const genreSorted = <TestGenresSorted/>
  let testsSorted = <TestTitlesSorted/>
  const testTitles = <TestTitles/>
  const testGenres = <TestGenres/>
  
class TestPage extends Component {
    constructor(props){
        super(props);
            
        this.state = {
            sorted: false,
        };
    }

    testTitleDataSorted = () => {
        if(this.state.sorted === false) {
            this.setState({ sorted: true});
        }else{
            this.setState({ sorted: false});
        }
    }
    
    render() {
        return  <div className="testPage" id="testPageId">
             <table id="scoreTbl">
            <tr id='mainData'>
                <th>Title
                    <button id='filterBtn'><IoFilterSharp/></button>
                    <button id='sortBtn' onClick={this.testTitleDataSorted}><BiSort/></button></th>
                <th>Genre
                    <button id='filterBtn'><IoFilterSharp/></button>
                    <button id='sortBtn' onClick={this.genreeee}><BiSort/></button></th>
                <th>Score</th>
            </tr>
            <tr id='mainData'>
                <td id='titles'>{ this.state.sorted ? testsSorted : testTitles}</td>
                <td>{ this.state.sorted ? genreSorted : testGenres}</td>
                <td></td>
            </tr>
        </table>     
    </div>
    }
}
export default TestPage;