import React, { useState } from "react";
import { Form, FormGroup, InputGroup, Dropdown, FloatingLabel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import * as CategoriesAPI from '../../api/categories';
import { NewCategory } from "../categories/NewCategory";

export function NewTask({ onSubmit, categories, setCategories }) {
    const [newTask, setNewTask] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [newCategory, setNewCategory] = useState("");
    const [creatingCategory, setCreatingCategory] = useState(false);

    const handleCategoryChange = (eventKey) => {
        if (eventKey === "CreateCategory") {
            setCreatingCategory(true);
        } else {
            setSelectedCategory(eventKey);
        }       
    };

    const handleCreateCategory = () => {
        if (newCategory.trim() === "") {
            return;
        }

        CategoriesAPI.addCategory(setCategories, newCategory);
        setSelectedCategory(categories.find((category) => category.title === newCategory).id)

        setNewCategory("");
        setCreatingCategory(false);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() === "" || selectedCategory === null) {
            return;
        }

        // get tasks
        const existingTasks = JSON.parse(localStorage.getItem("TASKS"));        

        const newTaskObject = {
            id: crypto.randomUUID(),
            title: newTask,
            categoryId: selectedCategory,
            createdAt: Date.now(),
            priority: false,
            completed: false,
            notes: "",
        }        

        existingTasks.push(newTaskObject);
        
        localStorage.setItem("TASKS", JSON.stringify(existingTasks))

        onSubmit(newTask, selectedCategory)
        setNewTask("")
    };

    return (
        <Form onSubmit={handleSubmit} name="task">
            <FormGroup>
                <InputGroup className="mb-3">
                    <Dropdown onSelect={handleCategoryChange}>
                        <Dropdown.Toggle 
                            variant="primary" 
                            id="category">
                                {selectedCategory === null 
                                ? "Select Category" 
                                : selectedCategory === "CreatedCategory"
                                ? "Create New Category"
                                : categories.find(category => category.id === selectedCategory)?.title || selectedCategory}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="General">General</Dropdown.Item>
                            <Dropdown.Item eventKey="Work">Work</Dropdown.Item>
                            <Dropdown.Item eventKey="Home">Home</Dropdown.Item>
                            <Dropdown.Item eventKey="CreateCategory">Create New Category</Dropdown.Item>
                            <Dropdown.Divider />
                            {categories.map((category) => (
                                <Dropdown.Item key={category.id} eventKey={category.id}>
                                    {category.title}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    {creatingCategory ? (
                        <NewCategory
                            handleCreateCategory={handleCreateCategory}/>
                    ) : (
                        <>
                        <FloatingLabel 
                            htmlFor={creatingCategory ? "newCategory" : "newTask"}
                            label={creatingCategory ? "New Category" : "New Task" }
                            >
                        <Form.Control
                            type="text"
                            placeholder="New Task"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            id={creatingCategory ? "newCategory" : "newTask"}
                        />
                    </FloatingLabel>
                    <Button variant="primary" size="lg" type="submit">Add Task
                    </Button>
                    </>
                    )}
                    
                </InputGroup>
            </FormGroup>
        </Form>
    );
}
