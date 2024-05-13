import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Avatar from '@components/Avatar/Avatar'

jest.mock('../../hooks/useUsers', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    listUsers: [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
    ],
  })),
}))

describe('Avatar component', () => {
  it('renders without crashing', () => {
    render(<Avatar id={1} />)
  })

  it('renders avatar with name when showName prop is true', () => {
    const { getByAltText, getByTestId } = render(<Avatar id={1} showName />)
    const avatarImg = getByAltText('Avatar-1')
    const nameElement = getByTestId('user-name')

    expect(avatarImg).toBeInTheDocument()
    expect(nameElement).toBeInTheDocument()
    expect(nameElement.textContent).toBe('John Doe')
  })

  it('renders avatar without name when showName prop is false', () => {
    const { getByAltText, queryByText } = render(<Avatar id={1} />)
    const avatarImg = getByAltText('Avatar-1')
    const nameElement = queryByText('John Doe')
    expect(avatarImg).toBeInTheDocument()
    expect(nameElement).toBeNull()
  })

  it('renders avatar without name when user data is not available', () => {
    const { getByAltText, queryByText } = render(<Avatar id={3} showName />)
    const avatarImg = getByAltText('Avatar-3')
    const nameElement = queryByText('John Doe')
    expect(avatarImg).toBeInTheDocument()
    expect(nameElement).toBeNull()
  })
})
