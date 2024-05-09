'use client'
import useTask from '../hooks/useTask'
import TaskList from '../components/TaskList/TaskList'
import Modal from '../components/Modal/Modal'
import { useState } from 'react'

export default function Dashboard() {
  const { listTask } = useTask()

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  return (
    <>
      <Modal
        title="Add new task"
        isDrawer={true}
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
      >
        <h1>Olá, sou o conteúdo do modal</h1>
      </Modal>

      <div className="p-8 bg-light-gray h-screen-header overflow-hidden">
        <div className="flex justify-between items-center">
          <h1 className="lg:text-3xl text-2xl font-bold text-gray-800">
            Dashboard
          </h1>
          <button
            onClick={() => setModalIsOpen(true)}
            className="shadow px-4 py-2 w-fit text-white bg-default text-sm rounded-md font-medium flex items-center"
          >
            <img src="/image/icon-add.png" alt="" className="pr-1 w-6" />
            Add new task
          </button>
        </div>
        <TaskList items={listTask} />
      </div>
    </>
  )
}
