import React from 'react';
import Store from '../../store/Store';
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";

type PaystackProps = {
    reference: string;
    email: string;
    amount: number;
    publicKey: any;
  };

const Payment = () => {
    const { cartArray } = Store();

    const subTotal = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCost = 15;
    const total = subTotal + shippingCost;
    const billings = { subTotal, total };

    const config: PaystackProps = {
        reference: new Date().getTime().toString(),
        email: "civil@gmail.com",
        amount:
          Math.round(
            billings.subTotal + billings.total) * 80000,
        publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
      };
    
      
    
      const initializePayment = usePaystackPayment(config);
      const onSuccess = () => {
        toast.success("Payment successfully completed");
      };
      const onClose = () => {
        toast.error("Your order was cancelled");
      };
    

    return (
        <div className='flex'>
            <div className='w-[60%] py-10 pb-4 mx-auto px-[25px] lg:px-[45px]'>
                <div>
                    <div className="bg-gray-100 py-4 px-4 rounded-xl flex justify-between">
                        <label className="flex items-center font-medium text-lg  ">
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        initializePayment(onSuccess, onClose);
                                    }
                                }}
                                className="my-3 rounded-lg bg-input w-7 h-7 mr-3"
                            />
                            Paystack
                        </label>
                       <img src="/assets/paystack.png" alt="paystack"  width={50}
                height={50}
                className="rounded-full" />
                    </div>
                </div>
            </div>
            <div className='bg-gray-200 w-[40%] pl-6'>
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
                    <div className='mt-[5rem]'>
                        <div className="pb-3">
                            <h1 className="text-lg font-semibold">Order Summary</h1>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b">
                            <h1 className="text-sm font-semibold">
                                Subtotal
                            </h1>
                            <p className="text-sm font-medium">${billings.subTotal}.00</p>
                        </div>
                        <div className="flex items-center justify-between py-1 border-b">
                            <h1 className="text-sm font-semibold">
                                Shipping
                            </h1>
                            <p className="text-sm font-medium">$15.00</p>
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
        </div>
        
  )
}

export default Payment;