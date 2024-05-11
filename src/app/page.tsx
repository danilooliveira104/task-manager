import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen-header flex lg:flex-row flex-col-reverse justify-center items-center overflow-x-hidden">
      <div className="lg:w-2/4 h-screen-header px-6 flex justify-center items-center">
        <img
          className="w-2/3"
          src="/image/welcome.svg"
          alt="people handling tasks"
        />
      </div>
      <div className="lg:w-2/4 h-screen-header bg-default flex flex-col items-center lg:items-start justify-center lg:pl-8 lg:pr-16">
        <span className="text-white text-7xl font-bold mb-10 text-center lg:text-left">
          Welcome to task manager
        </span>
        <Link
          href="/pages/dashboard"
          className="shadow px-6 py-4 w-fit bg-white text-default text-xl rounded-md font-medium"
        >
          Dashboard
        </Link>
      </div>
    </div>
  )
}
