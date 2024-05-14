import { ItemTaskProps } from '@models/types'

export default function generateIdTask(listTask: ItemTaskProps[]) {
  const listIds = listTask?.map((item: ItemTaskProps) => item.id)

  if (listIds?.length === 0) {
    return 1
  }
  const lastId = Math?.max(...listIds)
  return lastId + 1
}
