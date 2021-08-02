import { Component, React } from 'react';

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

test_titles.sort(function(itemTitle1,itemTitle2 ){
    <a href="www" id="titles"><p>{itemTitle1.title}</p></a>
        if(itemTitle1.title > itemTitle2.title){
        return 1;
    }else{ 
        return -1;
    }
});
const testTitleData = test_titles.map(item => (
    <a href="www" id="titles"><p>{item.title}</p></a>
));
const testGenreData = test_titles.map(item => (
    <a href="www" id="titles"><p>{item.genre}</p></a>
));

export class TestTitlesSorted extends Component { 
    render() {
        return   <div>
            <p>{testTitleData}</p>
        </div>
     }
}
export class TestGenresSorted extends Component { 
    render() {
        return   <div>
        <p>{testGenreData}</p>
    </div>
     }
}

