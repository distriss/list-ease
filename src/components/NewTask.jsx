import React, { useState } from "react"

export function NewTask({ onSubmit, categoryId, categories, onMoveTask }) {
    const [newTask, setNewTask] = useState("")
    const [selectedCategory, setSelectedCategory] = useState(categoryId || (categories.length > 0 ? categories[0].id : ""));

    function handleSubmit(e) {
        e.preventDefault()
        if (newTask === "") return;

        if (selectedCategory !== categoryId) {
            onMoveTask(newTask, selectedCategory);
        } else {
            onSubmit(newTask, selectedCategory);
        }

        setNewTask("")
    }

    
    // Category Selection
    function handleCategoryChange(e) {
        setSelectedCategory(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} name="task" className="new-item-form">
            <div className="form-row">
                <label htmlFor="task">New Task</label>
                <input 
                    value={newTask}
                    onChange={ e => setNewTask(e.target.value)}
                    type="text" 
                    id="task"                
                />
            </div>
            <div className="form-row">
                <label htmlFor="category">Category</label>
                <select 
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    >
                    <option value={categoryId}>No Category</option>
                    {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                    {category.title}
                    </option>
                    ))}
                </select>

            </div>
            <button className="btn">Add</button>
        </form>
    )
}