import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import Dashboard from './page'

jest.mock('../../hooks/useTask/useTask', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    listTask: [{ id: 1, todo: 'Todo test 1', completed: 0, userId: 1 }],
  })),
}))

jest.mock('../../hooks/useUsers/useUsers', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    listUsers: [{ id: 1, firstName: 'John', lastName: 'Doe' }],
  })),
}))

describe('Dashboard', () => {
  test('should open modal when click on button add-task-button', () => {
    const { getByText, getByTestId } = render(<Dashboard />)
    const addButton = getByTestId('add-task-button')
    fireEvent.click(addButton)

    const modalTitle = getByText('Add new task')
    expect(modalTitle).toBeInTheDocument()
  })
})
