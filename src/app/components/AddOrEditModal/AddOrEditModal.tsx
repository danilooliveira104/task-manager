import useTask from '@hooks/useTask/useTask'
import Modal from '@components/Modal/Modal'
import StatusTask from '@components/StatusTask/StatusTask'
import { useForm } from 'react-hook-form'
import { ItemTaskProps } from '@models/types'
import generateIdTask from '@utils/generateIdTask'
import { useEffect } from 'react'
import useUsers from '@hooks/useUsers'
import Avatar from '@components/Avatar/Avatar'

interface AddOrEditModalProps {
  modalIsOpen: boolean
  setModalIsOpen: (modalIsOpen: boolean) => void
  id?: number
}

interface ItemTaskFormProps {
  todo: string
  completed: number | string
  userId: number | string
}

export default function AddOrEditModal({
  modalIsOpen,
  setModalIsOpen,
  id,
}: AddOrEditModalProps) {
  const { register, handleSubmit, watch, reset, setValue } =
    useForm<ItemTaskFormProps>()
  const { listTask, addTask, editTask } = useTask()
  const { listUsers } = useUsers()

  const showTask = {
    completed: watch('completed'),
    todo: watch('todo'),
    userId: watch('userId'),
  }

  function handleFormTask(data: ItemTaskFormProps) {
    const { todo, completed, userId } = data

    const task: ItemTaskProps = {
      id: id || generateIdTask(listTask),
      completed: parseInt(completed as string),
      todo,
      userId: Number(userId),
    }

    if (id) {
      editTask({ ...task })
    } else {
      addTask({ ...task })
    }
    reset()
    setModalIsOpen(false)
  }

  const fillingInputForEditing = () => {
    if (id) {
      const taskToEdit = listTask.find(
        (ItemTaskProps: ItemTaskProps) => ItemTaskProps.id === id,
      )
      setValue('completed', taskToEdit?.completed as number)
      setValue('todo', taskToEdit?.todo ? taskToEdit?.todo : '')
      setValue('userId', taskToEdit?.userId ? taskToEdit?.userId : '0')
    }
  }

  useEffect(() => {
    fillingInputForEditing()
  }, [modalIsOpen === true])

  return (
    <Modal
      title={id ? 'Edit task' : 'Add new task'}
      isDrawer={true}
      isOpen={modalIsOpen}
      setIsOpen={setModalIsOpen}
    >
      <div className="w-full max-full">
        <div
          key={id}
          className="my-4 shadow-md rounded-xl bg-white text-default p-4 border-gray-200 border"
        >
          <div className="flex justify-between items-center">
            <p className="p-1 bg-default text-white roundedfont-semibold text-sm rounded-lg">
              Task ID: {id}
            </p>
            <StatusTask
              status={parseInt(showTask.completed as string)}
            ></StatusTask>
          </div>

          <p className="my-4 text-default">{showTask.todo}</p>

          <div className="flex justify-between items-center">
            <Avatar
              showName
              id={
                typeof showTask.userId === 'string'
                  ? parseInt(showTask.userId)
                  : showTask.userId
              }
            />
            <p className="bg-default text-white p-1 px-2 text-sm rounded-lg">
              Task Preview
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleFormTask)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Responsible
            </label>
            <select
              id="status"
              className="shadow border border-gray-200 text-sm rounded-lg block w-full p-2.5"
              {...register('userId', {
                required: true,
                validate: (value) => value !== '0',
              })}
            >
              <option key={0} value={0}>
                Choose responsible
              </option>
              {listUsers.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Status
            </label>
            <select
              id="status"
              className="shadow border border-gray-200 text-sm rounded-lg block w-full p-2.5"
              {...register('completed', { required: true })}
            >
              <option value="0">Pending</option>
              <option value="1">In Progress</option>
              <option value="2">Completed</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Objective
            </label>
            <textarea
              className="shadow border border-gray-200 text-sm rounded-lg block w-full p-2.5"
              id="objective"
              placeholder="Write here"
              {...register('todo', { required: true })}
            />
          </div>
          <button
            className="shadow px-4 py-2 w-fit text-white bg-default text-sm rounded-md font-medium flex items-center"
            type="submit"
          >
            <img
              src={`/images/icon-${id ? `edit-white` : 'add'}.png`}
              alt=""
              className="pr-1 w-6"
            />
            <span className="capitalize">Confirm {id ? `edit` : 'add'}</span>
          </button>
        </form>
      </div>
    </Modal>
  )
}
