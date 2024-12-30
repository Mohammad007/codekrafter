import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FadeInView } from '../animations/FadeInView';

export function TechnologyStack({ technologies, title, description }) {
  return (
    <Container fluid className="py-5 bg-white">
      <Container>
        <FadeInView>
          <div className="text-center mb-5">
            <motion.h2 
              className="display-5 fw-bold mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ color: '#293478' }}
            >
              {title}
            </motion.h2>
            <motion.p 
              className="lead text-dark"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
        </FadeInView>
        <Row className="g-4">
          {technologies.map((tech, index) => (
            <Col key={index} xs={6} md={3}>
              <FadeInView delay={index * 0.1}>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <Card className="h-100 border-0 text-center p-4" style={{
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                    transition: "box-shadow 0.3s ease"
                  }}>
                    <Card.Body>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                      >
                        {tech?.url ? <img src={tech?.url} alt={tech?.name} className="mb-3" style={{ width: '48px', height: '48px' }} /> : <tech.icon className="mb-3" size={48} style={{ color: '#293478' }} />}
                      </motion.div>
                      <Card.Title className="fw-bold mb-2" style={{ color: '#293478' }}>
                        {tech?.name}
                      </Card.Title>
                      <Card.Text className="text-dark">
                        {tech?.category}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </FadeInView>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}