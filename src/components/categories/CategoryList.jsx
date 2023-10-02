import React from 'react';
import CategoryItem from './CategoryItem';
import ListGroup from 'react-bootstrap/ListGroup';

export function CategoryList({ categories, toggleCategory, deleteCategory, selectedCategory }) {
  return (

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
  );
}