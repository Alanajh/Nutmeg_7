import { Component, React } from 'react';

import { IoFilterSharp } from 'react-icons/io5';
import { BiSort } from 'react-icons/bi'

import '../css/takeTest.css';
import Menu from './MainMenu/mainMenuScreen';
import TestTitles, { TestGenres }  from './TestReducer'
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

  const genreSorted = <TestGenresSorted/>
  let testsSorted = <TestTitlesSorted/>
  const testTitles = <TestTitles/>
  const testGenres = <TestGenres/>
  
class TestPage extends Component {
    constructor(props){
        super(props);
            
        this.state = {
            sorted: false,
            testScreen: false,
        }
    };
    
    componentDidMount = () => {
        
    }
    testTitleDataSorted = () => {
        if(this.state.sorted === false) {
            this.setState({ sorted: true});
        }else{
            this.setState({ sorted: false});
        }
    }
    tests = () => {
        const testTbl = document.getElementById('testTbl');  

        testTbl.hidden = false;
        console.log('Testdb_1: ' + this.state.testScreen);
        if(this.state.testScreen === false){
            console.log('Testdb_2: ' + this.state.testScreen);
            //const testTbl = document.getElementById('testTbl');
            //testTbl.remove();
            testTbl.hidden = true;
            this.setState({ testScreen: true});
            console.log('Testdb_3: ' + this.state.testScreen);
        }else{
            this.setState({ testScreen: false});
        }
    }

    
    render() {
        return  <div className="testPage" id="testPageId">
            <div>{this.state.testScreen ? <Menu/> : null }</div>
             <table id='testTbl'>
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
            <tr>
                <td></td>
                <td><button onClick={this.tests} id='subBtn'>Main Menu</button></td>
            </tr>
        </table>     
    </div>
    }
}
export default TestPage;