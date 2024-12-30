import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from '../cards/ProjectCard';

const projects = [
  {
    title: 'E-Commerce Progressive App',
    description: 'A full-featured shopping app with real-time inventory and secure payments',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Health & Fitness Progressive App', 
    description: 'iOS app for tracking workouts, nutrition, and health metrics',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Swift', 'HealthKit', 'CoreML', 'CloudKit']
  },
  {
    title: 'Smart Home Progressive App',
    description: 'IoT control center app for managing smart home devices',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Kotlin', 'MQTT', 'Realm', 'Bluetooth LE']
  },
  {
    title: 'Food Delivery Progressive App',
    description: 'Cross-platform delivery app with real-time tracking',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'Stripe']
  }
];

export function RecentProjects() {
  return (
    <Container className="py-5">
      <Row className="text-center mb-5">
        <Col>
          <h2 className="h2 fw-bold mb-3" style={{ color: '#293478' }}>Recent Projects</h2>
          <p className="text-dark">Showcasing our latest mobile application developments</p>
        </Col>
      </Row>
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} xs={12} md={6} lg={3}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}