import React from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';

import ProjectsList from './ProjectsList';

import classes from './Projects.module.css';

const Projects = () => {
    return (
        <Box className={classes.container} id="projects">
            <Container className={classes['container-content']}>
                <Box>
                    <Heading
                        size="2xl"
                        fontFamily="rough-love, sans-serif"
                        p="0 0 1rem 0"
                    >
                        Projects
                    </Heading>
                    <Text>Please select a project for more information.</Text>
                </Box>
            </Container>
            <ProjectsList />
        </Box>
    );
};

export default Projects;
