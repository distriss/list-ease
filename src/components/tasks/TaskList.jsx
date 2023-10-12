import React from 'react';
import TaskItem from './TaskItem';
import { sortTaskList } from '../../api/tasks';
import { ListGroup } from 'react-bootstrap';

export default function TaskList({ 
    tasks,
    togglePriority, 
    moveTask, 
    deleteTask, 
    toggleTaskCompleted, 
    category, }) {

    const filteredTasks = tasks.filter(task => task.categoryId === category.id);

    const sortedTasks = sortTaskList(filteredTasks);

    return (

      <ListGroup>
      {tasks === 0 && <ListGroup.Item>No Tasks</ListGroup.Item>}
      {sortedTasks.map((task) => (
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