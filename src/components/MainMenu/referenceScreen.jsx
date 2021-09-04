import React, { Component } from 'react';

import { Button, Col, Collapse, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/animation.css';
import NoSalt from '../../media/no_salt_red.png';
import Menu from './mainMenuScreen';

class Reference extends Component {
    constructor(props){
        super(props);
        this.state = {
            apiKey: 'c49f5474-fb60-46fb-8354-f39553264c15',
            referenceScreen: false,
            dictionaryURL: 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=',
        }
    }
    clearSearch = () => {
        document.getElementById('word').value = "";
    }
    getDefinition = () => {
        let word = document.getElementById('word').value;
        console.log(word);
    }
    getId = () => {
        let id = document.getElementsByClassName('ad');
        if(id === 'ad'){
            alert('hello');
            id.id = 'beforeID';
        }else if(id === 'beforeID'){
            alert('hello');
            id.id = 'ad';
        }
    }
    reference = () => {
        if(this.state.referenceScreen === false){
            const ref = document.getElementById('ref');
            this.setState({ referenceScreen: true});
            ref.remove();
        }else{
            this.setState({ referenceScreen: false});
        }
    }

    render(){
        return <div>
            <div>{this.state.referenceScreen ? <Menu/> : null }</div>
            <Container id="ref">
                <Row>
                    <Col xs={12}>
                    <InputGroup className="mb-3" > 
                        <FormControl
                        placeholder="Definition Query"
                        aria-label="Definition Query"
                        aria-describedby="basic-addon2"
                        id="word"/>
                         <Button variant="outline-secondary" id="button-addon2"  onClick={this.getDefinition}>Search</Button>
                         <Button variant="outline-secondary" id="button-addon2"  onClick={this.clearSearch}>clear</Button>
                    </InputGroup>
                    </Col>
                </Row>
                <Row className='h-100' style={{ border: '2px solid white' }}>
                    <Col>Query:</Col>
                    <Col>Definition:</Col>
                </Row>
                <Row className='h-100' style={{ border: '2px solid white' }}>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Row> 
                    <Col xs={5}></Col>
                    <Col xs={5}></Col>
                    <Col xs={2}><img 
                        src={NoSalt} 
                        id="ad" 
                        alt="No Salt FG" 
                        style={{bottom: 80, float: 'right',right: 2, textAlign: 'right', position: 'fixed', width: 165, height: 165}}/></Col>
                </Row>
                
                <Row style={{position: 'fixed', bottom: 20, right: 0}}>
                    <Col xs={12}><Button onClick={this.reference} id='menuBtn'>Main Menu</Button></Col>
                </Row>
            </Container>
        </div>
    }
}
export default Reference;