import React from 'react';
import {  Card, Col} from 'react-bootstrap';
import Rating from 'react-rating';
import './Course.css'
// this component will return the single card when it will called
const Course = props => {
    const {courseName, courseRatting, thumbnail, instructor, student} = props.course;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title>{courseName}</Card.Title>
            <Card.Text>
             by <b>{instructor}</b>
            </Card.Text>
            <Rating
            readonly
            initialRating={courseRatting}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            /> <span><b>{courseRatting}/5</b></span>
          </Card.Body>
          <span><i className="fas fa-users user-color"> </i> <b>{ student }</b></span>
        </Card>
      </Col>
    );
};

export default Course;