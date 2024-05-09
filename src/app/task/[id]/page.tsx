interface TaskProps {
  params: {
    id: string
  }
}

export default function Task({ params }: TaskProps) {
  return (
    <>
      <h1>task number: {params.id}</h1>
    </>
  )
}
