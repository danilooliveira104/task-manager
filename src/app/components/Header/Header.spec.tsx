import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  test('renders logo', () => {
    render(<Header />)
    const logo = screen.getByAltText('logo')
    expect(logo).toBeInTheDocument()
  })
})
