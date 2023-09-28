import React, { useEffect, useState } from 'react';
import './style.css';
import { NewCategory } from './components/NewCategory';
import { CategoryList } from './components/CategoryList';
import { NewTask } from './components/NewTask';
import * as CategoriesAPI from './api/categories';
import * as TasksAPI from './api/tasks';

function App() {
  const [categories, setCategories] = useState(() => {
    const localValue = localStorage.getItem("CATEGORIES")
    return localValue ? JSON.parse(localValue) : [];
  });

  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("TASKS");
    return localValue? JSON.parse(localValue) : [];
  });


  useEffect(() => {
    localStorage.setItem("CATEGORIES", JSON.stringify(categories))
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
      <NewTask onSubmit={addTask}
        categories={categories} 
        onMoveTask={moveTask} />      
      <h2>Categories</h2>
      <div>
        <CategoryList 
          categories={categories} 
          toggleCategory={toggleCategory} 
          deleteCategory={deleteCategory}
          addTask={addTask}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          />  
      </div>   
    </div>
    </>
  );
}

export default App
