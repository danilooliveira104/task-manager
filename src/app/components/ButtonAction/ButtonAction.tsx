interface ButtonActionProps {
  id: number
  handleClick: (click: boolean) => void
  setId: (id: number) => void
  setAction: (action: 'edit' | 'delete') => void
}

export default function ButtonAction({
  id,
  handleClick,
  setAction,
  setId,
}: ButtonActionProps) {
  return (
    <div>
      <button
        data-testid="edit-button"
        className="pr-2"
        onClick={() => {
          setId(id)
          handleClick(true)
          setAction('edit')
        }}
      >
        <img
          className="lg:w-5 w-7"
          src={`/images/icon-edit.png`}
          alt="lapis de edição"
        ></img>
      </button>
      <button
        data-testid="delete-button"
        className="pr-2"
        onClick={() => {
          setId(id)
          handleClick(true)
          setAction('delete')
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
