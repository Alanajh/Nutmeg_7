import { Component, React } from 'react';

import '../css/takeTest.css';
import Menu from './MainMenu/mainMenuScreen';
import { TestTitles, TestGenres, FindTest }  from './TestReducer'
import { TestTitlesSorted, TestGenresSorted } from './sortedTests'

  
class TestPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            findTest: false,
            sorted: false,
            testScreen: false,
        }
    };

    closeEverything = () => {
        const groupTestBtns = document.getElementById('group_TestBtns');
        const menuBtn = document.getElementById('menuBtn');
        groupTestBtns.remove();
        menuBtn.remove();
        this.setState({ createComponent: false });
        this.setState({ testScreen: true });
      }
    find = () => {
        if(this.state.findTest === false) {
            this.setState({ findTest: true});
        }else{
            this.setState({ findTest: false});
        }
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
        if(this.state.testScreen === false){
            testTbl.hidden = true;
            this.setState({ testScreen: true});
        }else{
            this.setState({ testScreen: false});
        }
    }

    
    render() {
        return  <div className="testPage" id="testPageId">
            <div>{this.state.testScreen ? <Menu/> : null }</div>
             <table id='testTbl'>
             <thead>
            {/* <tr id='mainData'>
                <th>Title
                    <button id='filterBtn'><IoFilterSharp/></button>
                    <button id='sortBtn' onClick={this.testTitleDataSorted}><BiSort/></button></th>
                <th>Genre
                    <button id='filterBtn'><IoFilterSharp/></button>
                    <button id='sortBtn' onClick={this.genreeee}><BiSort/></button></th>
                <th>Score</th>
            </tr> */}
            </thead>
            <tbody>
            <tr id='mainData'>
                <td id='titles'>{ this.state.sorted ? <TestTitlesSorted/> : <TestTitles/>}</td>
                <td>{ this.state.sorted ? <TestGenresSorted/> : <TestGenres/>}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            </tbody>
            <tfoot></tfoot>
        </table>     
        <div>{this.state.findTest ? <FindTest/> : null }</div>
    </div>
    }
}
export default TestPage;