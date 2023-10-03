import React, { useState } from "react"
import { Form, FloatingLabel, Col, Row, Button } from 'react-bootstrap';

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
        <Form onSubmit={handleSubmit} name="task">
            <Row>
                <Col>
                    <FloatingLabel htmlFor="task" label="New Task">
                        <Form.Control
                            type="text"
                            placeholder="New Task"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            id="task"
                        />
                    </FloatingLabel>
                    <Form.Select 
                    size="sm"
                    id="category"
                    value={selectedCategory}
                     onChange={handleCategoryChange}
                    >
                    <option value="">Choose Category</option>
                    {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                    {category.title}
                     </option>
                    ))}
                    </Form.Select>
                </Col>
                <Col>
                    <Button size="lg" type="submit">Add</Button>
                </Col>
                
            </Row>           
        </Form>
        // <form onSubmit={handleSubmit} name="task" className="new-item-form">
        //     <div className="form-row">
        //         <label htmlFor="task">New Task</label>
        //         <input 
        //             value={newTask}
        //             onChange={ e => setNewTask(e.target.value)}
        //             type="text" 
        //             id="task"                
        //         />
        //     </div>
        //     <div className="form-row">
        //         <label htmlFor="category">Select Category</label>
        //         <select 
        //             id="category"
        //             value={selectedCategory}
        //             onChange={handleCategoryChange}
        //             >
        //             <option value="">No category</option>
        //             {categories.map((category) => (
        //             <option key={category.id} value={category.id}>
        //             {category.title}
        //             </option>
        //             ))}
        //         </select>

        //     </div>
        //     <button className="btn">Add</button>
        // </form>
    )
}