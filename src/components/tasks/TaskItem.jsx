import React from 'react';
import { ListGroup, Form, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash, faFilePen } from '@fortawesome/free-solid-svg-icons';

export default function TaskItem({ 
  task,
  toggleTaskCompleted, 
  toggleTaskPriority,
  deleteTask
  }) {

    const  {id, title, notes, completed, categoryId } = task;

    const starPriority = task.priority ? 'fa-star-priority' : '';

    const handlePriority = () => {
      toggleTaskPriority(task.id, !task.priority, task.id);
    };
   
    const handleCheckboxChange = () => {
      toggleTaskCompleted(id, categoryId);
    };
    
    return (
        <ListGroup.Item
          as="li"
          className='glass-container listgroup-item'   
        >    
        <Container className="d-flex flex-wrap align-items-center justify-content-between"> 
          <div className="d-flex flex-wrap align-items-center" style={{ flex: '1' }}>   
            <Form.Check 
              className="me-2" 
              aria-label={title} 
              type="checkbox"
              name="toggleCompleted"
              value=""
              checked={completed}
              onChange={handleCheckboxChange}
              />
            <h4 className={`m-2 p-2 align-item-start text-wrap text-break ${completed ? 'task-completed' : ''}`}>{title}</h4>
            <span className={`p-2 ${starPriority === 'fa-star-priority' ? 'jump-animation' : ''}`}>     
              <FontAwesomeIcon 
                icon={faStar} 
                className={`icon icon-zoom ${starPriority}`}
                onClick={handlePriority}
                />
            </span>   
          </div> 
          <div class="d-flex flex-column align-items-center"  style={{ flex: '0 0 auto' }}>                      
            <span className="m-1">
              <FontAwesomeIcon
                icon={faFilePen}
                className='icon icon-zoom'
                // onClick={addNote}
                style={{cursor: "pointer" }}
              />
            </span>
            <span className="m-1">
              <FontAwesomeIcon
                icon={faTrash}
                className='icon icon-zoom'
                onClick={() => deleteTask(id)}
                style={{cursor: "pointer" }}
              />
            </span>
            </div>
        </Container>
        {notes && (
        <div className="mx-5">
          <p>{notes}</p>
        </div>
        )}
      </ListGroup.Item>
    );
  }