import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CategoryItem from './CategoryItem';

const CategoryList = ({ categories, toggleCategoryPriority }) => {
  const sortedListItems = categories
    .slice()
    .sort((a, b) => {
      if (a.priority && !b.priority) return -1; 
      if (!a.priority && b.priority) return 1; 
      return a.createdAt - b.createdAt; 
    })
    .map((category, index) => (
      <ListGroup.Item key={category.id} action href={`#link${category.id}`}>
        <CategoryItem
          key={category.id}
          category={category}
          title={category.title}
          toggleCategoryPriority={toggleCategoryPriority}
        />
      </ListGroup.Item>
    ));

  return <ListGroup>{sortedListItems}</ListGroup>;
};

export default CategoryList;