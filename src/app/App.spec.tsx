import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from './page'

test('renders Welcome message', () => {
  render(<Home />)
  const linkElement = screen.getByText(/Welcome to task manager/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders Dashboard link', () => {
  render(<Home />)
  const linkElement = screen.getByRole('link', { name: /Dashboard/i })
  expect(linkElement).toBeInTheDocument()
  expect(linkElement.getAttribute('href')).toBe('/dashboard')
})
