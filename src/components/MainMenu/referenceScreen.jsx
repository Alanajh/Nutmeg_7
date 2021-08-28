import React, { Component } from 'react';

import Menu from './mainMenuScreen';

class Reference extends Component {
    constructor(props){
        super(props);
        this.state = {
            referenceScreen: false,
        }
    }

    reference = () => {
        if(this.state.referenceScreen === false){
            const ref = document.getElementById('ref');
            this.setState({ referenceScreen: true});
            ref.remove();
        }else{
            this.setState({ referenceScreen: false});
        }
    }

    render(){
        return <div>
            <div>{this.state.referenceScreen ? <Menu/> : null }</div>
            <div id='ref'>
            <input></input>
            <table>
                <thead>
                <tr>
                    <th>Query</th>
                    <th>Definition</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td><button onClick={this.reference}>Main Menu</button></td>
                </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
            </div>
        </div>
    }
}
export default Reference;