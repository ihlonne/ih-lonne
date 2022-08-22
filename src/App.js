import React from 'react';
import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';

import Navbar from './components/header/Navbar';
import MobileNavbar from './components/header/MobileNavbar';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact';

const App = () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

    return (
        <ChakraProvider>
            {isLargerThan1280 ? <Navbar /> : <MobileNavbar />}
            <Hero />
            <Projects />
            <About />
            <Contact />
        </ChakraProvider>
    );
};

export default App;
