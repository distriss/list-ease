import React from 'react';
import TaskItem from './TaskItem';
import { ListGroup } from 'react-bootstrap';

export default function TaskList({ 
    filteredTasks,
    togglePriority, 
    moveTask, 
    deleteTask, 
    toggleTaskCompleted}) {
    return (

      <ListGroup>
      {filteredTasks.length === 0 && <ListGroup.Item>No Tasks</ListGroup.Item>}
      {filteredTasks.map((task) => (
        <TaskItem
          task={task} 
          key={task.id}
          {...task}
          togglePriority={togglePriority}
          moveTask={moveTask}
          deleteTask={deleteTask}
          toggleTaskCompleted={toggleTaskCompleted}
        />
      ))}
    </ListGroup>
       
      );
    };