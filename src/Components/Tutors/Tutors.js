import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Tutor from '../Tutor/Tutor';
// the tutors will displayed on our ui from this page
const Tutors = () => {
    const [tutors, setTutors] = useState([]);
  useEffect(()=>{
    fetch('/fakeAllTutors.json')
    .then(res=> res.json())
    .then(data=> setTutors(data.instractors))
  },[])
    return (
        <Container>
           <h2 style={{padding:"50px"}}> <NavLink style={{textDecoration:"none",color:"blueviolet"}} to="./tutors">Our Tutors</NavLink> </h2>
        <Row xs={1} md={4} className="g-4">
          {
                tutors.map(tutor => <Tutor key={tutor.id} tutor={tutor}></Tutor>)
            }
        </Row>
        </Container>
    );
};

export default Tutors;