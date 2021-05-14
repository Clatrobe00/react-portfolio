import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => (
    <Jumbotron className='Footer' fluid>
        <Container>
            <h5>Thanks for stopping by!</h5>
            <a href="https://github.com/Clatrobe00" rel="noreferrer" target="_blank" className="footer-links">
                <FaGithub style={{ fontSize: '2rem', marginLeft: '5px', marginRight: '5px' }}/>
            </a>
            <a href="https://www.linkedin.com/in/charles-latrobe-bateman-6b748a1b6/" rel="noreferrer" target="_blank" className="footer-links">
                <FaLinkedin style={{ fontSize: '2rem', marginLeft: '5px', marginRight: '5px' }}/>
            </a>
        </Container>
    </Jumbotron>
)

export default Footer;