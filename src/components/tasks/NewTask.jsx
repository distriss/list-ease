import React, { useState } from "react";
import { Form, FormGroup, InputGroup, Dropdown, FloatingLabel, Col, Row, Button, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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
            <FormGroup>
                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="primary"
                        id="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        title="Category"
                        >
                        <Dropdown.Item 
                            value="">
                            Default
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        {categories.map((category) => (
                        <Dropdown.Item key={category.id} value={category.id}>
                        {category.title}
                        </Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <FloatingLabel htmlFor="task" label="New Task">
                        <Form.Control
                            type="text"
                            placeholder="New Task"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            id="task"
                        />
                    </FloatingLabel>
                    <Button variant="primary" size="lg" type="submit">
                        <FontAwesomeIcon icon={faPlus} color="white" />
                    </Button>
                </InputGroup>
            </FormGroup>         
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