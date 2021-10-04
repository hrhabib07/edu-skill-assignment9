import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('/fakeCourses.json')
        .then(res => res.json())
        .then(data => setCourses(data.featuresCourses))
    },[])
    return (
        <div>
            <div><h2 style={{padding:"50px"}}>Our courses</h2></div>
            <Container>
            <Row xs={1} md={5} className="g-3">
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