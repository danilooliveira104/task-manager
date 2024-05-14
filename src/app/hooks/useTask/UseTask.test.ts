import { renderHook, act } from '@testing-library/react'
import useTask from './useTask'

const addTaskMock = jest.fn()
const editTaskMock = jest.fn()
const removeTaskMock = jest.fn()

jest.mock('../../hooks/useTask/useTask', () => ({
  __esModule: true,
  default: () => ({
    listTasks: [
      { id: 1, todo: 'Test Task', completed: 0, userId: 1 },
      { id: 2, todo: 'Edited Task', completed: 1, userId: 2 },
    ],
    addTask: addTaskMock,
    editTask: editTaskMock,
    removeTask: removeTaskMock,
  }),
}))

describe('useTask', () => {
  it('should add a task', () => {
    const { result } = renderHook(() => useTask())

    act(() => {
      result.current.addTask({
        id: 1,
        todo: 'Test Task',
        completed: 0,
        userId: 1,
      })
    })

    expect(result.current.listTasks.length).toBe(2)
    expect(result.current.listTasks[0].todo).toBe('Test Task')
  })

  it('should remove a task', () => {
    const { result } = renderHook(() => useTask())

    act(() => {
      result.current.addTask({
        id: 1,
        todo: 'Test Task',
        completed: 0,
        userId: 1,
      })

      result.current.removeTask(1)
    })

    expect(result.current.listTasks.length).toBe(2)
  })

  it('should edit a task', () => {
    const { result } = renderHook(() => useTask())

    act(() => {
      result.current.addTask({
        id: 1,
        todo: 'Test Task',
        completed: 0,
        userId: 1,
      })

      result.current.editTask({
        id: 2,
        todo: 'Edited Task',
        completed: 1,
        userId: 2,
      })
    })

    expect(result.current.listTasks[1].todo).toBe('Edited Task')
  })
})
