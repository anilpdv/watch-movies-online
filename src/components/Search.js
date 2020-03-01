import React, {useState} from 'react';
import {
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Button,
} from 'reactstrap';

export default function Search(props) {
  const [query, setQuery] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    props.searchQuery(query);
     
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col md="auto">
            <FormGroup>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="ni ni-zoom-split-in" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Search"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  type="text"
                />
              </InputGroup>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
