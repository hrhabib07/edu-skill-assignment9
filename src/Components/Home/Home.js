import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import Course from '../Course/Course';
// this will show the default or home page of our ui
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('/fakeCourses.json')
        .then(res => res.json())
        .then(data => setCourses(data.featuresCourses))
    },[])
    return (
        <div>
            <h2 style={{padding:"50px"}}> <NavLink style={{textDecoration:"none",color:"blueviolet"}} to="./courses">Our courses</NavLink> </h2>
            <Container>
            <Row xs={1} md={4} className="g-3">
            {
                courses.map(course => <Course 
                    key={course.courseCode}
                    course={course} 
                    ></Course>)
            }
            </Row>
            
            </Container>
        </div>
    );
};

export default Home;