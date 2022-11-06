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
                                variant="dark"
                                title={' Drop'}
                                className="NavDD"
                            >
                                <Dropdown.Item eventKey="1" href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2" href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" href="#/action-3">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4" href="#/action-4">Separated link</Dropdown.Item>
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