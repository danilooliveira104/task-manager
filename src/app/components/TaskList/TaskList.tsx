import Avatar from '@components/Avatar/Avatar'
import ButtonAction from '@components/ButtonAction/ButtonAction'
import StatusTask from '@components/StatusTask/StatusTask'
import { isMobile } from 'react-device-detect'
import KebabMenu from '@components/KebabMenu/KebabMenu'
import AddOrEditModal from '@components/AddOrEditModal/AddOrEditModal'
import { useState } from 'react'
import Modal from '@components/Modal/Modal'
import { ItemTaskProps } from '@models/types'
import useTask from '@hooks/useTask/useTask'

interface TaskListProps {
  items: ItemTaskProps[]
}

export default function TaskList({ items }: TaskListProps) {
  const { removeTask } = useTask()
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [id, setId] = useState<number>(0)
  const [action, setAction] = useState<'edit' | 'delete'>('edit')

  const handleDelete = (id: number) => {
    removeTask(id)
    setModalIsOpen(false)
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
        data-testid="modal-delete"
      >
        <p className="mb-4">Are you sure you want to delete this item?</p>
        <div className="flex justify-start lg:justify-end pt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            data-testid="confirm-delete-button"
            onClick={() => {
              handleDelete(id)
            }}
          >
            Confirm
          </button>
        </div>
      </Modal>

      {items?.length === 0 ? (
        <p className="text-center text-default">No tasks found</p>
      ) : !isMobile ? (
        <table className="w-full">
          <thead>
            <tr className="bg-default text-white">
              <th className="text-left p-2 rounded-l-xl">
                <img
                  src="/images/icon-task.png"
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
            {items?.map((item) => {
              return (
                <tr key={item.id} className="border-b">
                  <td className="p-2" data-testid="task-list-id">
                    {item.id}
                  </td>
                  <td className="p-2" data-testid="task-list-todo">
                    {item.todo}
                  </td>
                  <td
                    className="p-2 text-center"
                    data-testid="task-list-status"
                  >
                    <StatusTask status={item.completed}></StatusTask>
                  </td>
                  <td
                    className="p-2 flex justify-center items-center"
                    data-testid="task-list-userid"
                  >
                    <Avatar id={item.userId} />
                  </td>
                  <td
                    className="p-2 text-center"
                    data-testid="task-list-actions"
                  >
                    <ButtonAction
                      id={item.id}
                      handleClick={(isOpen) => setModalIsOpen(isOpen)}
                      setId={(id) => setId(id)}
                      setAction={(action) => setAction(action)}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        items?.map((item) => {
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

              <p className="my-4 text-white">{item.todo}</p>

              <div className="flex justify-between items-center">
                <Avatar id={item.userId} showName={true} />
                <KebabMenu
                  id={item.id}
                  handleClick={(isOpen) => setModalIsOpen(isOpen)}
                  setId={(id) => setId(id)}
                  setAction={(action) => setAction(action)}
                />
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
