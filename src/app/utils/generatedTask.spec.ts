import generateIdTask from './generateIdTask'
import { ItemTaskProps } from '../models/types'

describe('generateIdTask function', () => {
  it('returns 1 when the list of tasks is empty', () => {
    const listTask: ItemTaskProps[] = []
    const generatedId = generateIdTask(listTask)
    expect(generatedId).toBe(1)
  })

  it('generates the next available id correctly when the list of tasks is not empty', () => {
    const listTask: ItemTaskProps[] = [
      { id: 1, todo: 'Task 1', completed: 0, userId: 1 },
      { id: 4, todo: 'Task 3', completed: 0, userId: 1 },
    ]
    const generatedId = generateIdTask(listTask)
    expect(generatedId).toBe(5)
  })
})
