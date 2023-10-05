import React, { useState } from "react";
import { Form, FormGroup, InputGroup, Dropdown, FloatingLabel, Col, Row, Button, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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
        <Form onSubmit={handleSubmit} name="category">
            <InputGroup className="mb-3">
                <FloatingLabel htmlFor="category" label="New Category">
                    <Form.Control
                        type="text"
                        placeholder="New Category"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        id="category"
                    />
                </FloatingLabel>
                <Button variant="primary" size="lg" type="submit">
                    <FontAwesomeIcon icon={faPlus} color="white" className="fa-plus"/>
                </Button>
            </InputGroup>           
        </Form>
    )


}