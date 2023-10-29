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


  // Toggle Priority
  export function toggleCategoryPriority(setCategories, categories, id, priority) {
    const updatedCategories = categories.map((category) =>
      category.id === id ? { ...category, priority } : category
    );
    setCategories(updatedCategories);
  }
  
  // Select Category
  export function selectCategory(setCategories, categories, id) {
    const selectedCategory = categories.find(category => category.id === id);
    
    if (selectedCategory) {
      setCategories(prevCategories => prevCategories.map(category => category.id === id ? {...category, selected: true } : category))
    }
  }

  // Sort Category List
  export function sortCategoryList(categories) {
    return categories.slice().sort((categoryA, categoryB) => {
      if (categoryA.priority && !categoryB.priority) {
        return -1;
      }
      if (!categoryA.priority && categoryB.priority) {
        return 1;
      }
      return categoryA.createdAt - categoryB.createdAt;
    });
  }

  // Delete Category
  export function deleteCategory(setCategories, setTasks, id, setSelectedCategory) {

    setCategories((currentCategories) => {
      const updatedCategories = currentCategories.filter((category) => category.id !== id);
      localStorage.setItem("CATEGORIES", JSON.stringify(updatedCategories));
      return updatedCategories;
    });
  
    // Delete the associated tasks
    setTasks((currentTasks) => {
      const updatedTasks = currentTasks.filter((task) => task.categoryId !== id);
      localStorage.setItem("TASKS", JSON.stringify(updatedTasks));
      return updatedTasks;
    });

    setSelectedCategory(null);

  }

  // Clear Completed Tasks in A Category
  export function clearCompleted(setTasks, id) {
    setTasks((currentTasks) => {
      const updatedTasks = currentTasks.filter((task) => task.categoryId !== id || !task.completed);
      localStorage.setItem("TASKS", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  }