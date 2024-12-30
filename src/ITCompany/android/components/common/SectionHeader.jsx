import React from 'react';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

export function SectionHeader({ title, description, type = "default" }) {
  return (
    <Container className="text-center mb-5" style={{ width: "100%"}}>
      <motion.h1
        className="display-4 fw-bold mb-4" 
        style={{color: '#293478'}}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        {title}
      </motion.h1>
      {type === "career" ? (
      <motion.p
        className="lead text-dark text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: "14px",
          fontWeight: "500px",
        }}
      >
          {description}
        </motion.p>
      ) : (
        <motion.p
          className="lead text-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </Container>
  );
}