import { create } from 'zustand'
import { ItemTaskProps } from '@models/types'

interface UseTaskProps {
  listTask: ItemTaskProps[]
  addTask: (task: ItemTaskProps) => void
  removeTask: (id: number) => void
  editTask: (task: ItemTaskProps) => void
}

interface ListTaskFetchProps {
  id: number
  todo: string
  completed: boolean
  userId: number
}

const useTask = create<UseTaskProps>((set) => {
  fetch('https://dummyjson.com/todos?limit=5').then((response) => {
    response.json().then((data) => {
      const listTask = data.todos.map((task: ListTaskFetchProps) => {
        const completed = task.completed === true ? 2 : 0

        return {
          id: task.id,
          todo: task.todo,
          completed,
          userId: task.userId,
        }
      })

      set({ listTask })
    })
  })

  return {
    listTask: [],
    addTask: (task) =>
      set((state) => ({ listTask: [...state.listTask, task] })),
    editTask: (task) =>
      set((state) => ({
        listTask: state.listTask.map((currentTask) =>
          currentTask.id === task.id ? task : currentTask,
        ),
      })),
    removeTask: (id) =>
      set((state) => ({
        listTask: state.listTask.filter((task) => task.id !== id),
      })),
  }
})

export default useTask
