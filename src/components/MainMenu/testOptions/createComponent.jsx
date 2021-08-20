import { Component } from 'react';

import '../../../css/takeTest.css';
import Menu from '../mainMenuScreen';


class CreateTests extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
    render(){
        return <div>
            <div>{ this.state.testScreen ? <Menu/> : null }</div>
            <table id='testTbl'>
            <tr id='mainData'>
                <td></td>
                <td><label>Title:</label>
                    <input></input>
                    <p/>
                    <label>Genre:</label>
                    <input></input></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td><button>Add</button></td>
            </tr>
        </table>
        </div>
    }

}
export default CreateTests;