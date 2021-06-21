import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Dashboard } from '../Dashboard/Dashboard';
import './Header.css'

export const Header: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const [isClicked, setIsClicked] = useState<boolean>(false);
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <span><Navbar.Brand href="#" style={{ color: 'white' }} className="text1">Owner/</Navbar.Brand>
                    <Navbar.Brand href="#" style={{ color: 'white' }} className="text2">Repo</Navbar.Brand>
                </span>

                <Form className="d-flex" style={{ marginLeft: '31vw', width: '40vw' }}>
                    <FormControl
                        type="search"
                        placeholder="Search.."
                        className="mr-2"
                        aria-label="Search"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        
                    />
                    {/* <Button variant="outline-success" onClick={(e) => setIsClicked(true)}>Search</Button> */}
                </Form>
            </Navbar> 
            {
                searchText.trim()!==""?(<Dashboard search={searchText}></Dashboard>):(<Dashboard search={""}></Dashboard>)
            }
           
        </div>

    )
}



