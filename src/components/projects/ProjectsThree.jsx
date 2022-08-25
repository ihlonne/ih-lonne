import React from 'react';
import {
    Image,
    Text,
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
    Badge,
    Heading,
} from '@chakra-ui/react';

import classes from './Projects.module.css';

const Project3 = ({ isProjectThreeOpen, onProjectThreeClose }) => {
    return (
        <Drawer
            placement="left"
            onClose={onProjectThreeClose}
            isOpen={isProjectThreeOpen}
            size="xl"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader fontSize="2rem" fontWeight="bold">
                    Huddle Landing Page
                </DrawerHeader>
                <DrawerBody>
                    <Heading size="md" fontWeight="700">
                        A frontendmentor challenge
                    </Heading>
                    <Link
                        onClick={() =>
                            window.open(
                                'https://ihlonne.github.io/Huddle-landing-page/',
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
                                'https://github.com/ihlonne/Huddle-landing-page',
                                '_blank'
                            )
                        }
                    >
                        Source Code
                    </Link>
                    <br />
                    <Image
                        src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t1.15752-9/294377093_463386358757326_40982390600528032_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=l4uZ35SXPyoAX9mpjfI&_nc_ht=scontent.fbgo1-1.fna&oh=03_AVK9VSaeZM3-KThJ-hAPVw8T5UTfy5Y0kiyJvSqJrMrOEA&oe=63233194"
                        alt="photo"
                        w="90%"
                    />
                    <br />
                    <Stack direction="row">
                        <Badge variant="outline">HTML</Badge>
                        <Badge variant="outline">CSS</Badge>
                        <Badge variant="outline">Flexbox</Badge>
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
                            page.
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
                        onClick={onProjectThreeClose}
                    >
                        Cancel
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};

export default Project3;
