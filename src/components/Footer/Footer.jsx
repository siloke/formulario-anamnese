import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {StyledFooter} from "./StyledFooter.jsx";
import logo from '../../assets/images/logo-fiap.png'
import { Box, Flex } from 'reflexbox';

const Footer = () => {
    return (
        <StyledFooter mt={30}>
            <footer>
                <Flex justifyContent="space-around" alignItems="center" px={20} py={10} flexWrap="wrap">
                    <Box py={15} ml={10}>
                        <img src={logo} alt="Logo da FIAP"/>
                    </Box>
                    <Box py={15} mr={10}>
                        <span>© 2023 Aná Mnesis</span>
                    </Box>
                </Flex>
            </footer>
        </StyledFooter>
    );
};

export default Footer;
