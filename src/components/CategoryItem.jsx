export function CategoryItem({ priority, id, title, toggleCategory, deleteCategory}) {
    return (
        <li>
            <label>
                <input name="priority" type="checkbox"
                    checked={priority}
                    onChange={e => toggleCategory(id, e.target.checked)} />
                    {title}
            </label>
            <button onClick={() => deleteCategory(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}