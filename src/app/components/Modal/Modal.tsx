interface ModalProps {
  title: string
  isDrawer?: boolean
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function Modal({
  title,
  isDrawer = false,
  children,
  isOpen,
  setIsOpen,
}: ModalProps) {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 sm:h-screen">
          <div
            className={`${isDrawer ? 'h-screen right-0 lg:rounded-l-lg lg:w-1/3' : 'lg:rounded-lg lg:w-2/4 lg:h-fit'} w-full h-screen absolute sm:w-screen bg-white shadow-lg p-4`}
          >
            <div className="w-full flex justify-between items-center mb-4 border-b bg-default rounded">
              <span className="text-2xl font-semibold px-4 text-white">
                {title}
              </span>
              <button onClick={() => setIsOpen(false)} className="relative p-2">
                <img
                  src="/image/icon-close-white.png"
                  alt="circle with X"
                  width="40px"
                ></img>
              </button>
            </div>
            <div className="h-full overflow-y-auto">{children}</div>
          </div>
        </div>
      )}
    </div>
  )
}
