import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ButtonAction from './ButtonAction'

describe('ButtonAction', () => {
  test('should call handleClick and getId with correct arguments when edit button is clicked', () => {
    const handleClickMock = jest.fn()
    const getIdMock = jest.fn()
    const getActionMock = jest.fn()

    render(
      <ButtonAction
        id={1}
        handleClick={handleClickMock}
        getId={getIdMock}
        getAction={getActionMock}
      />,
    )

    const editButton = screen.getByAltText('lapis de edição')
    editButton.click()

    expect(handleClickMock).toHaveBeenCalledWith(true)
    expect(getIdMock).toHaveBeenCalledWith(1)
    expect(getActionMock).toHaveBeenCalledWith('edit')
  })

  test('should call handleClick and getId with correct arguments when delete button is clicked', () => {
    const handleClickMock = jest.fn()
    const getIdMock = jest.fn()
    const getActionMock = jest.fn()

    render(
      <ButtonAction
        id={2}
        handleClick={handleClickMock}
        getId={getIdMock}
        getAction={getActionMock}
      />,
    )

    const deleteButton = screen.getByAltText('lixeira')
    deleteButton.click()

    expect(handleClickMock).toHaveBeenCalledWith(true)
    expect(getIdMock).toHaveBeenCalledWith(2)
    expect(getActionMock).toHaveBeenCalledWith('delete')
  })
})
