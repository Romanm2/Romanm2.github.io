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
            <Flex h={16} alignItems={'center'} justifyItems={'space-between'} justify="center" position="static" pos="relative" boxSize="full">
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
    </>);
}
