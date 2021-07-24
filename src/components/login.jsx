/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component} from 'react';
import '../css/login.css';

import nutmegLogo from '../media/nutmeg-800x800.png';
import Test2 from './test_list';
import LoginLogic from './loginLogic';
import TakeTestFun from './takeTestFun';

/* const logins = [
    {
        username: 'Admin',
        password: 'Admin'
    },
    {
        username: 'asd',
        password: '123'
    },
    {
        username: 'login',
        password: 'login'
    },
] */
class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            loginScreen: true,
        }
    }

    loginBtn = () => {
        let btn = document.getElementById('loginBtn');

        let user = document.getElementById('loginInputUsername').value;
        let password = document.getElementById('loginInputPassword').value;

        if(user==="admin" & password==="admin"){
            this.setState({ loginScreen: false});
            btn.remove();
        }else{
            console.log('Incorrect login. Please try again');
        }
    }
    
    render() {
       return  <div className="belt" id="login">
              { this.state.loginScreen ? <LoginLogic/> : <Test2/>}  
            <table>
                <tr>
                    <td></td>
                    <td> <button id="loginBtn" onClick={this.loginBtn}>Login</button></td>
                    <td></td>
                </tr>
            </table>
    </div>
    }

}
export default Login;
