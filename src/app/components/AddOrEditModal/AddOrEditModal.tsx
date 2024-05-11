import { useState } from 'react'
import Modal from '../Modal/Modal'
import StatusTask from '../StatusTask/StatusTask'
import UserAvatar from '../UseAvatar/UseAvatar'
import { useForm } from 'react-hook-form'

interface AddOrEditModalProps {
  modalIsOpen: boolean
  setModalIsOpen: (modalIsOpen: boolean) => void
  id?: number
}

interface TaskProps {
  responsible: number
  status: boolean | string
  objective: string
}

export default function AddOrEditModal({
  modalIsOpen,
  setModalIsOpen,
  id,
}: AddOrEditModalProps) {
  const initialTaskState: TaskProps = {
    responsible: 0,
    status: false,
    objective: '',
  }

  const { register, handleSubmit, watch, reset } = useForm<TaskProps>()
  const [task, setTask] = useState<TaskProps>(initialTaskState)

  const showTask = {
    status: watch('status') === 'true',
    objective: watch('objective'),
    responsible: watch('responsible'),
  }

  function handleFormTask(data: TaskProps) {
    setTask(data)
    localStorage.setItem('teste', JSON.stringify(data))
    reset()
  }

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
            <StatusTask status={showTask.status}></StatusTask>
          </div>

          <p className="my-4 text-default">{showTask.objective}</p>

          <div className="flex justify-between items-center">
            <UserAvatar id={showTask.responsible} />
            <p className="bg-default text-white p-1 px-2 text-sm rounded-lg">
              {id ? 'Editing task' : 'Adding task'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleFormTask)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Responsible
            </label>
            <input
              className="shadow border border-gray-200 text-sm rounded-lg block w-full p-2.5"
              id="responsible"
              type="number"
              placeholder="Write here"
              {...register('responsible', { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Status
            </label>
            <select
              id="status"
              className="shadow border border-gray-200 text-sm rounded-lg block w-full p-2.5"
              defaultValue={'default'}
              {...register('status', { required: true })}
            >
              <option value="default">Choose a status</option>
              <option value={`${true}`}>Completed</option>
              <option value={`${false}`}>Not Completed</option>
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
              {...register('objective', { required: true })}
            />
          </div>
          <button
            className="shadow px-4 py-2 w-fit text-white bg-default text-sm rounded-md font-medium flex items-center"
            type="submit"
          >
            <img
              src={`/image/icon-${id ? `edit-white` : 'add'}.png`}
              alt=""
              className="pr-1 w-6"
            />
            <span className="capitalize">{id ? `edit` : 'add'} task</span>
          </button>
        </form>
      </div>
    </Modal>
  )
}
