import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TaskItem({ 
  task,
  toggleTaskCompleted, 
  deleteTask}) {

    const  {id, title, completed } = task;

    const handleToggle = () => {
      toggleTaskCompleted(id, !completed);
    };

    return (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                checked={completed}
                onChange={() => toggleTaskCompleted(id, !completed)}
              />
              <label className="form-check-label">{title}</label>
            </div>
            <FontAwesomeIcon
              icon={faTrash}
              className='text-danger'
              onClick={() => deleteTask(id)}
              style={{cursor: "pointer" }}
            />
          </div>
        </ListGroup.Item>
      );
    }