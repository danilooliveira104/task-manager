import UserAvatar from '../UseAvatar/UseAvatar'
import ButtonAction from '../ButtonAction/ButtonAction'
import StatusTask from '../StatusTask/StatusTask'
import { isMobile } from 'react-device-detect'

interface Item {
  id: number
  task: string
  completed: boolean
  userId: number
}

interface TaskListProps {
  items: Item[]
}

export default function TaskList({ items }: TaskListProps) {
  return (
    <div className="p-8 mt-4 shadow-xl rounded-xl bg-white overflow-y-scroll lg:overflow-y-auto max-h-2/9/10">
      {!isMobile ? (
        <table className="w-full">
          <thead>
            <tr className="bg-default text-white">
              <th className="text-left p-2 rounded-l-xl">
                <img
                  src="/image/icon-task.png"
                  alt="caderneta de tarefas"
                  width="20px"
                ></img>
              </th>
              <th className="text-left p-2">Objective</th>
              <th className="text-center p-2">Status</th>
              <th className="text-center p-2">Assignee</th>
              <th className="text-center p-2 rounded-r-xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id} className="border-b">
                  <td className="p-2">{item.id}</td>
                  <td className="p-2">{item.task}</td>
                  <td className="p-2 text-center">
                    <StatusTask status={item.completed}></StatusTask>
                  </td>
                  <td className="p-2 flex justify-center items-center">
                    <UserAvatar id={item.userId} />
                  </td>
                  <td className="p-2 text-center">
                    <ButtonAction id={item.id} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        items.map((item) => {
          return (
            <div
              key={item.id}
              className="mt-4 shadow-md rounded-xl bg-white p-4 border-gray-200 border"
            >
              <div className="flex justify-between items-center">
                <p className="p-1 bg-default rounded text-white font-semibold text-sm">
                  {' '}
                  Task ID: {item.id}
                </p>
                <StatusTask status={item.completed}></StatusTask>
              </div>

              <p className="my-4">{item.task}</p>

              <div className="flex justify-between items-center">
                <UserAvatar id={item.userId} />
                <ButtonAction id={item.id} />
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
