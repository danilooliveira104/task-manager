interface ButtonActionProps {
  id: number
  handleClick: (click: boolean) => void
  getId: (id: number) => void
  getAction: (action: 'edit' | 'delete') => void
}

export default function ButtonAction({
  id,
  handleClick,
  getAction,
  getId,
}: ButtonActionProps) {
  return (
    <div>
      <button
        className="pr-2"
        onClick={() => {
          getId(id)
          handleClick(true)
          getAction('edit')
        }}
      >
        <img
          className="lg:w-5 w-7"
          src={`/images/icon-edit.png`}
          alt="lapis de edição"
        ></img>
      </button>
      <button
        className="pr-2"
        onClick={() => {
          getId(id)
          handleClick(true)
          getAction('delete')
        }}
      >
        <img
          className="lg:w-5 w-7"
          src={`/images/icon-delete.png`}
          alt="lixeira"
        ></img>
      </button>
    </div>
  )
}
