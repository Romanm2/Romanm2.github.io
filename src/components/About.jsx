import {
    Heading,
    Container,
    Text,
} from '@chakra-ui/react'

import * as React from 'react'

import NavBar from './NavBar'

const About = () => {
    return <>
        <NavBar />
        <Container 
                maxW="container.md" // Set max width for Container
                centerContent // Centers content horizontally
                display="flex" // Enables flex to align items
                justifyContent="center" // Centers content horizontally
                alignItems="center" // Centers content vertically
                height="100vh"
                >  
            <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}>
                About Me <br />
                <Text fontSize={20} color={'green.400'}>
                    This should really say more...
                </Text>
            </Heading>
        </Container>
    </>
}

export default About;