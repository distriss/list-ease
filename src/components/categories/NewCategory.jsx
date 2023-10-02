import { useState } from "react";

export function NewCategory({ onSubmit }) {
    const [newCategory, setNewCategory] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        if (newCategory === "" ) return;

        // get categories
        const existingCategories = JSON.parse(localStorage.getItem("CATEGORIES"))

        const newCategoryObject = {
            id: crypto.randomUUID(),
            title: newCategory,
            createdAt: Date.now(),
            priority: false,
            completed: false,
        };

        // add new category to existing categories
        existingCategories.push(newCategoryObject);

        localStorage.setItem("CATEGORIES", JSON.stringify(existingCategories))
        
        onSubmit(newCategory)

        setNewCategory("")
    }

    return (
        <form onSubmit={handleSubmit} name="category" className="new-item-form">
            <div className="form-row">
                <label htmlFor="category">New Category</label>
                <input 
                    value={newCategory}
                    onChange={ e => setNewCategory(e.target.value)}
                    type="text" 
                    id="category"                
                />
            </div>
            <button className="btn">Add</button>
        </form>
    )


}