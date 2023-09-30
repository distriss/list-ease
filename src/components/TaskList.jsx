import { TaskItem } from "./TaskItem"

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
        <ul className="list">
            {tasks.length === 0 && "No Tasks"}
            {tasks.map(task => {
                return (
                    <TaskItem
                        {...task}
                        key={task.id}
                        togglePriority={togglePriority}
                        moveTask={moveTask}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                )
            })}
        </ul>
    )
}