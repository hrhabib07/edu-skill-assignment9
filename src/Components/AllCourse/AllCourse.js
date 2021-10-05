import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Courses from '../Courses/Courses';

const AllCourse = () => {
    const [allCourses, setAllCourses] = useState([]);
    useEffect(()=>{
        // it will load the data from db that is currently in the public folder
        fetch('/fakeAllCourses.json')
        .then(res => res.json())
        .then(data => setAllCourses(data.allCourses))
    },[])
    return (
        <Container>
            <div>
            <h2 style={{padding:"50px"}}>Our All courses</h2>
            </div>
            <Row xs={1} md={3} className="g-3">
            {
                // this code will display all courses in the all courses section
                allCourses.map(course => <Courses 
                    key={course.courseCode}
                    course={course} 
                    ></Courses>)
            }
            </Row>
        </Container>
    );
};

export default AllCourse;