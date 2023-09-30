import React from 'react';
import { MDBListGroup } from 'mdb-react-ui-kit';
import CategoryItem from './CategoryItem';

export default function CategoryList({ categories, toggleCategory, deleteCategory, selectedCategory }) {
  return (
    <MDBListGroup style={{ minWidth: '22rem' }} light>
      {categories.length === 0 && <MDBListGroupItem>No Categories</MDBListGroupItem>}
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