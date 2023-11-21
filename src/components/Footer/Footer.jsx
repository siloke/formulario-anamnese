import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {StyledFooter} from "./StyledFooter.jsx";
import logo from '../../assets/images/logo-fiap.png'
const Footer = () => {
    return (
        <StyledFooter>
            <footer className="mt-5">
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3">
                        <Col className="p-0" md={3} sm={12}>
                            <img src={logo} alt="Logo da FIAP"/>
                        </Col>
                        <Col className="p-0 d-flex justify-content-end" md={3}>
                            © 2023 Aná Mnesis
                        </Col>
                    </Row>
                </Container>
            </footer>
        </StyledFooter>
    );
};

export default Footer;
