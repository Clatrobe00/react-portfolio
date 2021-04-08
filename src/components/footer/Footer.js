import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './Footer.css';

const Footer = () => (
    <Jumbotron className='Footer' fluid>
        <Container>
            <h1>Footer</h1>
            <p>
                There will be links to my social media and github here, with fontAwesome icons and everything.
            </p>
        </Container>
    </Jumbotron>
)

export default Footer;