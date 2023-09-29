import React, { useState } from "react"

export function NewTask({ onSubmit, categoryId, categories }) {
    const [newTask, setNewTask] = useState("")
    const [selectedCategory, setSelectedCategory] = useState(categoryId || (categories.length > 0 ? categories[0].id : ""));

    function handleSubmit(e) {
        e.preventDefault()
        if (newTask === "") return;

        onSubmit(newTask, selectedCategory);
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
                <label htmlFor="category">Select Category</label>
                <select 
                    id="category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    >
                    <option value="">No category</option>
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