/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-undef */
import { Component} from 'react';
import '../css/login.css';

import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import nutmegLogo from '../media/nutmeg-800x800.png';

import Test2 from './test_list';
// import '../json/login.json';

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            loginScreen: true,
        }
    }

    loginBtn = () => {
        let loginBtn = document.getElementById('loginButton');
        let loginForm = document.getElementById('loginForm');
        let loginHeader = document.getElementById('loginHeader');
        let loginWarning = document.getElementById('loginWarning');
        //let warningHTML = document.getElementById('warningHTML');

        /* let user = document.getElementById('loginInputUsername').value;
        let password = document.getElementById('loginInputPassword').value; */
        if(this.state.loginScreen === true){
            this.setState({ loginScreen: false});
            loginBtn.remove();
            loginForm.remove();
            loginHeader.remove();
            loginWarning.remove();
        }else{
            this.setState({ loginScreen: true});
        }
        /* 
        return this.state.loginScreen & this.state.x; */
        /* if(user==="admin" & password==="admin"){
            this.setState({ loginScreen: false});
            btn.remove();
            welcome back
        }else{
             setTimeout(function(){
                warningHTML.innerHTML = "Your login is incorrect";
            }, 3000)
            console.log('Incorrect login. Please try again');
        } */
    }
    
    render() {
        const styles = {
            login: {
                marginTop: 20,
                textAlign: 'center',
                paddingTop: 33
            },
            loginBtn: {
                borderRadius: 10,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 8
            },
            loginInput: {
                backgroundColor: 'aliceblue',
                border: 'none',
                borderRadius: 6,
                margin: 5,
                padding: 8,
            },
            logo: {
                height: 155,
                paddingTop: 25,
                textAlign: 'center',
              }
        }
        
       return  <div className="belt" id="login" style={styles.login}>
              { this.state.loginScreen ? null : <Test2/>}  
            <Container fluid>
                <Row id="loginHeader">
                    <Col xs={3}><img src={ nutmegLogo} id="logo" alt="logo"  style={styles.logo}></img></Col>
                    <Col xs={6}><h3>N * U * T * M * E * G</h3></Col>
                    <Col xs={3}/>
                </Row>
                <Row id="loginWarning">
                    <Col/>
                    <Col><span id="warningHTML"></span></Col>
                    <Col/>
                </Row>
                <Row id="loginForm">
                    <Col/>
                    <Col xs={10}>
                    <form id="loginForm">
                        <div>
                        <input
                            id="loginInputUsername"
                            placeholder="Username"
                            style={styles.loginInput}
                        ></input>
                        </div>
                        <div>
                        <input
                            id="loginInputPassword"
                            placeholder="Password"
                            style={styles.loginInput}
                        >
                        </input>
                        </div>
                   </form>
                    </Col>
                    <Col/>
                </Row>
                <Row id="loginButton">
                    <Col/>
                    <Col xs={8}><button id="loginBtn" onClick={this.loginBtn} style={styles.loginBtn}>Login</button></Col>
                    <Col/>
                </Row>
            </Container>
        </div>
    }
}
export default Login;


