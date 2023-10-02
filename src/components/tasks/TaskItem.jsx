export function TaskItem({ priority, id, title, toggleTask, deleteTask}) {
    return (
        <li>
            <label>
                <input name="priority" type="checkbox"
                    checked={priority}
                    onChange={e => toggleTask(id, e.target.checked)} />
                    {title}
            </label>
            <button onClick={() => deleteTask(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}