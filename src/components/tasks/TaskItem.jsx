import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export default function TaskItem({ 
    priority, 
    id, 
    title, 
    toggleTask, 
    deleteTask}) {
    const handleToggle = () => {
        toggleTask(id, !priority);
    };

    return (
        <Form.Row className="align-items-center">
          <Col xs="auto">
            <Form.Check
              type="checkbox"
              id={`taskCheckbox-${id}`}
              label={title}
              checked={priority}
              onChange={handleToggle}
            />
          </Col>
          <Col xs="auto">
            <Button variant="danger" onClick={() => deleteTask(id)}>
              Delete
            </Button>
          </Col>
        </Form.Row>
      );
    }