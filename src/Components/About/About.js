import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import Tutor from '../Tutor/Tutor';

const About = () => {
        const [tutors, setTutors] = useState([]);
      useEffect(()=>{
        fetch('/fakeAllTutors.json')
        .then(res=> res.json())
        .then(data=> setTutors(data.instractors))
      },[])
    // const url = `https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80`;
    return (
<Container>
<img style={{padding:"50px"}} src="/eduSkill-logo.png" alt="" />
        <Row xs={2} md={4} className="g-4">
          {
                tutors.map(tutor => <Tutor key={tutor.id} tutor={tutor}></Tutor>)
            }
        </Row>
        </Container>



    );
};

export default About;