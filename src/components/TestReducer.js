import { React, Component } from 'react';
// import '../css/takeTest.css';

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