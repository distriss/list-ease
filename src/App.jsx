import { useEffect, useState } from 'react'
import './style.css'
import { NewTaskCategory } from './components/NewTaskCategory'
import { CategoryList } from "./components/CategoryList"

function App() {
  const [categories, setCategories] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)

  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(categories))
  }, [categories]) 

  function addCategory(title) {
    setCategories(currentCategories => {
      return [
        ...currentCategories, 
        { id: crypto.randomUUID(), 
          title,
          tasks: [], 
          createdAt: Date.now(),
          priority: false
        }
      ]
    })
  }

  function toggleCategory(id, priority) {
    setCategories(currentCategories => {
      return currentCategories.map(category => {
        if(cateogory.id === id) {
          return {...category, priority}
        }

        return category
      })
    })
  }

  function deleteCategory(id) {
    setCategories(currentCategories => {
      return currentCategories.filter(cateogory => category.id !== id)
    })
  }

  return (
    <>
    <div className="todoapp stack-large">
      <h1>ListEase</h1>
      <NewTaskCategory onSubmit={addCategory} />
      
    </div>
    </>
  );
}

export default App
