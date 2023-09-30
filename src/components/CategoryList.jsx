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
                        selectCategory={selectCategory}
                    />
                    </React.Fragment>
                    
                )
            })}
        </ul>
    )
}