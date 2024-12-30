import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export function SectionHeader({ title, description }) {
  return (
    <Container className="mb-5">
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <h1 
            className="display-4 fw-bold mb-4"
            style={{ color: '#293478' }}
          >
            {title}
          </h1>
          <p className="lead text-dark">
            {description}
          </p>
        </Col>
      </Row>
    </Container>
  );
}