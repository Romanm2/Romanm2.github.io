import * as React from 'react'

import {
    Flex,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    Container
} from '@chakra-ui/react'

import { Link } from 'react-router-dom';

export default function NavBar() {
    return (<>
        <Container width={'100vw'} centerContent>
            <Flex h={16} alignItems={'center'} justifyItems={'space-between'}>
                <Breadcrumb separator='-' >
                    <BreadcrumbItem isCurrentPage>
                        <Link to="/">
                            <Button colorScheme="blue">Home</Button>
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <Link to="/about">
                            <Button colorScheme="blue">About</Button>
                        </Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <Link to="/contact">
                            <Button colorScheme="blue">Contact</Button>
                        </Link>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Flex>
        </ Container>
    </>);
}
