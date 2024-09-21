import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin , faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import {
    Box,
    FooterContainer,
    Row,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <FooterContainer>
            <Heading>Get in Touch with Me </Heading>
                <Row>
                      
                        <FooterLink href="https://www.linkedin.com/in/shaik-rehana-2016b823a">
                            <i className="fab fa-facebook-f">
                                <span>
                                    <FontAwesomeIcon icon={faLinkedin}/>
                                    
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="https://github.com/rehanashaik123">
                                <span>
                                   <FontAwesomeIcon icon={faGithub}/>
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span>
                                   <FontAwesomeIcon icon={faInstagram}/>
                                </span>
                            </i>
                        </FooterLink>
                   
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;