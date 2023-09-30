export function CategoryItem({ priority, id, title, toggleCategory, selectCategory, deleteCategory}) {
    return (
        <li className={`list-item ${priority ? 'priority' : ''}`}>
            <span
                className="list-item-title"
                onClick={() => selectCategory(id)}>
                {title}
            </span>
            <div className="list-item-buttons">
                <button
                    className="button-togglepriority"
                    onClick={() => toggleCategory(id, !priority)}>
                    {priority ? 'Unmark Priority' : 'Mark Priority'}
                </button>
                <button 
                    className="button-delete-item"
                    onClick={() => deleteCategory(id)}>
                </button>

            </div>
        </li>
    )
}