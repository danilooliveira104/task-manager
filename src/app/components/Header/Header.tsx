import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex justify-center items-center h-14 w-full relative shadow">
      <Link href="/">
        <img className="w-14" src="/images/logo-icon.svg" alt="logo" />
      </Link>
    </div>
  )
}
