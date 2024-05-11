import { create } from 'zustand'

interface UserProps {
  firstName: string
  lastName: string
  id: number
}
interface UseUserProps {
  listUsers: UserProps[]
}

const useUsers = create<UseUserProps>((set) => {
  fetch('https://dummyjson.com/users?limit=50').then((response) => {
    response.json().then((data) => {
      data.users.forEach((user: UserProps) => {
        set((state) => ({
          listUsers: [
            ...state.listUsers,
            { firstName: user.firstName, lastName: user.lastName, id: user.id },
          ],
        }))
      })
    })
  })

  return {
    listUsers: [],
  }
})

export default useUsers
