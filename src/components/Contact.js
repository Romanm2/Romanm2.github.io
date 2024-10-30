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
                minHeight="50vh" // Sets full viewport height
                > 
            <Text>
                You can contact me through email
            </Text>
        </Container>
    </>
}

export default Contact;