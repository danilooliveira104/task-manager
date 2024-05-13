import useUsers from '@hooks/useUsers'

interface AvatarProps {
  id: number
  showName?: boolean
}

export default function Avatar({ id, showName = false }: AvatarProps) {
  const avatarUrl = `https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${id}`
  const listUsers = useUsers()

  const user = listUsers.listUsers.find((user) => user.id === id)

  return (
    <div className="flex items-center">
      <img
        className="rounded-lg mr-2"
        src={avatarUrl}
        alt={`Avatar-${id}`}
        width="40px"
      />
      {showName && (
        <div
          className={`text-white ${user?.firstName ? 'bg-default' : ''} p-2 px-1 rounded-lg w-auto text-sm`}
          data-testid="user-name"
        >
          {user?.firstName} {user?.lastName}
        </div>
      )}
    </div>
  )
}
