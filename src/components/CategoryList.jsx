import React from 'react';
import { MDBListGroup } from 'mdb-react-ui-kit';
import CategoryItem from './CategoryItem';

export function CategoryList({ categories, toggleCategory, deleteCategory, selectedCategory }) {
  return (
    <MDBListGroup style={{ minWidth: '22rem' }} light>
      {categories.length === 0 && "No Categories"}
      {categories.map(category => (
        <CategoryItem
          key={category.id}
          category={category}
          toggleCategory={toggleCategory}
          deleteCategory={deleteCategory}
          selectCategory={selectedCategory === category.id}
        />
      ))}
    </MDBListGroup>
  );
}