export default function useTodo() {
  const listTodo = [
    {
      id: 2,
      todo: 'Memorize the fifty states and their capitals',
      completed: false,
      userId: 48,
    },
    {
      id: 4,
      todo: 'Contribute code or a monetary donation to an open-source software project',
      completed: false,
      userId: 48,
    },
    {
      id: 102,
      todo: 'Organize a bookshelf',
      completed: false,
      userId: 48,
    },
    {
      id: 140,
      todo: 'Write a short story',
      completed: true,
      userId: 48,
    },
  ]

  return { listTodo }
}
