import React from 'react';
import {
    Box,
    Image,
    Icon,
    Text,
    UnorderedList,
    ListItem,
    Stack,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { ImHome } from 'react-icons/im';

import classes from './Navbar.module.css';
import logo from '../assets/mylogo.png';
import cv from '../assets/ihlonneCV.pdf';

const Header = () => {
    return (
        <Box className={classes.navbar}>
            <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
            >
                <Box className={classes['navbar-left']}>
                    <Image src={logo} alt="logo" />
                    <Box className={classes['navbar-left-text']}>
                        <Text
                            style={{
                                fontWeight: '700',
                                fontSize: '1.15rem',
                            }}
                        >
                            Ingelinn H. Lønne
                        </Text>
                        <Text
                            mt="-.25rem"
                            style={{
                                fontWeight: '400',
                                fontSize: '0.75rem',
                            }}
                        >
                            Front-End Developer
                        </Text>
                    </Box>
                </Box>
            </Link>
            <Box className={classes['navbar-right']}>
                <UnorderedList style={{ listStyle: 'none' }}>
                    <Stack direction="row" className={classes['navbar-li']}>
                        <ListItem>
                            <Link
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Home
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                About
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </ListItem>
                        <ListItem>
                            <a href={cv} download>
                                Résumé
                            </a>
                        </ListItem>
                    </Stack>
                </UnorderedList>
            </Box>
        </Box>
    );
};

export default Header;
