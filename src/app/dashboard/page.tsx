import Link from 'next/link'
import useTodo from '../hooks/useTodo'

interface listTodo {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export default function Dashboard() {
  const { listTodo } = useTodo()

  return (
    <div className="mt-2">
      <h1>Dashboard</h1>
      <ul>
        {listTodo.map((item: listTodo, index: number) => {
          return (
            <li key={index}>
              <p>{item.todo}</p>
              <p>{item.completed ? 'Finalizado' : 'Em andamento'}</p>
            </li>
          )
        })}
      </ul>
      <Link href="/">Home</Link>
    </div>
  )
}
