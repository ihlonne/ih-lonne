import React, { useState } from 'react';
import {
    Input,
    Button,
    Icon,
    Heading,
    Box,
    Stack,
    Textarea,
    Alert,
    AlertIcon,
    AlertTitle,
} from '@chakra-ui/react';
import { send } from 'emailjs-com';
import { ImLinkedin2, ImTwitter, ImGithub } from 'react-icons/im';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

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
                <form onSubmit={onSubmit}>
                    <Heading
                        size="2xl"
                        fontFamily="rough-love, sans-serif"
                        p="0 0 2rem 0"
                    >
                        Contact me
                    </Heading>
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
                    </Stack>
                    <Button
                        type="submit"
                        mt="1rem"
                        style={{
                            textTransform: 'uppercase',
                            background: '#011126',
                            color: '#fff',
                            transition: '2s',
                        }}
                        _hover={{ transition: '2s', background: '#8BC6EC' }}
                    >
                        Send
                    </Button>
                    <Box className={classes.socials}>
                        <Icon
                            mr="1rem"
                            as={ImLinkedin2}
                            transition="2s"
                            _hover={{ color: '#8BC6EC', transition: '2s' }}
                            onClick={() =>
                                window.open(
                                    'https://www.linkedin.com/in/ingelinnhelenelonne/',
                                    '_blank'
                                )
                            }
                        />{' '}
                        <Icon
                            mr="1rem"
                            as={ImTwitter}
                            transition="2s"
                            _hover={{ color: '#8BC6EC', transition: '2s' }}
                            onClick={() =>
                                window.open(
                                    'https://twitter.com/ih_lonne',
                                    '_blank'
                                )
                            }
                        />{' '}
                        <Icon
                            mr="1rem"
                            as={ImGithub}
                            transition="2s"
                            _hover={{ color: '#8BC6EC', transition: '2s' }}
                            onClick={() =>
                                window.open(
                                    'https://github.com/ihlonne',
                                    '_blank'
                                )
                            }
                        />
                    </Box>
                </form>
            </Box>
            <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
                <Icon
                    as={BsFillArrowUpCircleFill}
                    mt="5rem"
                    style={{
                        textTransform: 'uppercase',
                        background: 'transparent',
                        color: '#011126',
                        transition: '2s',
                        fontSize: '2rem',
                    }}
                    className={classes['button-to-top']}
                >
                    Projects
                </Icon>
            </Link>
        </Box>
    );
};

export default ContactForm;
