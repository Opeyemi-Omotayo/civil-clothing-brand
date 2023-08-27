import React from 'react';

interface CartDetailsProps {
    cartArray: any[]; 
    billings: { subTotal:number, total: number }; 
  }

const CartDetails: React.FC<CartDetailsProps> = ({ cartArray, billings }) => {
  return (
    <div className='bg-gray-50 border shadow rounded w-[40%] pl-6 '>
    <div className='py-10 pb-4 mx-auto px-[25px] lg:px-[25px]'>
    <ul className="-my-6 divide-y divide-gray-200 ">
      {cartArray.map((item) => (
        <li className="flex py-6 border-b" key={item.id}>
          <div className="flex-shrink-0 w-[50px] h-[50px] overflow-hidden border border-gray-200 rounded-md">
            <img src={item.image} alt="product" className="object-cover object-center w-full h-full" />
          </div>
          <div className="flex flex-col flex-1 ml-4" >
            <div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <a href="/#">{item.title} - Blue - L</a>
                </h3>
                <p className="ml-4">${item.price * item.quantity}.00</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <div className='mt-[5rem] mb-[2rem]'>
      <div className="pb-3">
        <h1 className="text-lg font-semibold">Order Summary</h1>
      </div>
      <div className="flex items-center justify-between py-1">
        <h1 className="text-sm font-semibold">
          Subtotal
        </h1>
        <p className="text-sm font-medium">${billings.subTotal}.00</p>
      </div>
      <div className="flex items-center justify-between py-1 border-b">
        <h1 className="text-sm font-semibold">
          Shipping
        </h1>
        <p className="text-sm font-medium">calculated at next step</p>
      </div>
      <div className="flex items-center justify-between py-1 border-b">
        <h1 className="text-sm font-bold">
          Total
        </h1>
        <p className="text-lg font-semibold">${billings.total}.00</p>
      </div>
    </div>
    </div>
    
  </div>
  )
}

export default CartDetails;