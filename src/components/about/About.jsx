import React from 'react';
import {
    Container,
    Box,
    Heading,
    Stack,
    Badge,
    Text,
    Image,
} from '@chakra-ui/react';

import classes from './About.module.css';
import illustration from '../assets/woman.png';

const About = () => {
    return (
        <Box className={classes.container} id="about">
            <Box>
                <Heading
                    size="2xl"
                    fontFamily="rough-love, sans-serif"
                    p="0 0 1rem 0"
                >
                    About me
                </Heading>
                <Stack direction="row" flexWrap="wrap" justifyContent="center">
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Adobe XD</Badge>
                    <Badge variant="outline">Chakra UI</Badge>
                </Stack>
            </Box>
            <Box className={classes['container-content']}>
                <Container style={{ textAlign: 'center' }}>
                    <Box className={classes.chat}>
                        <Text
                            mt="0.5rem"
                            className={classes.bubbles}
                            id={classes.one}
                        >
                            Hello World!
                        </Text>
                        <Text
                            mt="0.5rem"
                            className={classes.bubbles}
                            id={classes.two}
                        >
                            I'm Ingelinn and I love creating things for the
                            interwebs.
                        </Text>
                        <Text
                            mt="0.5rem"
                            className={classes.bubbles}
                            id={classes.three}
                        >
                            My interest first surfaced when I started editing
                            custom Tumblr themes as a teenager. Being creative
                            with HTML, CSS and Photoshop CS was something I
                            enjoyed for many years, though it was only a hobby
                            at the time.
                        </Text>
                        <Text
                            mt="0.5rem"
                            className={classes.bubbles}
                            id={classes.four}
                        >
                            Fast-forward to today, and I realise that I want to
                            make a living out of code and design. While
                            certified as a data electronics technician, I feel
                            much more drawn towards front-end development and
                            UX/UI design.
                        </Text>
                        <Text
                            mt="0.5rem"
                            className={classes.bubbles}
                            id={classes.five}
                        >
                            When I'm not busy learning about code I like to work
                            out, play Teamfight Tacticts or get lost in a
                            fantasy book series.
                        </Text>
                        <Box mt="0.5rem" className={classes['loading-bubble']}>
                            <Box className={classes.loading}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </Box>
                        </Box>
                    </Box>
                </Container>
                <Box className={classes.illustration}>
                    <Image src={illustration} alt="woman" />
                </Box>
            </Box>
        </Box>
    );
};

export default About;
