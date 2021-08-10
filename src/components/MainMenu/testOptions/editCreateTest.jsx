import { Component } from 'react'

import '../../../css/testOptions.css';
import TestPage from '../../test_db';
import CreateTests from './createComponent';

class EditCreateTests extends Component {
    constructor(props) {
    super(props);
    this.state = {
        testScreen: false,
        value: 'list'
    };

    this.chooseTestEvent = this.chooseTestEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount = () => {
    
}
  chooseTestEvent(event) {
    this.setState({value: event.target.value});
    /* if(this.state.value === 'list'){
        this.setState({ testScreen: true });
    } */
  }

  handleSubmit(event) {
    const testForm = document.getElementById('testForm');
    const testPage = document.getElementById('pgTestpage');
    const createComp = document.getElementById('pgCreateComponent');
    if(this.state.value === 'list'){
        this.setState({ testScreen: true });
        testForm.remove();
        createComp.remove();
    } else if(this.state.value === 'create'){
        this.setState({ createComponent: true });
        testForm.remove();
        testPage.remove();
    }
  }
    render() {
        return <div>
            <form onSubmit={this.handleSubmit} id='testForm'>
                <label>
                Tests: 
                </label>
                <select value={this.state.value} onChange={this.chooseTestEvent}>
                    <option value="list" id="opt"></option>
                    <option value="list" id="opt">List</option>
                    <option value="create" id="opt">Create</option>
                    <option value="edit" id="opt">Edit</option>
                </select>
               
                <input type="submit" value="Submit" id='testSelectSubmit'/>
            </form>
            <div>
            <div id="pgTestpage">{this.state.testScreen ? <TestPage/> : null }</div>
            <div id="pgCreateComponent">{this.state.createComponent ? <CreateTests/> : null }</div>
            </div>
 </div>
    }
}
export default EditCreateTests;