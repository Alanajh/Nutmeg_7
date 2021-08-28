import React from 'react';
import { Component } from 'react';

import Menu from './mainMenuScreen';
    
class Help extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuScreen: false,
        }
    }

    mainMenu = () => {
        if(this.state.menuScreen === false){
            const faqs = document.getElementById('faqs');
            this.setState({ menuScreen: true});
            faqs.remove();
        }else{
            this.setState({ menuScreen: false});
        }
    }

    render(){
        return <div>
            <div>{this.state.menuScreen ? <Menu/> : null }</div>
            <table id='faqs'>
            <thead></thead>
                <tbody>
                <tr><th>FAQs</th><th>Answer</th></tr>
                <tr><td>Can I make a new test?</td>
                    <td>Yes. Click the dropdown on the main page next to test and you will see </td>
                </tr>
                <tr><td>Can I assign people to particular tests</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Are the tests timed?</td>
                    <td>Tests can be timed or untimed by the creator or administrator.</td>
                </tr>
                <tr>
                    <td><h3>More to come soon...</h3></td>
                    <td></td>
                </tr>
                <tr><hr/></tr>
                
                <tr>
                    <td></td>
                    <td></td>
                    <td><button onClick={this.mainMenu}>Main Menu</button></td>
                </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    }
}

export default Help;