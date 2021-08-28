import { Component } from 'react';
import '../../css/testFormatter.css'
import NavBar from '../navBar';
import law from '../../json/001_Federal_Law.json';
import TakeTest from '../takeTest';

class Xtra extends Component {
    constructor(){
        super();
        this.state = {
            target: 0,
            targetTitle: 0,
            answer: 0,
        }
    }
    getNext = () => {
        if(this.state.target === law.length - 1){
            this.setState({ target: this.state.target + 0 });
        }else{
            this.setState({ target: this.state.target + 1 });
            this.setState({ answer: this.state.answer + 1 });
        }
    }
    render(){
        return <div id="body">
            <TakeTest/>
            <div id="title">{law[this.state.targetTitle].title}</div>
            <div id="heading">Question ?</div>
            <div id="question">
                {law[this.state.target].target[0].question}
            </div>
            <p/>
            <div id="options">
                <ul>
                    <li key="1"><input type="radio" id="choice1" name="answers" value="choice1" onClick={this.answers}/> &nbsp;{law[this.state.target].target[0].option_1}</li>
                    <p/>
                    <li key="2"><input type="radio" id="choice1" name="answers" value="choice1" onClick={this.answers}/> &nbsp;{law[this.state.target].target[0].option_2}</li>
                    <p/>
                    <li key="3"><input type="radio" id="choice1" name="answers" value="choice1" onClick={this.answers}/> &nbsp;{law[this.state.target].target[0].option_3}</li>
                    <p/>
                    <li key="4"><input type="radio" id="choice1" name="answers" value="choice1" onClick={this.answers}/> &nbsp;{law[this.state.target].target[0].option_4}</li>
                    <p/>
                </ul>
            </div>
            <div id="btnHldr">
                <button onClick={this.getNext}>Next</button>
            </div>
        </div>
    }
}
export default Xtra;