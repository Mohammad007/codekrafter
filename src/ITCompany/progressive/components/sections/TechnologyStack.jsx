import React from 'react';
import { Code2, Database, Server, Smartphone, Globe, Shield, Cpu, Cloud, Wifi, Zap, Lock, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FadeInView } from '../animations/FadeInView';

const technologies = [
  { icon: Code2, name: 'Service Workers', category: 'Core Technology' },
  { icon: Wifi, name: 'Offline First', category: 'Functionality' },
  { icon: Lock, name: 'HTTPS', category: 'Security' },
  { icon: Smartphone, name: 'Responsive Design', category: 'UI/UX' },
  { icon: RefreshCw, name: 'Background Sync', category: 'Features' },
  { icon: Shield, name: 'Web App Manifest', category: 'Configuration' },
  { icon: Zap, name: 'Push Notifications', category: 'Engagement' },
  { icon: Cloud, name: 'Cache API', category: 'Storage' }
];

export function TechnologyStack() {
  return (
    <Container className="py-5">
      <FadeInView>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="h2 fw-bold mb-3" style={{ color: '#293478' }}>Progressive App Technologies</h2>
            <p className="text-dark">Modern cross-platform frameworks and tools for progressive mobile development</p>
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