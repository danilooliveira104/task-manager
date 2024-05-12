import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';
import AddOrEditModal from './AddOrEditModal';

jest.mock('@hooks/useTask', () => ({
  useTask: jest.fn(() => ({
    listTask: [],
    addTask: jest.fn(),
    editTask: jest.fn(),
  })),
}));
jest.mock('@hooks/useUsers', () => ({
  useUsers: jest.fn(() => ({
    listUsers: [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
    ],
  })),
}));

describe('AddOrEditModal', () => {
  test('renders AddOrEditModal with correct title', () => {
    render(
      <AddOrEditModal modalIsOpen={ true} setModalIsOpen = { jest.fn() } />
    );
    expect(screen.getByText('Add new task')).toBeInTheDocument();
  });

  test('renders AddOrEditModal with edit title if id is provided', () => {
    render(
      <AddOrEditModal
        modalIsOpen={ true}
        setModalIsOpen = { jest.fn() }
        id = { 1}
      />
    );
    expect(screen.getByText('Edit task')).toBeInTheDocument();
  });

  test('renders AddOrEditModal with task data if id is provided', () => {
    render(
      <AddOrEditModal
        modalIsOpen={ true}
        setModalIsOpen = { jest.fn() }
        id = { 1}
      />
    );
    expect(screen.getByText('Task ID: 1')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    // Add more assertions based on your component UI
  });

  test('submits form with correct data', async () => {
    const mockSetModalIsOpen = jest.fn();
    render(
      <AddOrEditModal
        modalIsOpen={ true}
        setModalIsOpen = { mockSetModalIsOpen }
      />
    );

    fireEvent.change(screen.getByLabelText('Objective'), {
      target: { value: 'Test task' },
    });
    fireEvent.change(screen.getByLabelText('Responsible'), {
      target: { value: '1' },
    });
    fireEvent.change(screen.getByLabelText('Status'), {
      target: { value: 'true' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /confirm add/i }));

    await waitFor(() => {
      expect(mockSetModalIsOpen).toHaveBeenCalledWith(false);
      // Add more assertions based on your component behavior
    });
  });

  // Add more tests as needed
});
