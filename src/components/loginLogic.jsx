/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component} from 'react';
import '../css/login.css';

import nutmegLogo from '../media/nutmeg-800x800.png';

const logins = [
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
] 
class LoginLogic extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            loginScreen: true,
            xxx: 'no no no',
            x: ' ',
        }
        
    }

    loginBtn = () => {
        let x = document.getElementById('loginInputUsername');
        console.log(x);
        this.setState({ loginScreen: false});
        this.setState({x: x});
        return this.state.loginScreen & this.state.x;
    }
    

    render() {
       return  <div className="belt" id="login">
           <table>
               <tr>
                   <td id="col-1"><img src={ nutmegLogo} id="logo" alt="logo" ></img></td>
                   <td id="col-2"><h3>N * U * T * M * E * G</h3></td>
                   <td id="col-3"><img src={ nutmegLogo} id="logo" alt="logo" ></img></td>
               </tr>
               <tr>
                   <td></td>
                   <td>
                   <form id="loginForm">
                        <div>
                        <input
                            id="loginInputUsername"
                            placeholder="Username"
                        ></input>
                        </div>
                        <div>
                        <input
                            id="loginInputPassword"
                            placeholder="Password"
                        >
                        </input>
                        </div>
                   </form>
                   </td>
                   <td></td>
               </tr>
               <tr>
                   <td></td>
                   <td></td>
                   <td></td>
               </tr>
           </table>
    </div>
    }

}
export default LoginLogic;
