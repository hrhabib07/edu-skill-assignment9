import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Tutor from '../Tutor/Tutor';

const Tutors = () => {
    const [tutors, setTutors] = useState([]);
  useEffect(()=>{
    fetch('/fakeAllTutors.json')
    .then(res=> res.json())
    .then(data=> setTutors(data.instractors))
  },[])
    return (
        <Container>
           <div><h2 style={{padding:"50px"}}>Our Tutors</h2></div>
        <Row xs={1} md={4} className="g-4">
          {
                tutors.map(tutor => <Tutor key={tutor.id} tutor={tutor}></Tutor>)
            }
        </Row>
        </Container>
    );
};

export default Tutors;