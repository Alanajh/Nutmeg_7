import { React, Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import Menu from '../components/MainMenu/mainMenuScreen';

export class Credits extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuScreen: false,
        }
    }
    mainMenu = () => {
        if(this.state.menuScreen === false){
            const credits = document.getElementById('credits');
            this.setState({ menuScreen: true});
            credits.remove();
        }else{
            this.setState({ menuScreen: false});
        }
    }

    render() { 
        const styleObj = {
            borderBottom: '2px solid black',
            fontWeight: 'bold'
        }
        const logos = {
            width: '50%',
        }
        const fullCredit = {
            marginTop: '10px',
            marginBottom: '20px'
        }
        return <div> 
            <div>{this.state.menuScreen ? <Menu/> : null }</div>
                <Container id="credits">
                    <Row id="titleRow" style={styleObj}>
                        <Col>Logo</Col>
                        <Col>Website</Col>
                        <Col>Url</Col>
                    </Row>
                    <Row id="creditListRow" style={fullCredit}>
                        <Col xs={4}><img style={logos} alt="" src="https://www.countryflags.io/img/logo-countryflags.png"/></Col>
                        <Col xs={4}>Country Flags: A simple api to load any flag.</Col>
                        <Col xs={4}>https://www.countryflags.io/#body</Col>
                    </Row>
                    <Row>
                        <Col xs={4}><img style={logos} alt="" src="https://th.bing.com/th/id/OIP.9c0Aadk9V1TemVqw7fByyQHaEK?pid=ImgDet&rs=1"/></Col>
                        <Col xs={4}>React</Col>
                        <Col xs={4}>https://reactjs.org/</Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <Row >
                        <Col xs={4}></Col>
                        <Col xs={4}></Col>
                        <Col xs={4}><Button onClick={this.mainMenu} id='menuBtn'>Main Menu</Button></Col>
                    </Row>
                </Container>
            </div>
    }
}
