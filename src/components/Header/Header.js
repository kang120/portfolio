import { Container, Row, Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import '../../App.css'

const Header = () => {
    const navItems = ['About me', 'Experience', 'Skill']

    return (
        <Navbar collapseOnSelect expand='md' bg='light' fixed='top'>
            <Container fluid>
                <Navbar.Brand href='#' className='fs-2 fw-bold' style={{letterSpacing: '-3px'}}>Lee Wei Kang</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='navbar'>
                    <Nav className='ms-auto'>
                        {navItems.map((item, index) => (
                            <Nav.Link key={index} className='fs-6 mx-2' href={'#'+item.replace(" ", "-").toLowerCase()}>{item}</Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;