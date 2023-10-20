import React, { useState, useEffect } from "react";
import { Form, Row, Col, Alert, FormGroup, InputGroup, Dropdown, FloatingLabel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import * as CategoriesAPI from '../../api/categories';
import { NewCategory } from "../categories/NewCategory";

export function NewTaskAndCategory({ 
  onSubmit, 
  categories, 
  addCategory, 
  setCategories,
  selectedCategory,
  setSelectedCategory,
}) {
  
    const [newTask, setNewTask] = useState("");
    const [newCategory, setNewCategory] = useState("");
    const [creatingCategory, setCreatingCategory] = useState(false);
    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
      if (selectedCategory !== "New Category" && creatingCategory) {
        setCreatingCategory(false);
      }
    }, [selectedCategory, creatingCategory]);

    
    const handleCategoryChange = (eventKey) => {
        if (eventKey === "newCategory") {
          if (creatingCategory) {
            setCreatingCategory(false);
            setSelectedCategory(null);
          } else {
            setCreatingCategory(true);
            setSelectedCategory("New Category")
          }
          setNewTask("");
        } else if (eventKey === "General" || eventKey === "Work" || eventKey === "Home") {
          setCreatingCategory(false);
          const existingCategory = categories.find((category) => category.title === eventKey);
          if (!existingCategory) {
            CategoriesAPI.addCategory(setCategories, eventKey)
          }
          setSelectedCategory(eventKey)
          setShowAlert(false);
        } else {
            setSelectedCategory(eventKey);
            setShowAlert(false);
        }      
    };

    const handleNewCategory = (newCategory) => {
        if (newCategory.trim() === "") {
            return;
        }

        CategoriesAPI.addCategory(setCategories, newCategory);
        setSelectedCategory(categories.find((category) => category.title === newCategory).id)

        setNewCategory("");
        setCreatingCategory(false);
        setShowAlert(false);
    }


    const handleSubmit = (e) => {
      e.preventDefault();
      if (newTask.trim() === "" || selectedCategory === null) {
        setShowAlert(true)
        return;
      }
    
      // Get tasks
      const existingTasks = JSON.parse(localStorage.getItem("TASKS"));
    
      let categoryId;

      
      if (selectedCategory === "General" || selectedCategory === "Work" || selectedCategory === "Home") {
        const existingCategory = categories.find((category) => category.title === selectedCategory);
    
        if (existingCategory) {
          categoryId = existingCategory.id;
        } else {
          const newCategory = CategoriesAPI.addCategory(setCategories, selectedCategory);
          categoryId = newCategory.id;
        }
      } else {
        categoryId = selectedCategory;
      }
    
      const newTaskObject = {
        id: crypto.randomUUID(),
        title: newTask,
        categoryId: categoryId,
        createdAt: Date.now(),
        priority: false,
        completed: false,
        notes: "",
      };
    
      existingTasks.push(newTaskObject);
    
      localStorage.setItem("TASKS", JSON.stringify(existingTasks));
    
      onSubmit(newTask, categoryId);
      setNewTask("");
      setShowAlert(false);
      
    };

    function customCategories(categories) {
      return categories.filter((category) => !["General", "Work", "Home"].includes(category.title));
    }
    

    return (
    <Form onSubmit={handleSubmit} name="task">
      <Row className="align-items-center">
        <Col className="d-lg-flex align-items-center text-center">
          <Dropdown onSelect={handleCategoryChange} className="m-lg-3 mb-3 mb-md-3">
          {showAlert && (
            <Alert key="danger" variant="danger" className="position-absolute start-50 translate-middle-x" style={{ top: '-100px' }}>
              Please choose a Category.
            </Alert>
          )}
           <Dropdown.Toggle 
                variant="primary" 
                id="category"
                size="lg"
                className="custom-dropdown d-flex  align-items-center px-5">
                  
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
                <Dropdown.Item eventKey="General">General</Dropdown.Item>
                <Dropdown.Item eventKey="Work">Work</Dropdown.Item>
                <Dropdown.Item eventKey="Home">Home</Dropdown.Item>                
                <Dropdown.Divider />                
                <Dropdown.Item eventKey="newCategory">
                  {creatingCategory ? "New Task" : "New Category"}
                </Dropdown.Item>
                <Dropdown.Divider />
                {customCategories(categories).map((category) => (
                  <Dropdown.Item key={category.id} eventKey={category.id}>
                    {category.title}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        {creatingCategory ? (
          <NewCategory
            handleNewCategory={handleNewCategory}
            onSubmit={addCategory}
            addCategory={addCategory}
            setCategories={setCategories} />
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
              className="form-field m-lg-3 mb-3 mb-md-3" />
            <Button variant="primary" size="lg" className="m-lg-3 mb-3 mb-md-3 no-wrap-text custom-btn px-5" type="submit">Add Task</Button>
                     </>
        )}
        </Col>
      </Row>
    </Form>
    );


}
