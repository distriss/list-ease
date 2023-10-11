import React from 'react';
import TaskItem from './TaskItem';
import { ListGroup } from 'react-bootstrap';

export default function TaskList({ 
    tasks,
    togglePriority, 
    moveTask, 
    deleteTask, 
    toggleTaskCompleted}) {
      
      //   const sortByPriorityAndCreationTime = (taskA, taskB) => {
//     if (taskA.priority && !taskB.priority) {
//         return -1;
//     }
//     if (!taskA.priority && taskB.priority) {
//         return 1;
//     }
//      return taskA.createdAt - taskB.createdAt;
// };

// const sortedTasks = [...tasks].sort(sortByPriorityAndCreationTime);


    return (

      <ListGroup>
      {tasks === 0 && <ListGroup.Item>No Tasks</ListGroup.Item>}
      {tasks.map((task) => (
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