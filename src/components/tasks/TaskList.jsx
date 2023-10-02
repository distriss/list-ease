import { TaskItem } from "./TaskItem"
import { Tab } from 'react-bootstrap';

export function TaskList({ tasks, togglePriority, moveTask, deleteTask, toggleCompleted}) {
    const sortByPriorityAndCreationTime = (taskA, taskB) => {
        if (taskA.priority && !taskB.priority) {
            return -1;
        }
        if (!taskA.priority && taskB.priority) {
            return 1;
        }

        return taskA.createdAt - taskB.createdAt;
    };

    const sortedTasks = [...tasks].sort(sortByPriorityAndCreationTime);

    return (

        <Tab.Content>
            {sortedTasks.map((task, index) => (
                <Tab.Pane key={task.id} eventKey={`#link${index + 1}`}>
                    {task.title}
                    <TaskItem
                      {...task}
                      key={task.id}
                      togglePriority={togglePriority}
                      moveTask={moveTask}
                      deleteTask={deleteTask}
                      toggleCompleted={toggleCompleted}
                    />
                </Tab.Pane>
          ))}
        </Tab.Content>
      );
    };