import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default () => {
    return (
        <Navbar variant='dark' bg='primary'>
            <Nav className='mr-auto'>
                <Nav.Link variant='dark'>Home</Nav.Link>
                <Nav.Link variant='light'>Log in</Nav.Link>
            </Nav>
        </Navbar>
    )
}