import { Component } from 'react'

import '../../../css/testOptions.css';
import TestPage from '../../test_db';
import CreateTests from './createComponent';
import Menu from '../mainMenuScreen';

class EditCreateTests extends Component {
    constructor(props) {
    super(props);
    this.state = {
        createComponent: false,
        groupTestBtns: true,
        testScreen: false,
        testScreenList: false,
        value: 'list'
    };
  }
  grpBtns = () => {
    
  }

  listBtn = () => {
    this.setState({ testScreenList: true });
    this.setState({ createComponent: false });
  }
  createBtn = () => {
    this.setState({ testScreenList: false });
    this.setState({ createComponent: true });
  }
  editBtn = () => {

  }
  closeEverything = () => {
    const groupTestBtns = document.getElementById('group_TestBtns');
    const menuBtn = document.getElementById('menuBtn');
    groupTestBtns.remove();
    menuBtn.remove();
    this.setState({ createComponent: false });
    this.setState({ testScreenList: false });
    this.setState({ testScreen: true });
  }
    render() {
        return <div>
         <div>{ this.state.testScreen ? <Menu/> : null }</div>
            <div id="group_TestBtns">
              <button id="testOptionsBtn" onClick={this.listBtn}>List</button>
              <button id="testOptionsBtn" onClick={this.createBtn}>Create</button>
              <button id="testOptionsBtn">Edit</button>
            </div>
            <div>
            <div id="pgTestpage">{this.state.testScreenList ? <TestPage/> : null }</div>
            <div id="pgCreateComponent">{this.state.createComponent ? <CreateTests/> : null }</div>
            </div>
            <div id="menuBtnHldr">
            <button onClick={this.closeEverything} id='menuBtn'>Main Menu</button>
            </div>
 </div>
    }
}
export default EditCreateTests;