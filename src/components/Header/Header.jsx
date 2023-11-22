import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {StyledHeader} from "./StyledHeader.jsx";
import Form from "react-bootstrap/Form";
import {Button, InputGroup} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import logo from '../../assets/images/logo1.png'
import React from "react";

function Header() {
    return (
        <StyledHeader>
            <Navbar className="container-navbar">
                <Container className="container-header">
                    <Navbar.Brand className="logo" href="#home">
                        <img src={logo} alt="Logo"/>
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home" className="links">Formulário</Nav.Link>
                    </Nav>

                    <InputGroup className="search">
                        <Form.Control
                            placeholder="Procurar"
                        />
                        <Button className="lupa" style={{backgroundColor: "#FFD3D4", border: "none"}}>
                            <FaSearch/>
                        </Button>
                    </InputGroup>
                </Container>
            </Navbar>
        </StyledHeader>
    );
}

export default Header;