import { Component} from 'react';
import { ThisMonthInstance } from 'twilio/lib/rest/api/v2010/account/usage/record/thisMonth';

import '../../css/mainMenu.css';

import Help from './helpScreen';
import Reference from './referenceScreen';
import EditCreateTests from './testOptions/editCreateTest';
import Xtra from './x';

class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            calendarScreen: false,
            helpScreen: false,
            liveScreen: false,
            refereceScreen: false,
            roomreachScreen: false,
            testScreen: false,
            mainMenu: true,
            x: false,
        }
    }
    
    componentDidMount = () => {
        this.setState({ testScreen: false});
    }
    mainMenu = () => {
        const menu = document.getElementById('mainmenu');
        menu.remove();
    }
    help = () => {
        if(this.state.helpScreen === false){
            this.mainMenu();
            this.setState({ helpScreen: true});
        }else{
            this.setState({ helpScreen: false});
        }
    }
    tests = () => {
        if(this.state.testScreen === false){
            this.setState({ testScreen: true});
            this.mainMenu();
        }else{
            this.setState({ testScreen: false});
        }
    }
    scores = () => {
        if(this.state.scoreScreen === false){
            this.setState({ scoreScreen: true});
        }else{
            this.setState({ scoreScreen: false});
        }
    }
    roomReach = () => {
        if(this.state.roomreachScreen === false){
            this.setState({ roomreachScreen: true});
        }else{
            this.setState({ roomreachScreen: false});
        }
    }
    reference = () => {
        if(this.state.referenceScreen === true){
            this.setState({ referenceScreen: false});
        }else{
            this.setState({ referenceScreen: true});
            this.mainMenu();
        }
    }
    live = () => {
        if(this.state.liveScreen === false){
            this.setState({ liveScreen: true});
        }else{
            this.setState({ liveScreen: false});
        }
    }
    xtra = () => {
        if(this.state.x === false){
            this.setState({ x: true});
            this.mainMenu();

        }else{
            this.setState({ x: false});
        }
    }
    render() {
        return  <div id="mainPage">
            
            <div>{this.state.referenceScreen ? <Reference/> : null }</div>
            <div>{this.state.helpScreen ? <Help/> : null }</div>
            <div>{this.state.testScreen ? <EditCreateTests/> : null }</div>
            <div>{this.state.x ? <Xtra/> : null }</div>
            <table id="mainmenu">
                <tr>
                    <td></td>
                    <td><button id="menuBtn" onClick={this.tests}>Tests</button></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button id="menuBtn" onClick={this.scores}>Scores</button></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button id="menuBtn" onClick={this.roomReach}>Room Reach</button></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button id="menuBtn" onClick={this.reference}>Reference</button></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button id="menuBtn" onClick={this.live}>Live</button></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button id="menuBtn" onClick={this.help}>Help</button></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button id="menuBtn" onClick={this.xtra}>X</button></td>
                    <td></td>
                </tr>
                
            </table>
            </div>   
     }
}
export default Menu;