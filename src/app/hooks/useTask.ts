import { create } from 'zustand'
import { ItemTaskProps } from '@type/types'

interface UseTaskProps {
  listTask: ItemTaskProps[]
  addTask: (task: ItemTaskProps) => void
  removeTask: (id: number) => void
  editTask: (task: ItemTaskProps) => void
}

const useTask = create<UseTaskProps>((set) => {
  fetch('https://dummyjson.com/todos?limit=5').then((response) => {
    response.json().then((data) => {
      set({ listTask: data.todos })
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
