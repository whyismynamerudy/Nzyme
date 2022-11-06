import React from 'react';
import {Container, Row, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='Footer'>
        <Container fuild className="L_Bottom">
            <p>Descriptions</p>
            <hr className="line"/>
            <h1 className="ContactTitle">CONTACT</h1>
            <Row className="FooterButtons">
                <Button className="FooterButton col-4" fullwidth="true" 
                    onClick={() =>(window.location.href = 'https://www.facebook.com')}>
                    <img
                        src="001Facebook.svg"
                        className="Icons"
                        alt="facebook-icon"
                    />
                </Button>
                <Button className="FooterButton col-4" fullwidth="true" 
                    onClick={() =>(window.location.href = 'https://www.instagram.com/')}>
                    <img
                        src="002Instgram.svg"
                        className="Icons"
                        alt="ins-icon"
                    />
                </Button>
                <Button className="FooterButton col-4" fullwidth="true" 
                onClick={() =>(window.location.href = '#')}> 
                    <img
                        src="003Email.svg"
                        className="Icons"
                        alt="email-icon"
                    />
                    </Button>
            </Row>

        </Container>
    </div>
  );
}

export default Footer;
