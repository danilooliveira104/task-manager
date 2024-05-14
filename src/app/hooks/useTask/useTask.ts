import { create } from 'zustand'
import { ItemTaskProps } from '@models/types'

interface UseTaskProps {
  listTasks: ItemTaskProps[]
  addTask: (task: ItemTaskProps) => void
  removeTask: (id: number) => void
  editTask: (task: ItemTaskProps) => void
}

interface listTasksFetchProps {
  id: number
  todo: string
  completed: boolean
  userId: number
}

const useTask = create<UseTaskProps>((set) => {
  fetch('https://dummyjson.com/todos?limit=5').then((response) => {
    response.json().then((data) => {
      const listTasks = data.todos.map((task: listTasksFetchProps) => {
        const completed = task.completed === true ? 2 : 0

        return {
          id: task.id,
          todo: task.todo,
          completed,
          userId: task.userId,
        }
      })

      set({ listTasks })
    })
  })

  return {
    listTasks: [],
    addTask: (task) =>
      set((state) => ({ listTasks: [...state.listTasks, task] })),
    editTask: (task) =>
      set((state) => ({
        listTasks: state.listTasks.map((currentTask) =>
          currentTask.id === task.id ? task : currentTask,
        ),
      })),
    removeTask: (id) =>
      set((state) => ({
        listTasks: state.listTasks.filter((task) => task.id !== id),
      })),
  }
})

export default useTask
