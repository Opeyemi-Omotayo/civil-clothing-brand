import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { AiOutlineUser } from "react-icons/ai";

const solutions = [
  {name: 'Sign in', id:1, href: '/accounts/login' },
  {name:'Sign up', id:2, href: '/accounts/register'  },
]

const Accounts = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 outline-none  font-semibold leading-6 text-white ">
        <span> <AiOutlineUser className="text-white flex items-center" /></span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-[130px]  -translate-x-1/2">
          <div className="  flex-auto overflow-hidden bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className=" flex items-center justify-around text-primary">
            <ul className='flex flex-col'>
              {solutions.map((item) => (
                    <li key={item.id} className='hover:bg-gray-50 p-4 '>
                        <a href={item.href}>{item.name}</a>
                    </li>
              ))}
              </ul>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Accounts;
