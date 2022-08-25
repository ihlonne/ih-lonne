import React, { useState } from 'react';
import {
    Input,
    Button,
    Text,
    Heading,
    Box,
    Stack,
    Textarea,
    Alert,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';
import { send } from 'emailjs-com';

import classes from './Contact.module.css';

const ContactForm = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send('service_y9wdeas', 'template_jhtyaqk', toSend, '0CRfuVNyfkmFWHhj_')
            .then((response) => {
                if (response.data === '200') {
                    <Alert status="success" variant="left-accent">
                        <AlertIcon />
                        Your message has been sent!
                    </Alert>;
                }
            })
            .catch((err) => {
                <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>Your message was not sent.</AlertTitle> Please
                    try again.
                </Alert>;
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <Box className={classes.container} id="contact">
            <Box className={classes['container-content']}>
                <Box className={classes.box}>
                    <form onSubmit={onSubmit}>
                        <Heading size="xl" p="0 0 1rem 0">
                            Contact me
                        </Heading>
                        <Text>
                            I typically respond within two (2) business days.
                        </Text>
                        <Stack className={classes.stack}>
                            <Input
                                placeholder="Name"
                                name="from_name"
                                value={toSend.from_name}
                                onChange={handleChange}
                                size="lg"
                                className={classes['form-boxes']}
                                type="text"
                            />
                            <Input
                                placeholder="Email"
                                name="reply_to"
                                value={toSend.reply_to}
                                onChange={handleChange}
                                size="lg"
                                className={classes['form-boxes']}
                                type="email"
                            />
                            <Textarea
                                placeholder="Message"
                                name="message"
                                value={toSend.message}
                                onChange={handleChange}
                                size="lg"
                                className={classes['form-boxes']}
                                type="text"
                            />
                            <Button
                                type="submit"
                                mt="1rem"
                                style={{
                                    textTransform: 'uppercase',
                                    background: '#BE9981',
                                    color: '#fff',
                                    transition: '2s',
                                }}
                                _hover={{
                                    transition: '2s',
                                    background: '#934b2d',
                                }}
                            >
                                Send
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactForm;
