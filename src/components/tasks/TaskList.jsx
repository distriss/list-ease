import React from 'react';
import TaskItem from './TaskItem';
import { sortTaskList } from '../../api/tasks';
import { ListGroup } from 'react-bootstrap';

export default function TaskList({ 
    tasks,
    toggleTaskPriority, 
    moveTask, 
    deleteTask, 
    toggleTaskCompleted, 
    category, }) {

    const filteredTasks = tasks.filter(task => task.categoryId === category.id);
    const sortedTasks = sortTaskList(filteredTasks);

    return (
      <ListGroup >
      {tasks === 0 && <ListGroup.Item>This Category has no tasks</ListGroup.Item>}
      {sortedTasks.map((task) => (
        <TaskItem
          task={task} 
          key={task.id}
          {...task}
          toggleTaskPriority={toggleTaskPriority}
          moveTask={moveTask}
          deleteTask={deleteTask}
          toggleTaskCompleted={toggleTaskCompleted}
        />
      ))}
    </ListGroup>
       
      );
    };