import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {StyledHeader} from "./StyledHeader.jsx";
import { IoFlowerOutline } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import {Button, InputGroup} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function Header() {
    return (
        <StyledHeader>
            <Navbar className="container-navbar">
                <Container className="container-header">

                    <Navbar.Brand className="logo" href="#home"> Aná Mnesis <IoFlowerOutline /></Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="links">Formulário</Nav.Link>
                    </Nav>

                    <InputGroup className="mb-1">
                        <Form.Control
                            placeholder="Procurar"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button style={{backgroundColor: "#FFD3D4", border: "none"}}>
                            <FaSearch className="lupa"/>
                        </Button>
                    </InputGroup>
                </Container>
            </Navbar>
        </StyledHeader>
    );
}

export default Header;