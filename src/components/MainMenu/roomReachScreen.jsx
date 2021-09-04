import { Component} from 'react'; 
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../../components/MainMenu/mainMenuScreen';
import nutmegLogo from '../../media/nutmeg-800x800.png';
import donationImg from '../../media/orange_donations.png';
import educatorImg from '../../media/teacher_RoomReach.png';


class RoomReach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testScreen: false
        };
    }
    closeEverything = () => {
        const roomReachBody = document.getElementById('roomReachBody');
        const menuBtn = document.getElementById('menuBtn');
        roomReachBody.remove();
        menuBtn.remove();
        this.setState({ testScreen: true });
      }
    render(){
    const styles = {
        colCard: {
            textAlign: 'center',
        },
        roomReachHeaderStyle: {
            textAlign: 'center'
        },
        roomReachStyle: {
            textAlign: 'center',
            paddingTop: 33
        },
        roomReachHeader: {

        },
        a: {
            border: '2px solid yellow',
            textAlign: 'center'
        }
    }
        return  <Container fluid className="m-auto align-self-center">
            <div>{ this.state.testScreen ? <Menu/> : null }</div>
            <div id="roomReachBody">
                <Row id="roomReachHeader" style={styles.roomReachHeader}>
                    <Col xs={3}><img src={ nutmegLogo} id="logo" alt="logo" ></img></Col>
                    <Col xs={6}><h3>N * U * T * M * E * G</h3><p>ROOM REACH</p></Col>
                    <Col xs={3}/>
                </Row>
                <Row> 
                    <Col xs={6} style={{}}>
                        <Card className='h-100' style={{ width: '16rem', border: '1px solid lightorange', float: 'right' }}>
                        <Card.Img variant="top" src={donationImg} style={{ height: '50%'}}/>
                        <Card.Body>
                            <Card.Title>Show your support - Donate</Card.Title>
                            <Card.Text>Click the button to select donations.</Card.Text>
                            <Button variant="primary">Make a Donations</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6}>
                        <Card className='h-100' style={{ width: '16rem', border: '1px solid lightorange', float: 'left'  }}>
                        <Card.Img variant="top" src={educatorImg}/>
                        <Card.Body>
                            <Card.Title>Show your support for our Teachers</Card.Title>
                            <Card.Text>Click the button to select donations.</Card.Text>
                            <Button variant="primary">Make a Donations</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row style={{paddingTop: 20}}>
                    <Col xs={12}><Button onClick={this.closeEverything} id='menuBtn'>Main Menu</Button></Col>
                </Row>
                </div>
            </Container>
        
    }
}
export default RoomReach;