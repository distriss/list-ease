import React, { useState } from "react";
import { Form, FormGroup, InputGroup, Dropdown, FloatingLabel, Col, Row, Button, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export function NewCategory({ onSubmit, handleCreateCategory }) {
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
    <>
      <Form.Label htmlFor="category" visuallyHidden>
      New Category
      </Form.Label>
      <Form.Control
        type="text"
        size="lg"
        placeholder="New Category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        id="newCategory"
        className="form-field m-lg-3 mb-3 mb-md-3" />
        <Button variant="primary" size="lg" className="m-lg-3 mb-3 mb-md-3 no-wrap-text custom-btn px-5" type="submit" onClick={handleCreateCategory}>Create Category</Button>
      </>
    )

}