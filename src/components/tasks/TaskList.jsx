import React from 'react';
import TaskItem from './TaskItem';
import { ListGroup } from 'react-bootstrap';

export default function TaskList({ 
    filteredTasks,
    togglePriority, 
    moveTask, 
    deleteTask, 
    toggleCompleted}) {
    // const sortByPriorityAndCreationTime = (taskA, taskB) => {
    //     if (taskA.priority && !taskB.priority) {
    //         return -1;
    //     }
    //     if (!taskA.priority && taskB.priority) {
    //         return 1;
    //     }

    //     return taskA.createdAt - taskB.createdAt;
    // };

    // const sortedTasks = [...tasks].sort(sortByPriorityAndCreationTime);

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