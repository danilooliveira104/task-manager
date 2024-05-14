import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import TaskList from './TaskList'

const removeTaskMock = jest.fn()

jest.mock('../../hooks/useTask/useTask', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    listTask: [{ id: 1, todo: 'Todo test 1', completed: 0, userId: 1 }],
    removeTask: removeTaskMock,
  })),
}))

jest.mock('../../hooks/useUsers/useUsers', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    listUsers: [{ id: 1, firstName: 'John', lastName: 'Doe' }],
  })),
}))

describe('TaskList', () => {
  const items = [{ id: 1, todo: 'Task 1', completed: 1, userId: 1 }]

  it('should render task id', () => {
    const { getByTestId } = render(<TaskList items={items} />)

    const taskListId = getByTestId('task-list-id')
    expect(taskListId.textContent).toBe('1')

    const taskListTodo = getByTestId('task-list-todo')
    expect(taskListTodo.textContent).toBe('Task 1')
  })

  it('should render not found tasks', () => {
    const { getByText } = render(<TaskList items={[]} />)

    const textNotFoundElement = getByText('No tasks found')
    expect(textNotFoundElement).toBeInTheDocument()
  })

  it('should delete task', () => {
    const { getByTestId } = render(<TaskList items={items} />)
    const deleteButton = getByTestId('delete-button')
    fireEvent.click(deleteButton)
    const confirmButton = getByTestId('confirm-delete-button')
    fireEvent.click(confirmButton)
    expect(removeTaskMock).toHaveBeenCalledWith(items[0].id)
  })
})
