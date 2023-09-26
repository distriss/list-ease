import { CategoryItem } from "./CategoryItem"

export function CategoryList({ categories, toggleCategory, deleteCategory}) {
    return (
        <ul className="list">
            {categories.length === 0 && "No Categories"}
            {categories.map(category => {
                return (
                    <CategoryItem
                        {...category}
                        key={category.id}
                        toggleCategory={toggleCategory}
                        deleteCategory={deleteCategory}
                    />
                )
            })}
        </ul>
    )
}