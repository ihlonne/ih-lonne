import React from 'react';
import {
    Image,
    Text,
    Heading,
    Badge,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Stack,
    UnorderedList,
    ListItem,
    Link,
} from '@chakra-ui/react';

import classes from './Projects.module.css';

const Project2 = ({ isProjectTwoOpen, onProjectTwoClose }) => {
    return (
        <Drawer
            placement="left"
            onClose={onProjectTwoClose}
            isOpen={isProjectTwoOpen}
            size="xl"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontSize="2rem" fontWeight="bold">
                    Portfolio V.1
                </DrawerHeader>
                <DrawerBody>
                    <Heading size="md" fontWeight="700">
                        A personal project
                    </Heading>
                    <Link
                        onClick={() =>
                            window.open(
                                'https://ihlonne.github.io/Portfolio/',
                                '_blank'
                            )
                        }
                    >
                        Live Preview
                    </Link>{' '}
                    |{' '}
                    <Link
                        onClick={() =>
                            window.open(
                                'https://github.com/ihlonne/Portfolio',
                                '_blank'
                            )
                        }
                    >
                        Source Code
                    </Link>
                    <br />
                    <Image
                        src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t1.15752-9/293387864_5251453264904382_8497940835897169568_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=hsOWgL7_QUcAX_Hzb6F&_nc_ht=scontent.fbgo1-1.fna&oh=03_AVLkGmr_F6e1AiPaMAgOltbF18QMPTLoQqDWw12uApQcdA&oe=6322F09C"
                        alt="photo"
                        w="100%"
                    />
                    <br />
                    <Stack direction="row">
                        <Badge variant="outline">HTML</Badge>
                        <Badge variant="outline">CSS</Badge>
                        <Badge variant="outline">Flexbox</Badge>
                        <Badge variant="outline">JavaScript</Badge>
                        <Badge variant="outline">Vs Code</Badge>
                    </Stack>
                    <br />
                    <Text fontWeight="bold">Users should be able to:</Text>
                    <UnorderedList>
                        <ListItem>
                            View the optimal layout for the page depending on
                            their device's screen size
                        </ListItem>
                        <ListItem>
                            See hover states for all interactive elements on the
                            page
                        </ListItem>
                        <ListItem>
                            Change the colour scheme from light to dark
                        </ListItem>
                        <ListItem>
                            Send an e-mail from their outlook account
                        </ListItem>
                        <ListItem>
                            Open and close modals with project information
                        </ListItem>
                    </UnorderedList>
                </DrawerBody>
                <DrawerFooter>
                    <Button
                        style={{
                            textTransform: 'uppercase',
                            background: '#011126',
                            color: '#fff',
                        }}
                        mr={3}
                        onClick={onProjectTwoClose}
                    >
                        Cancel
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default Project2;
