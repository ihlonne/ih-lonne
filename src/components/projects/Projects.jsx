import React from 'react';
import { Container, Box, Heading, Text } from '@chakra-ui/react';

import ProjectsList from './ProjectsList';

import classes from './Projects.module.css';

const Projects = () => {
    return (
        <Box className={classes.container} id="projects">
            <Box className={classes['container-content']}>
                <Box className={classes.box}>
                    <Heading size="xl" p="0 0 1rem 0">
                        Projects
                    </Heading>
                    <Text>Please select a project for more information.</Text>
                    <ProjectsList />
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;
