import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Courses = props => {
    const {courseName, courseRatting, thumbnail, instructor, student, description} = props.course;
    // console.log(props);
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
            <Card.Title>{courseName}</Card.Title>
            <Card.Text>
              <p>by <b>{instructor}</b></p>
              <Rating
            readonly
            initialRating={courseRatting}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            /> <span><b>{courseRatting}/5</b></span>
            <br />
            <span><i class="fas fa-users user-color"> </i> <b>{ student }</b></span>
            <br />
            <br />
            <span>{description}</span>
            </Card.Text>
           
          </Card.Body>
          
        </Card>
      </Col>
    );
};

export default Courses;