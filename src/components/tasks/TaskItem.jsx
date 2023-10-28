import React from 'react';
import { ListGroup, Form } from 'react-bootstrap';
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
          <div className="d-flex align-items-center justify">          
            <Form.Check 
              className="me-2" 
              aria-label={title} 
              type="checkbox"
              name="toggleCompleted"
              value=""
              checked={completed}
              onChange={handleCheckboxChange}
              />
            <h4 className={`mx-4 ${completed ? 'task-completed' : ''}`}>{title}</h4>
            <span className={`p-2 align-items-start ${starPriority === 'fa-star-priority' ? 'jump-animation' : ''}`}>     
              <FontAwesomeIcon 
                icon={faStar} 
                className={`icon icon-zoom ${starPriority}`}
                onClick={handlePriority}
                />
            </span>
            <span className="ms-auto">              
              <span className="mx-2">
                <FontAwesomeIcon
                  icon={faFilePen}
                  className='icon icon-zoom'
                  // onClick={addNote}
                  style={{cursor: "pointer" }}
                />
              </span>
              <span className="mx-2">
                <FontAwesomeIcon
                  icon={faTrash}
                  className='icon icon-zoom'
                  onClick={() => deleteTask(id)}
                  style={{cursor: "pointer" }}
                />
              </span>
            </span>
          </div>
          {notes && (
          <div className="mx-5">
            <p>{notes}</p>
          </div>
          )}
        </ListGroup.Item>
      );
    }