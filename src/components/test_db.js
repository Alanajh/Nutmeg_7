import { Component, React } from 'react';

import '../css/takeTest.css';

function FullList(){
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
    const testListData = test_titles.map(item => (
        <a href="" id="titles"><h3>{item.title} - {item.genre}</h3></a>
    ))  
    
    return <div>
        <div>
            {testListData}
        </div>
    </div>
    }
export default FullList;