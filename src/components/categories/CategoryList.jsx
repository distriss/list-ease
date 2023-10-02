import React from 'react';
import CategoryItem from './CategoryItem';

export function CategoryList({ categories, toggleCategory, deleteCategory, selectedCategory }) {
  return (
    <ul>
      {categories.length === 0 && "No Categories"}
      {categories.map(category => (
        <CategoryItem
          key={category.id}
          category={category}
          title={category.title}
          toggleCategory={toggleCategory}
          deleteCategory={deleteCategory}
          selectCategory={selectedCategory === category.id}
          
        />
        
      ))
      }
      
    </ul>
  );
}