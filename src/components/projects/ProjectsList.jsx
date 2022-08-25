import React from 'react';
import { useDisclosure, Box, Text, Icon } from '@chakra-ui/react';
import { BsBoxArrowInUpRight } from 'react-icons/bs';

import ProjectsOne from './ProjectsOne';
import ProjectsTwo from './ProjectsTwo';
import ProjectsThree from './ProjectsThree';
import lllibrary from '../assets/lllibrary.png';
import portfolio from '../assets/portfoliov1.png';
import huddle from '../assets/huddle.png';

import classes from './Projects.module.css';

const ProjectsList = () => {
    const {
        isOpen: isProjectOneOpen,
        onOpen: onProjectOneOpen,
        onClose: onProjectOneClose,
    } = useDisclosure();
    const {
        isOpen: isProjectTwoOpen,
        onOpen: onProjectTwoOpen,
        onClose: onProjectTwoClose,
    } = useDisclosure();
    const {
        isOpen: isProjectThreeOpen,
        onOpen: onProjectThreeOpen,
        onClose: onProjectThreeClose,
    } = useDisclosure();

    return (
        <Box mt="2rem" spacing="4" className={classes['boxes-container']}>
            <Box className={classes.boxes}>
                <Box className={classes.card}>
                    <Text
                        onClick={onProjectOneOpen}
                        className={classes.heading}
                    >
                        Linn's Little Library
                    </Text>
                    <Box>
                        <Icon
                            as={BsBoxArrowInUpRight}
                            className={classes.icon}
                            onClick={() =>
                                window.open(
                                    'https://linnslittlelibrary.netlify.app',
                                    '_blank'
                                )
                            }
                        />
                    </Box>
                </Box>
            </Box>
            <ProjectsOne
                isProjectOneOpen={isProjectOneOpen}
                onProjectOneClose={onProjectOneClose}
            />
            <Box className={classes.boxes}>
                <Box className={classes.card}>
                    <Text
                        onClick={onProjectTwoOpen}
                        className={classes.heading}
                    >
                        Portfolio V.1
                    </Text>
                    <Icon
                        as={BsBoxArrowInUpRight}
                        className={classes.icon}
                        onClick={() =>
                            window.open(
                                'https://ihlonne.github.io/Portfolio/',
                                '_blank'
                            )
                        }
                    />
                </Box>
            </Box>
            <ProjectsTwo
                isProjectTwoOpen={isProjectTwoOpen}
                onProjectTwoClose={onProjectTwoClose}
            />
            <Box className={classes.boxes}>
                <Box className={classes.card}>
                    <Text
                        onClick={onProjectThreeOpen}
                        className={classes.heading}
                    >
                        Huddle landing page
                    </Text>

                    <Box>
                        <Icon
                            as={BsBoxArrowInUpRight}
                            className={classes.icon}
                            onClick={() =>
                                window.open(
                                    'https://ihlonne.github.io/Huddle-landing-page/',
                                    '_blank'
                                )
                            }
                        />
                    </Box>
                </Box>
            </Box>
            <ProjectsThree
                isProjectThreeOpen={isProjectThreeOpen}
                onProjectThreeClose={onProjectThreeClose}
            />
        </Box>
    );
};

export default ProjectsList;
