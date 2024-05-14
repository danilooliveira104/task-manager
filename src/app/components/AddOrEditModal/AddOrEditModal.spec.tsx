import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddOrEditModal from './AddOrEditModal'

const addTaskMock = jest.fn()
const editTaskMock = jest.fn()

// Mocking the useTask and useUsers hooks
jest.mock('../../hooks/useTask/useTask', () => ({
  __esModule: true,
  default: () => ({
    listTasks: [{ id: 1, todo: 'Todo test 1', completed: 0, userId: 1 }],
    addTask: addTaskMock,
    editTask: editTaskMock,
  }),
}))

jest.mock('../../hooks/useUsers/useUsers', () => ({
  __esModule: true,
  default: () => ({
    listUsers: [{ id: 1, firstName: 'John', lastName: 'Doe' }],
  }),
}))

describe('AddOrEditModal', () => {
  it('should render with Add new task title when id is not provided', async () => {
    const { getByText } = render(
      <AddOrEditModal modalIsOpen={true} setModalIsOpen={jest.fn()} />,
    )

    expect(getByText('Add new task')).toBeInTheDocument()
    expect(getByText('Responsible')).toBeInTheDocument()
    expect(getByText('Status')).toBeInTheDocument()
    expect(getByText('Objective')).toBeInTheDocument()
    expect(getByText('Confirm add')).toBeInTheDocument()
  })

  it('should render with Edit task title when id is provided', async () => {
    const { getByText } = render(
      <AddOrEditModal modalIsOpen={true} setModalIsOpen={jest.fn()} id={1} />,
    )

    expect(getByText('Edit task')).toBeInTheDocument()
  })
})
