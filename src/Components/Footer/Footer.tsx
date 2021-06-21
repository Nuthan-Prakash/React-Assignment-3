import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <Navbar bg="dark" expand="lg" style={{marginTop:'86vh'}}>
        <Navbar.Brand href="#" style={{ color: 'white' }} className="mx-auto">Copyrights@2021. All rights reserved</Navbar.Brand> 
    </Navbar>
    )
}

