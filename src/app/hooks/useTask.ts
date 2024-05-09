export default function useTask() {
  const listTask = [
    {
      id: 1,
      task: 'Do something nice for someone I care about',
      completed: true,
      userId: 26,
    },
    {
      id: 2,
      task: 'Memorize the fifty states and their capitals',
      completed: false,
      userId: 48,
    },
    {
      id: 3,
      task: 'Watch a classic movie',
      completed: false,
      userId: 4,
    },
    {
      id: 4,
      task: 'Contribute code or a monetary donation to an open-source software project',
      completed: false,
      userId: 48,
    },
    {
      id: 5,
      task: "Solve a Rubik's cube",
      completed: false,
      userId: 31,
    },
    {
      id: 6,
      task: 'Bake pastries for me and neighbor',
      completed: false,
      userId: 39,
    },
    {
      id: 7,
      task: 'Go see a Broadway production',
      completed: false,
      userId: 32,
    },
    {
      id: 8,
      task: 'Write a thank you letter to an influential person in my life',
      completed: true,
      userId: 150,
    },
  ]

  return { listTask }
}
