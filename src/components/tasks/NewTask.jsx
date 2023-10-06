import React, { useState } from "react";
import { Form, FormGroup, InputGroup, Dropdown, FloatingLabel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export function NewTask({ onSubmit, categories }) {
    const [newTask, setNewTask] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (eventKey, event) => {
        setSelectedCategory(eventKey);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() === "" || selectedCategory === null) {
            return;
        }

        onSubmit(newTask, selectedCategory);
        setNewTask("");
    };

    return (
        <Form onSubmit={handleSubmit} name="task">
            <FormGroup>
                <InputGroup className="mb-3">
                    <Dropdown onSelect={handleCategoryChange}>
                        <Dropdown.Toggle variant="primary" id="category">
                            {selectedCategory === null ? "Category" : categories.find(category => category.id === selectedCategory).title}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="">Default</Dropdown.Item>
                            <Dropdown.Divider />
                            {categories.map((category) => (
                                <Dropdown.Item key={category.id} eventKey={category.id}>
                                    {category.title}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
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
                        <FontAwesomeIcon icon={faPlus} color="white" className="fa-plus"/>
                    </Button>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}
