import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import KebabMenu from './KebabMenu'
import { beforeEach } from 'node:test'

describe('KebabMenu', () => {
  const handleClick = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call correct functions on button-edit click', () => {
    const { getByTestId } = render(<KebabMenu handleClick={handleClick} />)

    const buttonMenu = getByTestId('options-menu')
    fireEvent.click(buttonMenu)

    const buttonEdit = getByTestId('button-edit')
    fireEvent.click(buttonEdit)

    expect(handleClick).toHaveBeenNthCalledWith(1, true, 'edit')
  })

  it('should call correct functions on button-delete click', () => {
    const { getByTestId } = render(<KebabMenu handleClick={handleClick} />)

    const buttonMenu = getByTestId('options-menu')
    fireEvent.click(buttonMenu)

    const buttonDelete = getByTestId('button-delete')
    fireEvent.click(buttonDelete)

    expect(handleClick).toHaveBeenNthCalledWith(2, true, 'delete')
  })
})
