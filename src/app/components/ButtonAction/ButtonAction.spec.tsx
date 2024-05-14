import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { beforeEach } from 'node:test'
import ButtonAction from './ButtonAction'

describe('KebabMenu', () => {
  const handleClick = jest.fn()
  const setId = jest.fn()
  const setAction = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call correct functions on edit-button click', () => {
    const { getByTestId } = render(
      <ButtonAction
        id={1}
        handleClick={handleClick}
        setId={setId}
        setAction={setAction}
      />,
    )

    const buttonEdit = getByTestId('edit-button')
    fireEvent.click(buttonEdit)

    expect(setId).toHaveBeenNthCalledWith(1, 1)
    expect(handleClick).toHaveBeenNthCalledWith(1, true)
    expect(setAction).toHaveBeenNthCalledWith(1, 'edit')
  })

  it('should call correct functions on delete-button click', () => {
    const { getByTestId } = render(
      <ButtonAction
        id={1}
        handleClick={handleClick}
        setId={setId}
        setAction={setAction}
      />,
    )

    const buttonDelete = getByTestId('delete-button')
    fireEvent.click(buttonDelete)

    expect(setId).toHaveBeenNthCalledWith(2, 1)
    expect(handleClick).toHaveBeenNthCalledWith(2, true)
    expect(setAction).toHaveBeenNthCalledWith(2, 'delete')
  })
})
