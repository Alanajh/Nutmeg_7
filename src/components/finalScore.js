import { React } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
    fontSize: 36,
}
export const FinalScore = (props) => {
    return <div>
        <Container>
        <span>{props.children}</span>
        </Container>
    </div>
}
export default FinalScore;