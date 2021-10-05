import React from 'react';
import { Button, Container, FormControl, InputGroup, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
// this component will show main header of our pages
const Header = () => {
    return (
        <div className='header-container'>
            <Navbar variant="dark">
            <Container className="nav-container">
                <Link to="/home">
                 <img
                    alt=""
                    src="/eduSkill-logo.png"
                    width="150"
                    height="50"
                    className="d-inline-block align-top"
                />
                </Link>
      
            <Link to="/home">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/tutors">Tutors</Link>
            <Link to="/about">About Us</Link>
    
    </Container>
  </Navbar>
  <Container>
      <InputGroup className="my-3">
        <FormControl
            placeholder="Search your course name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
            Search
        </Button>
    </InputGroup>
    </Container>
    </div>
    );
};

export default Header;