import React, { useState } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TaskItem({ 
  task,
  priority, 
  toggleTaskCompleted, 
  toggleTaskPriority,
  deleteTask,  
  }) {

    const  {id, title, notes, completed, categoryId } = task;

    const handleCheckboxChange = () => {
      toggleTaskCompleted(id, categoryId);
    };

    const [starPriority, setStarPriority] = useState(
      priority ? 'fa-star-priority' : ''
    );

    const handlePriority = () => {
      toggleTaskPriority(task.id, !task.priority);
      setStarPriority(!task.priority ? 'fa-star-priority' : '');
    }
    
    return (
        <ListGroup.Item
          as="li"
          className=""
        >
          <div className="d-flex p-2 align-items-start">
            <div className="form-check me-2">
            <Form.Check 
              className="me-2" 
              aria-label={title} 
              type="checkbox"
              value=""
              checked={completed}
              onChange={handleCheckboxChange}
              />
            </div>
            <h5>{title}</h5>
            <div className={`p-2 ms-auto ${starPriority === 'fa-star-priority' ? 'jump-animation' : ''}`}>     
              <FontAwesomeIcon 
                icon={faStar} 
                className={`icon icon-zoom fa-star ${starPriority}`}
                onClick={handlePriority}
                />
            </div>
            <div className="ms-auto">
              <FontAwesomeIcon
                icon={faTrash}
                className='icon icon-zoom fa-trash text-danger'
                onClick={() => deleteTask(id)}
                style={{cursor: "pointer" }}
              />
            </div>
            <p>{notes}</p>
          </div>
        </ListGroup.Item>
      );
    }