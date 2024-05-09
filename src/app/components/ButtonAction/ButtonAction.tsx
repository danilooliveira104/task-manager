'use client'
import { useState } from 'react'
import Modal from '../Modal/Modal'

interface ButtonActionProps {
  id: number
  view?: boolean
}

export default function ButtonAction({ id, view = true }: ButtonActionProps) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  return (
    <div>
      <Modal
        title="Modal teste"
        isDrawer={true}
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
      >
        <h1>Olá, sou o conteúdo do modal</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          fermentum, elit eget tincidunt pharetra, est felis luctus enim, sit
          amet posuere erat libero vitae ante.
        </p>
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
      </Modal>

      {view ? (
        <button
          className="pr-2"
          task-id={id}
          onClick={() => setModalIsOpen(true)}
        >
          <img
            className="lg:w-5 w-7"
            src="/image/icon-view.png"
            alt="olho"
          ></img>
        </button>
      ) : null}
      <button className="pr-2">
        <img
          className="lg:w-5 w-7"
          src="/image/icon-edit.png"
          alt="lapis de edição"
        ></img>
      </button>
      <button className="pr-2">
        <img
          className="lg:w-5 w-7"
          src="/image/icon-delete.png"
          alt="lixeira"
        ></img>
      </button>
    </div>
  )
}
