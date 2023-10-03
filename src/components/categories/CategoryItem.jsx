import React from 'react';
import { Container, Card, Col, Row, Stack, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons'


export default function CategoryItem({ 
  priority, 
  id, 
  title, 
  toggleCategory,
  deleteCategory }) {
  return (
    <Card>
      <Stack direction="horizontal" gap={3}>
      <Card.Title className="p-2">{title}</Card.Title>
      <Container className="d-flex">
      <Button  
          variant="primary"
          className={`button-togglepriority ${priority ? '' : 'active'} p-2 ms-auto flex-shrink-0`}
          onClick={() => toggleCategory(id, !priority)} >
            {priority ? (
            <>
              <FontAwesomeIcon icon={faStar} color="yellow"/>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faStar} color="white" />
            </>
          )}
        </Button>
        </Container>
        <Container className="d-flex">
        <Button
            variant="danger"
            className="button-delete-item p-2 flex-shrink-0"
            onClick={() => deleteCategory(id)}
          >
            <FontAwesomeIcon icon={faTrash} color="white"/>
        </Button>
        </Container>
    </Stack>    
    </Card>
  );
}