import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';

export function ProjectCard({ title, description, image, technologies }) {
  return (
    <Card className="h-100 shadow">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
      <Card.Img 
        variant="top" 
        src={image} 
        alt={title}
        style={{ height: '192px', objectFit: 'cover' }}
      />
      </motion.div>
      <Card.Body className="d-flex flex-column">
        <Card.Title 
          className="h5 mb-2"
          style={{ color: '#293478' }}
        >
          {title}
        </Card.Title>
        <Card.Text className="text-dark mb-4">
          {description}
        </Card.Text>
        <div className="d-flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              bg="#293478" 
              className="text-white"
              style={{ backgroundColor: '#293478' }}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-auto"
          >
        <Button 
          className="text-white p-1 d-flex align-items-center"
          style={{ backgroundColor: '#293478', borderColor: '#293478', width: '45%' }}
        >
          View Project <ExternalLink className="ms-1" size={16} />
        </Button>
        </motion.div>
      </Card.Body>
    </Card>
  );
}