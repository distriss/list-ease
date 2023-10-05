import React from 'react';
import { Container, Card, Col, Row, Stack, ButtonGroup, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEllipsisV } from '@fortawesome/free-solid-svg-icons'


export default function CategoryItem({ 
  priority, 
  id, 
  title, 
  toggleCategory,
  deleteCategory }) {

    const menuBtn = <FontAwesomeIcon icon={faEllipsisV} color="white"/>

  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2"><h3 className="p-2">{title}</h3></div>
      <div className="p-2 ms-auto">
        <FontAwesomeIcon icon={faStar} className="icon icon-zoom faStar"/>
      </div>
      <DropdownButton
              as={ButtonGroup}
              key="end"
              id={`dropdown-button-drop-end`}
              drop="end"
              variant="primary"
              title={menuBtn}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
    </Stack>
    // <Card>
    //   <Stack direction="horizontal" gap={3}>
    //   <Card.Title className="p-2">{title}</Card.Title>
    //   <Button
    //         variant="primary"
    //         className="button-delete-item p-2 flex-shrink-0"
    //         onClick={() => deleteCategory(id)}
    //       >
    //         <FontAwesomeIcon icon={faEllipsisV} color="white"/>
    //     </Button>
      
    //   <ButtonGroup>
    //     <Button  
    //         variant="primary"
    //         className={`button-togglepriority ${priority ? '' : 'active'} p-2 ms-auto flex-shrink-0`}
    //         onClick={() => toggleCategory(id, !priority)} >
    //           {priority ? (
    //           <>
    //             <FontAwesomeIcon icon={faStar} className="icon faStar"/>
    //           </>
    //         ) : (
    //           <>
    //             <FontAwesomeIcon icon={faStar} className="icon faStar priority" />
    //           </>
    //         )}
    //     </Button>
    //     <Button
    //         variant="danger"
    //         className="button-delete-item p-2 flex-shrink-0"
    //         onClick={() => deleteCategory(id)}
    //       >
    //         <FontAwesomeIcon icon={faEllipsisV} color="white"/>
    //     </Button>
    //     </ButtonGroup>
        
    // </Stack>    
    // </Card>
  );
}