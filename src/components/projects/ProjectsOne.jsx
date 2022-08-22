import React from 'react';
import {
    Image,
    Text,
    Link,
    Badge,
    Stack,
    Heading,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    UnorderedList,
    ListItem,
} from '@chakra-ui/react';

import classes from './Projects.module.css';

const Project1 = ({ isProjectOneOpen, onProjectOneClose }) => {
    return (
        <Drawer
            placement="left"
            onClose={onProjectOneClose}
            isOpen={isProjectOneOpen}
            size="xl"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader
                    padding="2rem "
                    fontSize="2rem"
                    fontFamily="rough-love, sans-serif"
                >
                    Book Finder App
                </DrawerHeader>
                <DrawerBody mt="-2rem">
                    <Heading size="md" fontWeight="700">
                        A personal project
                    </Heading>
                    <Link
                        onClick={() =>
                            window.open(
                                'https://linnslittlelibrary.netlify.app/',
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
                                'https://github.com/ihlonne/linnslittlelibrary',
                                '_blank'
                            )
                        }
                    >
                        Source Code
                    </Link>
                    <br />
                    <Image
                        src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t1.15752-9/299801772_466992195009677_592834313367039002_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=aotrWn3rSScAX_38nQW&_nc_ht=scontent.fbgo1-1.fna&oh=03_AVK-U2hxGNob_9AxUUifliDk-2ixNy_XE-iBGJ_b9zxNmA&oe=6323451B"
                        alt="photo"
                        w="90%"
                    />
                    <br />
                    <Stack direction="row">
                        <Badge variant="outline">React</Badge>
                        <Badge variant="outline">CSS</Badge>
                        <Badge variant="outline">Material UI</Badge>
                        <Badge variant="outline">Google Books API</Badge>
                        <Badge variant="outline">
                            Google Firbase Realtime Database
                        </Badge>
                    </Stack>
                    <br />
                    <Text fontWeight="bold">Users should be able to:</Text>
                    <UnorderedList>
                        <ListItem>
                            View the optimal layout for the app on Desktop.
                        </ListItem>
                        <ListItem>
                            See hover states for interactive elements.
                        </ListItem>
                        <ListItem>
                            Search for books by title or author.
                        </ListItem>
                        <ListItem>
                            Generate a new quote by making a new search or
                            refreshing the page.
                        </ListItem>
                        <ListItem>Click available links.</ListItem>
                        <ListItem>
                            See more results by using the pagination.
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
                        onClick={onProjectOneClose}
                    >
                        Cancel
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default Project1;
