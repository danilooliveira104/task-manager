interface StatusTaskProps {
  status: boolean
}

export default function StatusTask({ status }: StatusTaskProps) {
  return (
    <div
      className={`px-2 py-2 text-white rounded-lg text-xs font-medium flex justify-center items-center ${status ? 'bg-green-staus' : 'bg-red-400'}`}
    >
      {status ? 'Completed' : 'Not Completed'}
    </div>
  )
}
