interface UserAvatarProps {
  id: number
}

export default function UserAvatar({ id }: UserAvatarProps) {
  const avatarUrl = `https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${id}`

  return (
    <div>
      <img
        className="rounded-lg"
        src={avatarUrl}
        alt={`Avatar-${id}`}
        width="40px"
      />
    </div>
  )
}
