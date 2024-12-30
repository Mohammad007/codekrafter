import React from 'react';
import { Code2, Database, Server, Smartphone, Globe, Shield, Cpu, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FadeInView } from '../animations/FadeInView';

const technologies = [
  { icon: Code2, name: 'React Native', category: 'Frontend' },
  { icon: Database, name: 'SQLite', category: 'Database' },
  { icon: Server, name: 'Node.js', category: 'Backend' },
  { icon: Smartphone, name: 'Kotlin', category: 'Mobile' },
  { icon: Globe, name: 'REST APIs', category: 'Integration' },
  { icon: Shield, name: 'OAuth 2.0', category: 'Security' },
  { icon: Cpu, name: 'Swift', category: 'iOS' },
  { icon: Cloud, name: 'AWS', category: 'Cloud' }
];

export function TechnologyStack() {
  return (
    <Container className="py-5">
      <FadeInView>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="h2 fw-bold mb-3" style={{ color: '#293478' }}>Our Technology Stack</h2>
            <p className="text-dark">Cutting-edge technologies we use to build amazing applications</p>
          </Col>
        </Row>
      </FadeInView>
      
      <Row className="g-4">
        {technologies.map((tech, index) => (
          <Col key={index} xs={6} md={3}>
            <FadeInView delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="h-100 text-center border-0 shadow-sm">
                  <Card.Body>
                    <tech.icon className="mb-3" size={48} style={{ color: '#293478' }} />
                    <Card.Title className="fw-medium" style={{ color: '#293478' }}>
                      {tech.name}
                    </Card.Title>
                    <Card.Text className="text-dark small">
                      {tech.category}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </FadeInView>
          </Col>
        ))}
      </Row>
    </Container>
  );
}