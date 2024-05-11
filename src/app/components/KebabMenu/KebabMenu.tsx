import React, { useState } from 'react'

interface KebabMenuProps {
  id: number
  handleClick: (click: boolean) => void
  getId: (id: number) => void
  getAction: (action: 'edit' | 'delete') => void
}

export default function KebabMenu({
  id,
  handleClick,
  getAction,
  getId,
}: KebabMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleMenu}
          className=""
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <img
            src="../../image/icon-kebab-menu.png"
            alt="menu"
            width="30px"
          ></img>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none mb-3"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              className="flex w-full text-left px-4 py-3 text-sm text-gray-700"
              role="menuitem"
              onClick={() => {
                getId(id)
                handleClick(true)
                getAction('edit')
                toggleMenu()
              }}
            >
              <img
                src="../../image/icon-edit.png"
                alt="Icon"
                className="mr-2 w-5"
              />{' '}
              <span className="font-medium">Edit</span>
            </button>
            <button
              className="flex w-full text-left px-4 py-3 text-sm text-gray-700"
              role="menuitem"
              onClick={() => {
                getId(id)
                handleClick(true)
                getAction('delete')
                toggleMenu()
              }}
            >
              <img
                src="../../image/icon-delete.png"
                alt="Icon"
                className="mr-2 w-5"
              />{' '}
              <span className="font-medium">Delete</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
