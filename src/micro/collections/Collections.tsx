import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, ShoppingBagIcon } from '@heroicons/react/20/solid';

const solutions = [
  {id:1,  image: 'https://img.freepik.com/free-photo/smiling-attractive-young-woman-flowered-dress_23-2148135608.jpg?w=360&t=st=1692134753~exp=1692135353~hmac=04e926a1f4b3f837a21771fbd7ca0a3494f5603e9433d28b746c34e49c0f8443' },
  { id:2, image: 'https://img.freepik.com/premium-photo/young-pretty-sexy-woman-girl-with-cute-face-long-brunette-hair-has-fashionable-makeup-black-dress-pink-background_136403-2328.jpg?w=360' },
  { id:3, image: "https://img.freepik.com/premium-photo/woman-blue-satin-maxi-dress-with-high-apron-neckline_849906-17979.jpg?w=740", description: "Your customers' data will be safe and secure" },
  {id: 4, image: "https://img.freepik.com/free-photo/stylish-tanned-girl-black-dress-red-neckerchief-posing-near-iron-lamppost_197531-3245.jpg?w=360&t=st=1692134944~exp=1692135544~hmac=137b869bc61333a06002cb908016bb23059d16151983256c062c8e27038cafa9" },
]
const callsToAction = [
  { name: 'Order', href: '#', icon: ShoppingBagIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const Collections = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 outline-none  font-semibold leading-6 text-white ">
        <span className='capitalize'>Collections</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
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
        <Popover.Panel className="absolute left-1/2 z-10 mt-8 flex w-[800px]  -translate-x-1/2 px-4">
          <div className="w-screen  flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 flex items-center justify-around">
              {solutions.map((item) => (
                <div key={item.id} >
                    <img src={item.image} alt='collection'  className='w-[170px] h-[250px] rounded-md'/>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Collections;
