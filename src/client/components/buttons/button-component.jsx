import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FormattedMessage } from 'react-intl';

const ButtonComponent = (props) => (
  <Form.Group as={Row} controlId={props.controlId}>
    <Col>
      <Button type="submit" variant="info" className="text-white">
        <FormattedMessage id={props.label} />
      </Button>
    </Col>
  </Form.Group>
);

export default ButtonComponent;