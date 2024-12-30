import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

export function FeatureGrid({ features }) {
  return (
    <Container className="mt-5">
      <Row className="g-4">
        {features.map((item, index) => (
          <Col key={index} xs={6} md={3}>
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                z: 50,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <Card className="h-100 text-center shadow">
                <Card.Body className="d-flex flex-column align-items-center">
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      rotateZ: 5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }}
                  >
                    <item.icon size={48} style={{ color: '#293478', marginBottom: '1rem' }} />
                  </motion.div>
                  <Card.Text className="fw-medium text-dark">
                    {item.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}