import React from 'react';
import {Container, Navbar, Dropdown, DropdownButton} from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

function Nav() {
    return(
        <div className="Nav">
            <Navbar sticky="top" expand="lg" className='general'>
                <Container fluid>
                    <div className='L_TOP'>
                        <div className="L_TOP_L">
                            <Navbar.Brand href="#">
                            <img
                                src="logo.png"
                                className="NavLogo"
                                alt="logo"
                            />
                            </Navbar.Brand>
                        </div>
                        
                        <div className="L_TOP_M">
                            <Navbar.Brand href="#" className="NavName">Name</Navbar.Brand>
                        </div>

                        <div className="L_TOP_R">
                            {['start'].map((direction) => (
                            <DropdownButton
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                                variant="secondary"
                                title={' Drop'}
                                className="NavDD"
                            >
                                <Dropdown.Item eventKey="1" href="#/action-1">Home</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="2" href="#/action-2">Profile</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="3" href="#/action-3">Courses</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4" href="#/action-4">Active Recall</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="5" href="#/action-5">About</Dropdown.Item>
                            </DropdownButton>
                            ))}
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}



export default Nav;