import { Component } from 'react'

import '../../../css/testOptions.css';
import TestPage from '../../test_db';
import CreateTests from './createComponent';

class EditCreateTests extends Component {
    constructor(props) {
    super(props);
    this.state = {
        createComponent: false,
        testScreen: false,
        value: 'list'
    };
  }

  listBtn = () => {
    this.setState({ testScreen: true });
    this.setState({ createComponent: false });
  }
  createBtn = () => {
    this.setState({ testScreen: false });
    this.setState({ createComponent: true });
  }
  editBtn = () => {

  }
    render() {
        return <div>
            <div id="group_TestBtns">
              <button id="testOptionsBtn" onClick={this.listBtn}>List</button>
              <button id="testOptionsBtn" onClick={this.createBtn}>Create</button>
              <button id="testOptionsBtn">Edit</button>
            </div>
            <div>
            <div id="pgTestpage">{this.state.testScreen ? <TestPage/> : null }</div>
            <div id="pgCreateComponent">{this.state.createComponent ? <CreateTests/> : null }</div>
            </div>
 </div>
    }
}
export default EditCreateTests;