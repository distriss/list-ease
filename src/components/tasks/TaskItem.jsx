import React, { useState } from 'react';
import { ListGroup, Form } from 'react-bootstrap';
import * as TasksAPI from '../../api/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TaskItem({ 
  task, toggleTaskCompleted}) {
    const [tasks, setTasks] = useState([]);

    const  {id, title, notes, completed, categoryId } = task;

    const handleCheckboxChange = () => {
      toggleTaskCompleted(id, categoryId);
    };
    
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
            <div className="ms-auto">
              <FontAwesomeIcon
                icon={faTrash}
                className='icon fa-trash text-danger'
                onClick={() => deleteTask(id)}
                style={{cursor: "pointer" }}
              />
            </div>
            <p>{notes}</p>
          </div>
        </ListGroup.Item>
      );
    }