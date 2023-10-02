// Add Task
  export function addTask(setTasks, title, taskId) {
      setTasks(currentTasks => {
        return [
          ...currentTasks,
          { id: crypto.randomUUID(),
            title: title,
            taskId: taskId,
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
  export function moveTask(setTasks, id, newtaskId) {
    setTasks(currentTasks => {
        return currentTasks.map(task => {
            if (task.id === id) {
                return {...task, taskId: newtaskId };
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

  
  // Toggle Priority
  export function togglePriority(setTasks, tasks, id) {
    const taskPriority = tasks.find((task) => task.id === id)
    if (taskPriority) {
      const updatedtask = { ...taskPriority, priority: !taskPriority}
      const updatedtasks = tasks.map((task) =>
      task.id === id ? updatedtask : task
    );
    setTasks(updatedtasks);
    }
  }
