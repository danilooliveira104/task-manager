interface Task {
  params: {
    id: string
  }
}

export default function Task({ params }: Task) {
  return (
    <>
      <h1>task number: {params.id}</h1>
    </>
  )
}
