import { Component } from 'react';

import '../css/login.css'
import '../css/navbar.css';
import nutmegLogo from '../media/nutmeg-800x800.png';

class NavBar extends Component {

    render(){
        return <div id="navBody">
            <table id="mainLoginTbl2">
            <thead></thead>
                <tbody>
            <tr>
                <td id="col-1"><img src={ nutmegLogo} id="logo" alt="logo" ></img></td>
                <td></td>
                <div id="acctScore">
                <td id="score"></td>
                </div>
            </tr>
            </tbody>
            <tfoot></tfoot>
            </table>
            </div>
    }
}
export default NavBar;