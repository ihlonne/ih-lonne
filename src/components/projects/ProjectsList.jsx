import React from 'react';
import {
    Heading,
    Wrap,
    WrapItem,
    Center,
    useDisclosure,
    Box,
    Text,
    Icon,
    Image,
} from '@chakra-ui/react';
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
        <Wrap mt="2rem" spacing="6" justify="center" w="100%">
            <WrapItem className={classes.boxes}>
                <Center className={classes.card}>
                    <Box className={classes.header}>
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

                    <Image src={lllibrary} alt="screenshot" />
                </Center>
            </WrapItem>
            <ProjectsOne
                isProjectOneOpen={isProjectOneOpen}
                onProjectOneClose={onProjectOneClose}
            />
            <WrapItem className={classes.boxes}>
                <Center className={classes.card}>
                    <Box className={classes.header}>
                        <Text
                            onClick={onProjectTwoOpen}
                            className={classes.heading}
                        >
                            Portfolio V.1
                        </Text>
                        <Box>
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
                    <Image src={portfolio} alt="screenshot" />
                </Center>
            </WrapItem>
            <ProjectsTwo
                isProjectTwoOpen={isProjectTwoOpen}
                onProjectTwoClose={onProjectTwoClose}
            />
            <WrapItem className={classes.boxes}>
                <Center className={classes.card}>
                    <Box className={classes.header}>
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

                    <Image src={huddle} alt="screenshot" />
                </Center>
            </WrapItem>
            <ProjectsThree
                isProjectThreeOpen={isProjectThreeOpen}
                onProjectThreeClose={onProjectThreeClose}
            />
        </Wrap>
    );
};

export default ProjectsList;
