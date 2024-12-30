import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export function FeatureGrid({ features }) {
  return (
    <Container className="mt-5">
      <Row className="g-4">
        {features.map((item, index) => (
          <Col key={index} xs={6} md={3}>
            <Card className="h-100 text-center shadow">
              <Card.Body className="d-flex flex-column align-items-center">
                <item.icon size={48} style={{ color: '#293478', marginBottom: '1rem' }} />
                <Card.Text className="fw-medium text-dark">
                  {item.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}