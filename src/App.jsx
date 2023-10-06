import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack, Tab, Row, Col, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import Header from './components/view/Header';
import { NewCategory } from './components/categories/NewCategory';
import { NewTask } from './components/tasks/NewTask';
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
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const localCategories = localStorage.getItem('CATEGORIES');
    const localTasks = localStorage.getItem('TASKS');
  
    if (localCategories) {
      setCategories(JSON.parse(localCategories));
    } else {
      setCategories([]);
    }
  
    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    } else {
      setTasks([]);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("CATEGORIES", JSON.stringify(categories));
  }, [categories]);
  
  useEffect(() => {
    localStorage.setItem("TASKS", JSON.stringify(tasks));
  }, [tasks]);

  
  // Category Functions 
  function addCategory(title) {
    CategoriesAPI.addCategory(setCategories, title);
  }

  // Active Category {
    const handleTabSelect = (eventKey) => {
      const categoryId = eventKey.substring(1);
      setActiveCategory(categoryId);
    };



   function toggleCategoryPriority(id, priority, categoryId) {
    CategoriesAPI.toggleCategoryPriority(setCategories, categories, id, priority, categoryId)
  }

  function deleteCategory(id) {
    CategoriesAPI.deleteCategory(setCategories, categories, id);
  }


  // Tasks functions
  function addTask(title, categoryId) {
    TasksAPI.addTask(setTasks, title, categoryId);
  }

  // Toggle Task Completed
  function toggleTaskCompleted(id, completed, categoryId) {
    TasksAPI.toggleTaskCompleted(setTasks, tasks, id, completed, categoryId);
  }

  // function togglePriority(id, priority, categoryId) {
  //   TasksAPI.togglePriority(setTasks, tasks, id, priority, categoryId)
  // }

  // function moveTask(title, newCategoryId) {
  //   TasksAPI.moveTask(setTasks, tasks, title, newCategoryId)
  // }

  // function deleteTask(id, categoryId) {
  //   TasksAPI.deleteTask(setTasks, id, categoryId);
  // }

  const sortByPriorityAndCreationTime = (taskA, taskB) => {
    if (taskA.priority && !taskB.priority) {
        return -1;
    }
    if (!taskA.priority && taskB.priority) {
        return 1;
    }
     return taskA.createdAt - taskB.createdAt;
};

const sortedTasks = [...tasks].sort(sortByPriorityAndCreationTime);


  return (
    <>
    <Container className="w-75">
      <Header />
      <Stack className="col-lg-8 mt-3 mb-5 mx-auto">        
            <NewTask 
              onSubmit={addTask}
              categoryId={activeCategory}
              categories={categories} 
            />
            <NewCategory onSubmit={addCategory} />
      </Stack>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
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
                    filteredTasks={sortedTasks.filter((task) => task.categoryId === category.id)}
                    toggleTaskCompleted={toggleTaskCompleted}
                    // moveTask={moveTask}
                    // deleteTask={deleteTask}
                    // toggleCompleted={toggleCompleted}
                  />
                </Tab.Pane>
              ))}
            </Tab.Content>
            {/* Progress Bar
            Remove Completed */}
          </Col>
        </Row>
    </Tab.Container>
     
    </Container>
{/*     
    <div className="todoapp stack-large">
      <h1>ListEase</h1>
      <NewCategory onSubmit={addCategory} />
      <NewTask 
        onSubmit={addTask}
        categoryId={selectedCategory}
        categories={categories} />      
      <h2>Categories</h2>
      <div>
        <CategoryList 
          categories={categories} 
          toggleCategory={toggleCategory} 
          deleteCategory={deleteCategory}
          selectedCategory={setSelectedCategory}
          />  
      </div>
      <div>
      <h3>Tasks</h3>
        <TaskList
          tasks={tasks}
          toggleTaskCompleted={toggleTaskCompleted}
          moveTask={moveTask}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />  
      </div>  
    </div> */}
    </>
  );
}

export default App
