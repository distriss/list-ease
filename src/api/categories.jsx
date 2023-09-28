// Add Category
  export function addCategory(setCategories, title) {
    setCategories(currentCategories => {
      return [
        ...currentCategories, 
        { id: crypto.randomUUID(), 
          title: title,
          createdAt: Date.now(),
          priority: false,
          completed: false,
        }
      ]
    })
  }


  // Toggle Category
  export function toggleCategory(setCategories, id, priority) {
    setCategories(currentCategories => {
      return currentCategories.map(category => {
        if(category.id === id) {
          return {...category, priority}
        }

        return category
      })
    })
  }


  // Delete Category
  export function deleteCategory(setCategories, id) {
    setCategories(currentCategories => {
      return currentCategories.filter(category => category.id !== id)
    })
  }