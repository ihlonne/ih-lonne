import React from 'react';
import { Box, Heading, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-scroll';

import classes from './Hero.module.css';
import bg from '../assets/hello.png';
import plant from '../assets/plant1.png';

const Hero = () => {
    return (
        <Box
            className={classes.container}
            bgImage={bg}
            justifyContent="center"
            id="hero"
        >
            <Box className={classes['container-content']} bgImage={plant}>
                <Box
                    w="100%"
                    mt="8rem"
                    justifyContent="center"
                    textAlign="center"
                    zIndex="1"
                >
                    <Text>
                        I'm I'm{' '}
                        <span
                            style={{
                                fontFamily: 'rough love',
                                fontSize: '1.25rem',
                            }}
                        >
                            Ingelinn Helene
                        </span>
                        , a self-taught
                    </Text>
                    <Heading size="2xl" fontWeight="black">
                        Front-End Developer
                    </Heading>
                    <Heading size="md" fontWeight="black">
                        with interest for UI/UX design
                    </Heading>
                    <Text mt="1rem">
                        With every line I write, I strive to make beautiful
                        applications.
                    </Text>
                </Box>
                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                    <Button
                        mt="5rem"
                        style={{
                            textTransform: 'uppercase',
                            background: '#011126',
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
