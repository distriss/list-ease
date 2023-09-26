import { useState } from "react";

export function NewTaskCategory({ onSubmit }) {
    const [newCategory, setNewCategory] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        if (newCategory === "" ) return
        
        onSubmit(newCategory)

        setNewCategory("")
    }

    return (
        <form onSubmit={handleSubmit} className="">
            <div className="">
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