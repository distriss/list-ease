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
          selected: false,
        }
      ]
    })
  }


  // Toggle Category
  export function toggleCategory(setCategories, categories, id, priority) {
    setCategories(currentCategories => {
      return currentCategories.map(category => {
        if(category.id === id) {
          return {...category, priority}
        }

        return category
      })
    })
  }

  // Select Category
  export function selectCategory(setCategories, categories, id) {
    const selectedCategory = categories.find(category => category.id === id);
    
    if (selectedCategory) {
      setCategories(prevCategories => prevCategories.map(category => category.id === id ? {...category, selected: true } : category))
    }
  }


  // Delete Category
  export function deleteCategory(setCategories, categories, id) {
    setCategories(currentCategories => {
      return currentCategories.filter(category => category.id !== id)
    })
  }