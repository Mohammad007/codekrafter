import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, Button, ListGroup } from 'react-bootstrap';

export function ServiceCard({ title, description, features, image }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-100 shadow">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Card.Img 
            variant="top" 
            src={image} 
            alt={title}
            style={{ height: '256px', objectFit: 'cover' }}
          />
        </motion.div>
        <Card.Body>
          <Card.Title 
            className="h4 mb-3"
            style={{ color: '#293478' }}
          >
            {title}
          </Card.Title>
          <Card.Text className="text-dark mb-4">
            {description}
          </Card.Text>
          <ListGroup variant="flush" className="mb-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ListGroup.Item className="border-0 px-0 py-2 d-flex align-items-center">
                  <ArrowRight className="text-primary me-2" size={20} />
                  {feature}
                </ListGroup.Item>
              </motion.div>
            ))}
          </ListGroup>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="primary"
              style={{ backgroundColor: '#293478', borderColor: '#293478' }}
            >
              Learn More
            </Button>
          </motion.div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}