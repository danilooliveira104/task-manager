import UserAvatar from '../UseAvatar/UseAvatar'
import ButtonAction from '../ButtonAction/ButtonAction'
import StatusTask from '../StatusTask/StatusTask'
import { isMobile } from 'react-device-detect'
import KebabMenu from '../KebabMenu/KebabMenu'
import AddOrEditModal from '../AddOrEditModal/AddOrEditModal'
import { useState } from 'react'
import Modal from '../Modal/Modal'

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
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [id, setId] = useState<number>(0)
  const [action, setAction] = useState<'edit' | 'delete'>('edit')

  const handleDelete = (id: number) => {
    console.log('item deletade', id)
  }

  return (
    <div className="p-8 mt-4 shadow-xl rounded-xl bg-white overflow-y-scroll lg:overflow-y-auto max-h-2/9/10">
      <AddOrEditModal
        modalIsOpen={action !== 'delete' ? modalIsOpen : false}
        setModalIsOpen={setModalIsOpen}
        id={id}
      />

      <Modal
        title="Confirm Deletion"
        isOpen={action === 'delete' ? modalIsOpen : false}
        setIsOpen={setModalIsOpen}
      >
        <p className="mb-4">Tem certeza de que deseja excluir este item?</p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
            onClick={() => setModalIsOpen(false)}
          >
            Cancelar
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={() => {
              handleDelete(id)
            }}
          >
            Confirmar
          </button>
        </div>
      </Modal>

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
              <th className="text-center p-2">Responsible</th>
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
                    <ButtonAction
                      id={item.id}
                      handleClick={(isOpen) => setModalIsOpen(isOpen)}
                      getId={(id) => setId(id)}
                      getAction={(action) => setAction(action)}
                    />
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
              className="mt-4 shadow-md rounded-xl bg-default p-4 border-gray-200 border"
            >
              <div className="flex justify-between items-center">
                <p className="p-1 text-default rounded bg-white font-semibold text-sm">
                  Task ID: {item.id}
                </p>
                <StatusTask status={item.completed}></StatusTask>
              </div>

              <p className="my-4 text-white">{item.task}</p>

              <div className="flex justify-between items-center">
                <UserAvatar id={item.userId} />
                <KebabMenu
                  id={item.id}
                  handleClick={(isOpen) => setModalIsOpen(isOpen)}
                  getId={(id) => setId(id)}
                  getAction={(action) => setAction(action)}
                />
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
