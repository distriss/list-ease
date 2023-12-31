import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Tab, Row, Col, Dropdown, DropdownButton, ButtonGroup, Form,Button } from 'react-bootstrap';
import Header from './components/view/Header';
import Dots from './components/Dots';
import { NewTaskAndCategory } from './components/tasks/NewTaskAndCategory';
import * as CategoriesAPI from './api/categories';
import * as TasksAPI from './api/tasks';
import TaskList from './components/tasks/TaskList';
import CategoryList from './components/categories/CategoryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './style.css';

const colors = ["#85e481", "#f1dbeb", "#c1e4a5", "#f5aea2", "#7ad0e0", "#f4d07b", "#f497bf", "#f5d156", "#f5859d"];


function App() {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priority, setPriority] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  
 
  useEffect(() => {
    const localCategories = localStorage.getItem('CATEGORIES');
    if (localCategories) {
      setCategories(JSON.parse(localCategories));
    } 

    const localTasks = localStorage.getItem('TASKS');
    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    } 
  }, []);
    
  useEffect(() => {
    localStorage.setItem("CATEGORIES", JSON.stringify(categories));
  }, [categories]);
  
  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }, [tasks]);

  // Category Functions  
  // Add Category
  function addCategory(title) {
    CategoriesAPI.addCategory(setCategories, title);
  }
  
  // Category Priority
  function toggleCategoryPriority(id, priority, categoryId) {
    CategoriesAPI.toggleCategoryPriority(setCategories, categories, id, priority, categoryId);
  }

  // Edit Category Title 
  function updateCategoryTitle(setCategories, categories, id, editedTitle) {
    CategoriesAPI.updateCategoryTitle(setCategories, categories, id, editedTitle);
  }

  // Delete Category with Associated Tasks
  function deleteCategory(id, selectedCategory, categoryId) {
    const category = categories.find(category => category.id === id);
    if (!category) return;
    const confirmDelete = window.confirm(`Are you sure you want to delete the category "${category.title}" and all its tasks?`);

    if (confirmDelete) {
      CategoriesAPI.deleteCategory(setCategories, setTasks, id, setSelectedCategory);      
    }

    if (selectedCategory === categoryId) {
      setSelectedCategory(null); 
    }
  }

  // Clear Completed Tasks in a Category
  function clearCompleted( setTasks, id) {
    CategoriesAPI.clearCompleted( setTasks, id);
  }

  
  // Tasks functions
  // Add Task
  function addTask(title, categoryId) {
    TasksAPI.addTask(setTasks, title, categoryId);
  }

  // Toggle Task Completed
  function toggleTaskCompleted(id, categoryId) {
    TasksAPI.toggleTaskCompleted(setTasks, id, categoryId)
  }

  // Toggle Task Priority
  function toggleTaskPriority(id, priority) {
    TasksAPI.toggleTaskPriority(setTasks, tasks, id, priority)
  }

  // Delete Task
  function deleteTask (id) {
    TasksAPI.deleteTask(setTasks, id)
  }


  return (
    <>
    <div className="background-container">
      <Dots />
      <div className="flex-d" style={{ overflowY: 'auto', maxHeight: '100vh' }} >      
        <Header />
        <Container >        
          <NewTaskAndCategory
            onSubmit={addTask}
            categories={categories}
            addCategory={addCategory}
            setCategories={setCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
           />
        </Container>
        <Container className="tab-container mt-3">
        <Tab.Container 
          id="categories-task-group" defaultActiveKey="#link1" >
          <Row >
            <Col xs={12} lg={4} className={`mb-5 ${categories.length ? ' glass-container' : ''}`}>
              <CategoryList 
              categories={categories} 
              toggleCategoryPriority={toggleCategoryPriority}
              />
            </Col>
            <Col xs={12} lg={8} >
              <Tab.Content  >
                {categories.map((category) => (
                  <Tab.Pane 
                    key={category.id} 
                    eventKey={`#link${category.id}`}
                    className="mb-5 mt-3 glass-container"
                    >                  
                    <Container className="d-flex justify-content-between align-items-center mb-3 ">
                      {
                        isEditing ? (
                          <>
                          <Form.Label 
                            htmlFor="category" 
                            visuallyHidden
                            >
                            Edit Category Title
                          </Form.Label>
                          <Form.Control
                            size="lg"
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className="form-field form-field-xs m-sm-2"
                          />
                          <Button 
                            size="lg" 
                            className="m-sm-2 wrap-text custom-btn custom-btn-xs px-4" 
                            onClick={() => {
                              setIsEditing(false);
                              // Update the category title with the new value
                              updateCategoryTitle(setCategories, categories, category.id, editedTitle);
                            }}>Save</Button>
                        </>
                        ) : (
                          <h2 className="p-0 mx-4">{category.title}</h2>
                        )
                      }
                      <DropdownButton
                        as={ButtonGroup}
                        key="end"
                        id={`dropdown-button-drop-end`}
                        focusFirstItemOnShow={false}
                        drop="end"
                        variant="primary"
                        title={<FontAwesomeIcon icon={faEllipsisV} className="icon icon-zoom"/>}
                        className="custom-menu-btn"> 
                          <Dropdown.Item 
                            eventKey="1"
                            onClick={() => {
                              setIsEditing(true);
                              setEditedTitle(category.title);
                            }}
                            >
                              Edit Category
                          </Dropdown.Item>
                          <Dropdown.Item 
                            eventKey="2"
                            onClick={() => clearCompleted(setTasks, category.id)}
                            >
                              Clear Completed
                          </Dropdown.Item>
                        <Dropdown.Divider />
                          <Dropdown.Item 
                            eventKey="3"
                            onClick={() => deleteCategory(category.id)}
                            >
                              Delete Category
                          </Dropdown.Item>
                      </DropdownButton>
                    </Container>
                    <TaskList
                      tasks={tasks}
                      category={category}
                      toggleTaskCompleted={toggleTaskCompleted}
                      toggleTaskPriority={toggleTaskPriority}
                      deleteTask={deleteTask}
                    />
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        </Container>     
      </div>
    </div>

    </>
  );
}

export default App
