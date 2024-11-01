import * as React from 'react'
import {
    Container,
    Text,
} from '@chakra-ui/react'

import NavBar from './NavBar'

const Contact = () => {
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
            <Text fontSize={20} color={'green.400'}>
                You can contact me through email here: roman.m.mendoza1997@gmail.com
            </Text>
        </Container>
    </>
}

export default Contact;