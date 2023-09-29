import React, { useEffect, useState } from 'react';
import './style.css';
import { NewCategory } from './components/NewCategory';
import { CategoryList } from './components/CategoryList';
import { NewTask } from './components/NewTask';
import * as CategoriesAPI from './api/categories';
import * as TasksAPI from './api/tasks';

function App() {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const localCategories = localStorage.getItem('CATEGORIES');
    const localTasks = localStorage.getItem('TASKS');
  
    if (localCategories) {
      setCategories(JSON.parse(localCategories));
    } else {
      // Only set an empty array if there is no localCategories data
      setCategories([]);
    }
  
    if (localTasks) {
      setTasks(JSON.parse(localTasks));
    } else {
      // Only set an empty array if there is no localTasks data
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

  function deleteCategory(id) {
    CategoriesAPI.deleteCategory(setCategories, categories, id);
  }


  // Tasks functions
  function addTask(title, categoryId) {
    TasksAPI.addTask(setTasks, title, categoryId);
  }

  function toggleTask(id, completed, categoryId) {
    TasksAPI.toggleTask(setTasks, tasks, id, completed, categoryId);
  }

  function moveTask(taskTitle, newCategoryId) {
    TasksAPI.moveTask(setTasks, tasks, taskTitle, newCategoryId)
  }

  function deleteTask(id, categoryId) {
    TasksAPI.deleteTask(setTasks, tasks, id, categoryId);
  }

  return (
    <>
    <div className="todoapp stack-large">
      <h1>ListEase</h1>
      <NewCategory onSubmit={addCategory} />
      <NewTask 
        onSubmit={addTask}
        categoryId={""}
        categories={categories} 
        onMoveTask={moveTask} />      
      <h2>Categories</h2>
      <div>
        <CategoryList 
          categories={categories} 
          toggleCategory={toggleCategory} 
          deleteCategory={deleteCategory}
          />  
      </div>   
    </div>
    </>
  );
}

export default App
