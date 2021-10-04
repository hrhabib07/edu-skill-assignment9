import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import Tutor from '../Tutor/Tutor';

const About = () => {
        const [tutors, setTutors] = useState([]);
      useEffect(()=>{
        fetch('/fakeAllTutors.json')
        .then(res=> res.json())
        .then(data=> setTutors(data.instractors))
      },[])
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