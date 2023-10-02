import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Tab, Row, Col, ListGroup } from 'react-bootstrap';
import Header from './components/view/Header';

import { NewCategory } from './components/categories/NewCategory';
import { NewTask } from './components/tasks/NewTask';
import * as CategoriesAPI from './api/categories';
import * as TasksAPI from './api/tasks';
import CategoryItem from './components/categories/CategoryItem';
import TaskList from './components/tasks/TaskList';

function App() {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  function toggleCategory(id, priority) {
    CategoriesAPI.toggleCategory(setCategories, categories, id, priority);
  }

  function selectCategory(setCategories, categories, id) {
    CategoriesAPI.toggleCategory(setCategories, categories, id)
  }

  function deleteCategory(id) {
    CategoriesAPI.deleteCategory(setCategories, categories, id);
  }


  // Tasks functions
  function addTask(title, categoryId) {
    TasksAPI.addTask(setTasks, title, categoryId);
  }

  function toggleTask(id, priority, categoryId) {
    TasksAPI.toggleTask(setTasks, tasks, id, priority, categoryId);
  }

  function togglePriority(id, priority, categoryId) {
    TasksAPI.togglePriority(setTasks, tasks, id, priority, categoryId)
  }

  function moveTask(title, newCategoryId) {
    TasksAPI.moveTask(setTasks, tasks, title, newCategoryId)
  }

  function deleteTask(id, categoryId) {
    TasksAPI.deleteTask(setTasks, id, categoryId);
  }

  function toggleCompleted(id, completed) {
    TasksAPI.toggleCompleted(setTasks, tasks, id, completed)
  }

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
    <Container className="w-75 p-3" fluid="md">
      <Header />
      <Row className="w-75 p-3" fluid="md">
          <NewCategory onSubmit={addCategory} />
          <NewTask 
            onSubmit={addTask}
            categoryId={selectedCategory}
            categories={categories} 
          />  
      </Row>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
            {categories.length === 0 && "No Categories"}
            {categories.map((category, index) => (
            <ListGroup.Item key={category.id} action href={`#link${index + 1}`}>
            {category.title}
              <CategoryItem
                key={category.id}
                category={category}
                title={category.title}
                toggleCategory={toggleCategory}
                deleteCategory={deleteCategory}
                selectCategory={selectedCategory === category.id}
              />
            </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              {categories.map((category, index) => (
                <Tab.Pane key={category.id} eventKey={`#link${index + 1}`}>
                  <h3>{category.title}</h3>
                  <TaskList
                    filteredTasks={sortedTasks.filter((task) => task.categoryId === category.id)}
                    toggleTask={toggleTask}
                    moveTask={moveTask}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                  />
                </Tab.Pane>
              ))}
            </Tab.Content>
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
          toggleTask={toggleTask}
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
