import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Avatar from './Avatar'
import { beforeEach } from 'node:test'

jest.mock('../../hooks/useUsers/useUsers', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    listUsers: [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
    ],
  })),
}))

describe('Avatar component', () => {
  const urlImg = `https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${1}`

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    render(<Avatar id={1} />)
  })

  it('renders avatar with name when showName prop is true', () => {
    const { getByTestId } = render(<Avatar id={1} showName />)
    const avatarImg = getByTestId('img-avatar')
    const nameElement = getByTestId('user-name')

    expect(avatarImg).toHaveAttribute('src', urlImg)
    expect(nameElement).toBeInTheDocument()
    expect(nameElement.textContent).toBe('John Doe')
  })

  it('renders avatar without name when showName prop is false', () => {
    const { getByTestId, queryByText } = render(<Avatar id={1} />)
    const avatarImg = getByTestId('img-avatar')
    const nameElement = queryByText('John Doe')

    expect(avatarImg).toHaveAttribute('src', urlImg)
    expect(nameElement).toBeNull()
  })
})
