import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import KebabMenu from './KebabMenu'
import { beforeEach } from 'node:test'

describe('KebabMenu', () => {
  const handleClick = jest.fn()
  const setId = jest.fn()
  const setAction = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call correct functions on button-edit click', () => {
    const { getByTestId } = render(
      <KebabMenu
        id={1}
        handleClick={handleClick}
        setId={setId}
        setAction={setAction}
      />,
    )

    const buttonMenu = getByTestId('options-menu')
    fireEvent.click(buttonMenu)

    const buttonEdit = getByTestId('button-edit')
    fireEvent.click(buttonEdit)

    expect(setId).toHaveBeenNthCalledWith(1, 1)
    expect(handleClick).toHaveBeenNthCalledWith(1, true)
    expect(setAction).toHaveBeenNthCalledWith(1, 'edit')
  })

  it('should call correct functions on button-delete click', () => {
    const { getByTestId } = render(
      <KebabMenu
        id={1}
        handleClick={handleClick}
        setId={setId}
        setAction={setAction}
      />,
    )

    const buttonMenu = getByTestId('options-menu')
    fireEvent.click(buttonMenu)

    const buttonDelete = getByTestId('button-delete')
    fireEvent.click(buttonDelete)

    expect(setId).toHaveBeenNthCalledWith(2, 1)
    expect(handleClick).toHaveBeenNthCalledWith(2, true)
    expect(setAction).toHaveBeenNthCalledWith(2, 'delete')
  })
})
