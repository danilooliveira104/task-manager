interface StatusTaskProps {
  status: number
}

export default function StatusTask({ status }: StatusTaskProps) {
  let statusText
  let statusColor

  switch (status) {
    case 0:
      statusText = 'Pending'
      statusColor = 'bg-red-400'
      break
    case 1:
      statusText = 'In Progress'
      statusColor = 'bg-yellow-400'
      break
    case 2:
      statusText = 'Completed'
      statusColor = 'bg-green-400'
      break
  }

  return (
    <div
      className={`px-2 py-2 text-white rounded-lg text-xs font-medium flex justify-center items-center ${statusColor}`}
    >
      {statusText}
    </div>
  )
}
