import React from 'react';
import { Box, Heading, Button, Text, Icon } from '@chakra-ui/react';
import { Link } from 'react-scroll';

import { RiLinkedinLine, RiTwitterLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';

import classes from './Hero.module.css';

const Hero = () => {
    return (
        <Box className={classes.container} id="hero">
            <Box className={classes['container-content']}>
                <Box className={classes.box}>
                    <Heading size="4xl">
                        Front-End <br />
                        Developer
                    </Heading>
                    <Text mt="1rem">
                        With every line I write, I strive to make beautiful
                        applications.
                    </Text>
                    <Box className={classes.socials}>
                        <Icon
                            mr=".5rem"
                            as={RiLinkedinLine}
                            transition="2s"
                            _hover={{
                                color: '#934b2d',
                                transition: '2s',
                            }}
                            onClick={() =>
                                window.open(
                                    'https://www.linkedin.com/in/ingelinnhelenelonne/',
                                    '_blank'
                                )
                            }
                        />{' '}
                        <Icon
                            mr=".5rem"
                            as={RiTwitterLine}
                            transition="2s"
                            _hover={{
                                color: '#934b2d',
                                transition: '2s',
                            }}
                            onClick={() =>
                                window.open(
                                    'https://www.linkedin.com/in/ingelinnhelenelonne/',
                                    '_blank'
                                )
                            }
                        />{' '}
                        <Icon
                            mr=".5rem"
                            as={FiGithub}
                            transition="2s"
                            _hover={{
                                color: '#934b2d',
                                transition: '2s',
                            }}
                            onClick={() =>
                                window.open(
                                    'https://github.com/ihlonne',
                                    '_blank'
                                )
                            }
                        />
                    </Box>
                </Box>
                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <Button
                        className={classes.button}
                        style={{
                            textTransform: 'uppercase',
                            background: '#BE9981',
                            color: '#fff',
                            transition: '2s',
                        }}
                    >
                        Projects
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Hero;
