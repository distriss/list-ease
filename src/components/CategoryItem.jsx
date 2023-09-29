export function CategoryItem({ priority, id, title, toggleCategory, selectCategory, deleteCategory}) {
    return (
        <li>
            <label>
                <input name="priority" type="checkbox"
                    checked={priority}
                    onChange={e => toggleCategory(id, e.target.checked)} 
                    />
                <span onClick={() => selectCategory(id)}>{title}</span>
            </label>
            <button onClick={() => deleteCategory(id)} className="btn btn-danger">Delete</button>
        </li>
    )
}