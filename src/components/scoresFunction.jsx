/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component, useState} from 'react';
import '../css/scores.css';

import nutmegLogo from '../media/nutmeg-800x800.png';
import Question from './filter_Icon';
import FullList from './test_db';

function Scores(){
    const [menu, setMenu] = useState(false);
   
    const return_to_MainMenu = () => {
        setMenu(true);
    }
    return(  
    <div className="scoreBelt" id="belt">
        <table className="tble">
        <thead></thead>
        <tbody>
            <tr className="trScore" id="trScore">
                <th id="header1">The History of Surgical Firsts</th>
                <th id="header2">5/5 : 100% ------ </th>
                <th id="header3">A+</th>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td><Question/></td>
            </tr>
            <tr>
                <td></td>
                <td> {menu ? <FullList/> : null}</td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td><button id="btn_MainMenu" onClick={return_to_MainMenu()}>Main Menu</button></td>
            </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
</div>
    );
}

export default Scores;
