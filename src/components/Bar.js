import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Bar = () => {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
            </Navbar>
        </Container>
    )
}

export default Bar;
