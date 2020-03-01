import React from 'react';
import {Row, Col, Button} from 'reactstrap';

export default function Movie(props) {
  const onClick = () => {
    props.getmovie(props.movie.imdbID);
  };
  return (
    <div className="mt-4">
      <Row>
        <Col>
          <h5>{props.movie.Title}</h5>
          <img src={props.movie.Poster} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color="default" type="button" onClick={onClick}>
            watch
          </Button>
        </Col>
      </Row>
    </div>
  );
}
