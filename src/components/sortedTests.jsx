import { Component, React } from 'react';

import '../css/takeTest.css';
import test_titles from '../json/testing_test_titles.json';

const testTitleData = test_titles.map(item => (
    <p>{item.title}</p>
));
const testGenreData = test_titles.map(item => (
    <p>{item.genre}</p>
));

class SortedTests extends Component { 
    render() {
        return <div>{testTitleData}</div>  
     }
}

export class TestTitlesSorted extends Component { 
    render() {
        return <div>{testTitleData}</div>
     }
}
export class TestGenresSorted extends Component { 
    render() {
        return <div>{testGenreData}</div>
     }
}

export default SortedTests;
