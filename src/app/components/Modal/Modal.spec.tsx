import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import Modal from './Modal'

describe('Modal', () => {
  const title = 'Test Modal'
  const isOpen = true
  const children = <p>Modal Content</p>
  const setIsOpen = jest.fn()

  it('shuld render correctly with props passed', () => {
    render(
      <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </Modal>,
    )
  })

  it('shuld render title', () => {
    const { getByTestId } = render(
      <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </Modal>,
    )

    const titleElement = getByTestId('modal-title')
    expect(titleElement).toBeInTheDocument()
  })

  it('shuld render content', () => {
    const { getByTestId } = render(
      <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </Modal>,
    )

    const contentElement = getByTestId('modal-content')
    expect(contentElement).toBeInTheDocument()
  })

  it('shuld render as drawer', () => {
    const { getByTestId } = render(
      <Modal
        title={title}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDrawer={true}
      >
        {children}
      </Modal>,
    )

    const modalContainer = getByTestId('modal-container')
    expect(modalContainer).toHaveClass('h-screen')
    expect(modalContainer).toHaveClass('right-0')
    expect(modalContainer).toHaveClass('lg:rounded-l-lg')
    expect(modalContainer).toHaveClass('lg:w-1/3')
  })

  it('should render as not drawer', () => {
    const { getByTestId } = render(
      <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </Modal>,
    )

    const modalContainer = getByTestId('modal-container')

    expect(modalContainer).toHaveClass('lg:rounded-lg')
    expect(modalContainer).toHaveClass('lg:w-1/3')
    expect(modalContainer).toHaveClass('lg:h-fit')
  })

  it('shuld render close button', () => {
    const { getByTestId } = render(
      <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </Modal>,
    )

    const closeButton = getByTestId('modal-close-button')
    expect(closeButton).toBeInTheDocument()

    fireEvent.click(closeButton)
    expect(setIsOpen).toHaveBeenCalledWith(false)
  })
})
