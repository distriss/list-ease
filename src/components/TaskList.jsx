import { TaskItem } from "./TaskItem"

export function TaskList({ categories, toggleTask, deleteTask}) {
    return (
        <ul className="list">
            {categories.length === 0 && "No Categories"}
            {categories.map(Task => {
                return (
                    <TaskItem
                        {...Task}
                        key={Task.id}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
                )
            })}
        </ul>
    )
}