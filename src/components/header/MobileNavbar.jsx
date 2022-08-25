import React from 'react';
import {
    Box,
    Image,
    Icon,
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    UnorderedList,
    ListItem,
    Stack,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';

import classes from './Navbar.module.css';
import cv from '../assets/ihlonneCV.pdf';

const MobileHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box className={classes.navbar}>
            <Box
                display="flex"
                flexDirection="row"
                padding="0 1.875rem"
                alignItems="center"
            >
                <Image
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/296035584_1527838114317419_2648096140552206564_n.png?_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=w9Bm-NKm38wAX8rS8Yi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLyBfwLogowr6pO9t5JSHBQCozshsYj7J5ATb3qwdvlYQ&oe=631EF4A6"
                    alt="logo"
                    height="3.50rem"
                    width="3.50rem"
                    display="none"
                />
                <Box style={{ textTransform: 'uppercase' }}>
                    <Text
                        style={{
                            fontWeight: '700',
                            fontSize: '1rem',
                        }}
                    >
                        Ingelinn H. Lønne
                    </Text>
                    <Text
                        style={{
                            fontWeight: '400',
                            fontSize: '0.75rem',
                        }}
                    >
                        Front-End Developer
                    </Text>
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                p="0 1.875rem"
                alignItems="center"
            >
                <Icon
                    as={GiHamburgerMenu}
                    style={{
                        background: 'transparent',
                        color: '#0c0c0c',
                        fontSize: '1.75rem',
                    }}
                    onClick={onOpen}
                />
                <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader
                            padding="2rem "
                            fontSize="2rem"
                            fontFamily="britannic-bold-regular"
                        >
                            Navigate
                        </DrawerHeader>

                        <DrawerBody>
                            <UnorderedList
                                style={{ listStyle: 'none' }}
                                display="flex"
                                flexDirection="row"
                            >
                                <Stack>
                                    <ListItem>
                                        <Link
                                            to="hero"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
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
                        </DrawerBody>

                        <DrawerFooter>
                            <Button
                                bg="#BE9981"
                                color="#fff"
                                borderRadius="10px"
                                variant="filled"
                                mr={3}
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    );
};

export default MobileHeader;
