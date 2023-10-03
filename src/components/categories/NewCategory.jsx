import React, { useState } from "react";
import { Form, FloatingLabel, Col, Row, Button } from 'react-bootstrap';

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
            <Row>
                <Col>
                    <FloatingLabel htmlFor="category" label="New Category">
                        <Form.Control
                            type="text"
                            placeholder="New Category"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            id="category"
                        />
                    </FloatingLabel>
                </Col>
                <Col>
                    <Button size="lg"type="submit">Add</Button>
                </Col>
            </Row>           
        </Form>
    )


}