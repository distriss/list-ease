// Add Task
  export function addTask(setTasks, title) {
      setTasks(currentTasks => {
        return [
          ...currentTasks,
          { id: crypto.randomUUID(),
            title: title,
            categoryId: null,
            createdAt: Date.now(),
            priority: false,
            completed: false,
          
          }
        ]
      })
    }


// Toggle Task
  export function toggleTask(setTasks, id, priority) {
    setTasks(currentTasks => {
        return currentTasks.map(task => {
            if(task.id === id) {
                return {...task, priority}
            }
    
            return task;
        })
    })
  }

// Move Task
  export function moveTask(setTasks, taskId, newCategoryId) {
    setTasks(currentTasks => {
        return currentTasks.map(task => {
            if (task.id === taskId) {
                return {...task, categoryId: newCategoryId };
            }
            return task;
        });
    });
  }


// Delete Task
  export function deleteCategory(setTasks, id) {
    setTasks(currentTasks => {
        return currentTasks.filter(task => task.id !== id)
    })
  }

