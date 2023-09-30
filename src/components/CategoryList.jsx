import React from 'react';
import { CategoryItem } from './CategoryItem';

export function CategoryList({ categories, toggleCategory, deleteCategory, selectCategory}) {
 
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
                        onClick={() => selectCategory(category.id)}
                    />
                    </React.Fragment>
                    
                )
            })}
        </ul>
    )
}