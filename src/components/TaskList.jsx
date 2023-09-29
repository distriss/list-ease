import { TaskItem } from "./TaskItem"

export function TaskList({ tasks, toggleTask, moveTask, deleteTask, toggleCompleted}) {
    return (
        <ul className="list">
            {tasks.length === 0 && "No Tasks"}
            {tasks.map(task => {
                return (
                    <TaskItem
                        {...task}
                        key={task.id}
                        toggleTask={toggleTask}
                        moveTask={moveTask}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                )
            })}
        </ul>
    )
}