import React from 'react';
import { Box, Heading, Stack, Badge, Text, Image } from '@chakra-ui/react';

import classes from './About.module.css';
import signature from '../assets/signature.png';

const About = () => {
    return (
        <Box className={classes.container} id="about">
            <Box className={classes['container-content']}>
                <Box className={classes.box}>
                    <Heading
                        size="xl"
                        fontFamily="britannic-bold-regular"
                        p="0 0 1rem 0"
                    >
                        About me
                    </Heading>
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        mb="1rem"
                        className={classes.stack}
                    >
                        <Badge variant="outline">HTML</Badge>
                        <Badge variant="outline">CSS</Badge>
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">Adobe XD</Badge>
                    </Stack>
                    <Box w="100%">
                        <Text mt="0.5rem">Hello World!</Text>
                        <Text mt="0.5rem">
                            I'm Ingelinn and I love creating things for the
                            interwebs.
                        </Text>
                        <Text mt="0.5rem">
                            My interest first surfaced when I started editing
                            custom Tumblr themes as a teenager. Being creative
                            with HTML, CSS and Photoshop CS was something I
                            enjoyed for many years, though it was only a hobby
                            at the time.
                        </Text>
                        <Text mt="0.5rem">
                            Fast-forward to today, and I realise that I want to
                            make a living out of code and design. While
                            certified as a data electronics technician, I feel
                            much more drawn towards front-end development and
                            UX/UI design.
                        </Text>
                        <Text mt="0.5rem">
                            When I'm not busy learning about code I like to work
                            out, play Teamfight Tacticts or get lost in a
                            fantasy book series.
                        </Text>
                        <Image src={signature} alt="signature" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default About;
