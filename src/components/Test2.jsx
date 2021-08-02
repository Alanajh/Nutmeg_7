/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component} from 'react';
import '../css/App.css'

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
export const list = (test_titles) => {
    return test_titles.map((item) =>{
        <div><li>{item}</li></div>
    })
}
class Test3 extends Component {

    submit_button = () => {
       test_titles.map((item) => (
        <div><li>{item}</li></div>
       ))
    }


    render() {
       return  <div className="belt" id="mainBelt">
           
        <div className="row2" >
        
        <button
            className="submitBtn"
            id="dog"
            type="button"
            onClick={this.submit_button}>Test 3
        </button>
        </div>
    </div>
    }

}
export default Test3;
