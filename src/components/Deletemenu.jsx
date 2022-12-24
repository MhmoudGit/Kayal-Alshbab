import { BsThreeDotsVertical } from "react-icons/bs"
import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Deletemenu = ({ item, dlt, updateItem, updateCategory, open }) => {
  return (
    <Menu as="div" className="relative inline-block text-left z-4">
      {updateItem}
      {updateCategory}
      <Menu.Button className="flex w-full items-center justify-center gap-1 rounded-full bg-white py-px px-px text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
        <BsThreeDotsVertical className="w-8 h-8 p-1 rounded-full hover:bg-gray-200" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-8 z-50 left-0 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => open()}
                className={classNames(
                  active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                  "px-4 py-2 text-sm hover:bg-gray-100 flex items-center gap-2 text-semibold w-full"
                )}
              >
                تعديل
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => dlt(item._id)}
                className={classNames(
                  active ? "bg-red-200" : "",
                  "px-4 py-2 text-sm hover:bg-red-100 flex text-semibold text-red-500 items-center w-full gap-2"
                )}
              >
                حذف
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Deletemenu
