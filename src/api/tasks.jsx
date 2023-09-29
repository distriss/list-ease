// Add Task
  export function addTask(setTasks, title, categoryId) {
      setTasks(currentTasks => {
        return [
          ...currentTasks,
          { id: crypto.randomUUID(),
            title: title,
            categoryId: categoryId,
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
  export function moveTask(setTasks, id, newCategoryId) {
    setTasks(currentTasks => {
        return currentTasks.map(task => {
            if (task.id === id) {
                return {...task, categoryId: newCategoryId };
            }
            return task;
        });
    });
  }


// Delete Task
  export function deleteTask(setTasks, id) {
    const idStr = JSON.stringify(id)
    console.log(`deleting task with id ${idStr}`)
    setTasks(currentTasks => {
        return currentTasks.filter(task => task.id !== id)
    })
    localStorage.removeItem(idStr);
  }

