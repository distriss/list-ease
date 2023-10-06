import React from 'react';
import TaskItem from './TaskItem';
import { ListGroup } from 'react-bootstrap';

export default function TaskList({ 
    filteredTasks,
    togglePriority, 
    moveTask, 
    deleteTask, 
    toggleCompleted}) {
    return (

    <ListGroup>
      {filteredTasks.length === 0 && "No Tasks"}
      {filteredTasks.map((task) => (
        <ListGroup.Item key={task.id}>
          {task.title}
          <TaskItem
            {...task}
            key={task.id}
            togglePriority={togglePriority}
            moveTask={moveTask}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
       
      );
    };