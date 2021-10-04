import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Tutor = props => {
    const {name, age, education, rating, profile, expertAt, tutionFee} = props.tutor;
    console.log(props);
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={profile} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           <div>
           <p><b>{expertAt}</b></p>
           <p>{education}</p>
           <p><b>${tutionFee}</b> per Hour</p>
           <Rating
            readonly
            initialRating={rating}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            /> <span><b>{rating}/5</b></span>
            <br />
           </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>

    );
};

export default Tutor;