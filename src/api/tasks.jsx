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
            notes: "",          
          }
        ]
      })
    }


// Toggle Completed
export function toggleTaskCompleted(setTasks, id, categoryId) {
  setTasks((currentTasks) => {
    return currentTasks.map((task) => {
      if (task.id === id && task.categoryId === categoryId) {
        return {
          ...task, 
          completed: !task.completed,
        };
      }
      return task;
    })
  })
}