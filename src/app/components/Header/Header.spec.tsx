import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('should render logo and send to home', () => {
    const { getByTestId } = render(<Header />)

    const logo = getByTestId('logo')
    fireEvent.click(logo)

    expect(logo).toHaveAttribute('href', '/')
  })
})
