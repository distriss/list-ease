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


// Sort Task List
export function sortTaskList(tasks) {
  return tasks.slice().sort((taskA, taskB) => {
    if (taskA.priority && !taskB.priority) {
      return -1;
    }
    if (!taskA.priority && taskB.priority) {
      return 1;
    }
    return taskA.createdAt - taskB.createdAt;
  });
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

// Toggle Priority
export function toggleTaskPriority(setTasks, tasks, id, priority) {
  const updatedTasks = tasks.map((task) => task.id === id ? {...task, priority } : task);
  setTasks(updatedTasks)
}


// Delete Task
export function deleteTask(setTasks, id) {
  setTasks((currentTasks) => {
    const updatedTasks = currentTasks.filter(task => task.id !== id);
    localStorage.setItem("TASKS", JSON.stringify(updatedTasks));
    return updatedTasks;
  });
}
