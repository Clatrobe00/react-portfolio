import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Footer = () => (
    <Jumbotron style={{ opacity: '50%' }} fluid>
        <Container>
            <h1>Footer</h1>
            <p>
                There will be links to my social media and github here, with fontAwesome icons and everything.
            </p>
        </Container>
    </Jumbotron>
)

export default Footer;