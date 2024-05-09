import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen-header flex flex-row justify-center items-center overflow-x-hidden">
      <div className="w-2/4 h-screen-header px-6 flex justify-center items-center">
        <img
          src="/image/welcome.svg"
          alt="people handling tasks"
          width="500px"
        />
      </div>
      <div className="w-2/4 h-screen-header bg-default flex flex-col items-start justify-center pl-8 pr-16">
        <span className="text-white text-7xl font-bold mb-10">
          Welcome to your personal task manager
        </span>
        <Link
          href="/dashboard"
          className="shadow px-6 py-4 w-fit bg-white text-default text-xl rounded-md font-medium"
        >
          Dashboard
        </Link>
      </div>
    </div>
  )
}
