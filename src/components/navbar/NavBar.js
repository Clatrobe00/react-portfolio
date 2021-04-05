import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const NavBar = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default NavBar;