import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack, Tab, Row, Col, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import Header from './components/view/Header';
import { NewTaskAndCategory } from './components/tasks/NewTaskAndCategory';
import * as CategoriesAPI from './api/categories';
import * as TasksAPI from './api/tasks';
import TaskList from './components/tasks/TaskList';
import CategoryList from './components/categories/CategoryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import './style.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
 
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
 
  function toggleCategoryPriority(id, priority, categoryId) {
    CategoriesAPI.toggleCategoryPriority(setCategories, categories, id, priority, categoryId)
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
 


  return (
    <>
    <Container className="w-80">
      <Header />
      <Stack className="col-lg-12 mt-5 mb-5">        
      <NewTaskAndCategory
        onSubmit={addTask}
        categories={categories}
        addCategory={addCategory}
        setCategories={setCategories}
       />
      </Stack>
      <Tab.Container 
        id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={5}>
            <CategoryList 
            categories={categories} 
            toggleCategoryPriority={toggleCategoryPriority} />
          </Col>
          <Col sm={7}>
            <Tab.Content>
              {categories.map((category, index) => (
                <Tab.Pane 
                  key={category.id} 
                  eventKey={`#link${index + 1}`}
                  className="px-0 mx-auto"
                  >                  
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h3 className="p-0 m-0">{category.title}</h3>
                    <DropdownButton
                      as={ButtonGroup}
                      key="end"
                      id={`dropdown-button-drop-end`}
                      focusFirstItemOnShow={false}
                      drop="end"
                      variant="primary"
                      title={<FontAwesomeIcon icon={faEllipsisV} className="icon icon-zoom"/>}
                      className="custom-menu-btn">         
                      <Dropdown.Item eventKey="1">Set Priority</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Clear Completed</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="3">Delete Category</Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <TaskList
                    tasks={tasks}
                    category={category}
                    toggleTaskCompleted={toggleTaskCompleted}
                  />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>     
    </Container>

    </>
  );
}

export default App
