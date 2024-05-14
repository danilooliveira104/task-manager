import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { beforeEach } from 'node:test'
import ButtonAction from './ButtonAction'

describe('KebabMenu', () => {
  const handleClick = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call correct functions on edit-button click', () => {
    const { getByTestId } = render(<ButtonAction handleClick={handleClick} />)

    const buttonEdit = getByTestId('edit-button')
    fireEvent.click(buttonEdit)

    expect(handleClick).toHaveBeenNthCalledWith(1, true, 'edit')
  })

  it('should call correct functions on delete-button click', () => {
    const { getByTestId } = render(<ButtonAction handleClick={handleClick} />)

    const buttonDelete = getByTestId('delete-button')
    fireEvent.click(buttonDelete)

    expect(handleClick).toHaveBeenNthCalledWith(2, true, 'delete')
  })
})
