import React, { useState } from "react";
import { Form, Row, Col, FormGroup, InputGroup, Dropdown, FloatingLabel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import * as CategoriesAPI from '../../api/categories';
import { NewCategory } from "../categories/NewCategory";

export function NewTaskAndCategory({ onSubmit, categories, setCategories }) {
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
      <Row className="align-items-center">
        <Col className="d-flex align-items-center">
          <Dropdown onSelect={handleCategoryChange} className="m-5">
            <Dropdown.Toggle 
                variant="primary" 
                id="category"
                size="lg"
                className="custom-btn">
                  {selectedCategory === null 
                  ? "Select Category" 
                  : selectedCategory === "CreatedCategory"
                  ? "Create New Category"
                  : categories.find(category => category.id === selectedCategory)?.title || selectedCategory}
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    className='icon fa-caret'
                  />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item eventKey="CreateCategory">Create New Category</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="General">General</Dropdown.Item>
                <Dropdown.Item eventKey="Work">Work</Dropdown.Item>
                <Dropdown.Item eventKey="Home">Home</Dropdown.Item>
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
            <Form.Label htmlFor="newTask" visuallyHidden>
            New Task
            </Form.Label>
            <Form.Control
              type="text"
              size="lg"
              placeholder="New Task"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              id="newTask"
              className="form-field" />
            <Button variant="primary" size="lg" className="m-5 no-wrap-text custom-btn" type="submit">Add Task</Button>
                     </>
        )}
        </Col>
      </Row>
    </Form>
    );


}
