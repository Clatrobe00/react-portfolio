import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap';

const NavBar = () => (
    <Navbar bg="light" expand="lg" style={{ opacity: '80%', zIndex: 999 }}>
        <Navbar.Brand href="/home">Charles Latrobe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
                <NavDropdown.Item href="projects">Projects</NavDropdown.Item>
                <NavDropdown.Item href="resume">Resume</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;