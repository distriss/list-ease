import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CategoryItem from './CategoryItem';
import { sortCategoryList } from '../../api/categories';

export default function CategoryList({ 
  categories, 
  toggleCategoryPriority }) {

    const sortedCategories = sortCategoryList(categories)

    return (
      sortedCategories.map((category) => (
        <ListGroup.Item key={category.id} action href={`#link${category.id}`} className="glass-container">
          <CategoryItem
            key={category.id}
            category={category}
            title={category.title}
            toggleCategoryPriority={toggleCategoryPriority}
          />
        </ListGroup.Item>
      )));  
     
};
