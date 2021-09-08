import { Component, useState } from 'react';

import '../../../css/takeTest.css';
import Menu from '../mainMenuScreen';

const QuestionsList = () => {
    const [questions, setQuestions] = useState('');
    const [adding, setAdding] = useState([]);
    const onClick = () => {
        setQuestions('');
        setAdding([...adding, questions]);
    }
    return <div>
        <input value={questions} onChange={(e) => setQuestions(e.target
        .value)}/>
        <button onClick={onClick}>Add Question</button>
        <ul>{adding.map(item => <li>{item}</li>)}</ul>
    </div>
}

class CreateTests extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            questionsAddedArray: [],
            testScreen: false
        };
      }
      componentDidMount = () => {
        this.setState({ testScreen: false});
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

    addTestHeader = () => {
        let title = document.getElementById('createdTitle').value;
        let genre = document.getElementById('createdGenre').value;
        document.getElementById('createdTestTitle').innerHTML = title;
        document.getElementById('selectedTestGenre').innerHTML = genre;
        if (!title){
           document.getElementById('warningLbl').innerHTML = 'Please enter a valid title and genre';
           setTimeout(function(){document.getElementById('warningLbl').innerHTML = ''}, 3000);
        }
    }
   
    render(){
        return <div>
            <div>{ this.state.testScreen ? <Menu/> : null }</div>
            <table id='testTbl'>
            <thead></thead>
                <tbody>
            <tr id='mainData'>
                <td></td>
                <td>
                    <label>Title:</label>
                    <input id="createdTitle"></input>
                    <p/>
                    <label>Genre:</label>
                    <input id="createdGenre"></input>
                </td> {/* dropdown of selected item from list of genres  */}
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><label id="warningLbl"></label></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td id="addBtnContainer">
                    <button id="addBtn" onClick={this.addTestHeader}>Create Title</button>
                </td>
            </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
            
            <table>
            <thead></thead>
                <tbody>
                <tr>
                    <th></th>
                    <th>
                        <div>
                        Test title:<label id="createdTestTitle"></label><br/>
                        Test genre:<label id="selectedTestGenre"></label>
                        </div>
                    </th>
                    <th></th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tfoot></tfoot>
                </tbody>
            </table>
            <table id="QA">
                <thead></thead>
                <tbody>
                <tr>
                <td><ul>
                        <QuestionsList/>
                   </ul></td>
                </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
       </div>
    }

}
export default CreateTests;