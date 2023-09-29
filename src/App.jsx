import React, { useEffect, useState } from 'react';
import './style.css';
import { NewCategory } from './components/NewCategory';
import { CategoryList } from './components/CategoryList';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';
import * as CategoriesAPI from './api/categories';
import * as TasksAPI from './api/tasks';

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

  function moveTask(title, newCategoryId) {
    TasksAPI.moveTask(setTasks, tasks, title, newCategoryId)
  }

  function deleteTask(id, categoryId) {
    TasksAPI.deleteTask(setTasks, id, categoryId);
  }

  function toggleCompleted(id, completed) {
    TasksAPI.toggleCompleted(setTasks, tasks, id, completed)
  }

  return (
    <>
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
    </div>
    </>
  );
}

export default App
