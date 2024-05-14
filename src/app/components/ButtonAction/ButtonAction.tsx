interface ButtonActionProps {
  handleClick: (click: boolean, action: 'edit' | 'delete') => void
}

export default function ButtonAction({ handleClick }: ButtonActionProps) {
  return (
    <div>
      <button
        data-testid="edit-button"
        className="pr-2"
        onClick={() => {
          handleClick(true, 'edit')
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
          handleClick(true, 'delete')
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
