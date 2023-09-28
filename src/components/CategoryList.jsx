import React from 'react';
import { CategoryItem } from './CategoryItem';
import * as TasksAPI from '../api/tasks';

export function CategoryList({ categories, toggleCategory, deleteCategory}) {
    
  // Tasks 
  function addTask(title, categoryId) {
    TasksAPI.addCategory(setTasks, tasks, title, categoryId);
  }

  function moveTask(taskId, newCategoryId) {
    TasksAPI.moveTask(setTasks, tasks, taskId, newCategoryId)
  }

  function toggleTask(taskId, priority) {
    TasksAPI.toggleTask(setTasks, tasks, taskId, priority);
  }

  function deleteTask(taskId) {
    TasksAPI.deleteCategory(setTasks, categories, id);
  }

    return (
        <ul className="list">
            {categories.length === 0 && "No Categories"}
            {categories.map(category => {
                return (
                    <React.Fragment key={`fragment-${category.id}`}>
                    <CategoryItem
                        {...category}
                        key={category.id}
                        toggleCategory={toggleCategory}
                        deleteCategory={deleteCategory}
                    />
                    </React.Fragment>
                    
                )
            })}
        </ul>
    )
}