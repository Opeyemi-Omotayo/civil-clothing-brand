import React from 'react';
import Store from '../../store/Store';
import { usePaystackPayment } from "react-paystack";
import { toast } from "react-toastify";
import CartDetails from '../../micro/checkout/CartDetails';
import { Link } from 'react-router-dom';

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
        <div className='flex flex-col lg:flex-row mb-[8rem]'>
            <div className='w-[100%] lg:w-[60%] py-10 pb-4 mx-auto px-[25px] lg:px-[45px]'>
            <Link to='/' className="flex items-center justify-center pb-8">
              <h1 className="text-5xl">Ci<span className='text-primary'>v</span>il</h1>
            </Link>
                <div>
                    <div className="flex justify-between px-4 py-4 bg-gray-100 rounded-xl">
                        <label className="flex items-center text-lg font-medium ">
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        initializePayment(onSuccess, onClose);
                                    }
                                }}
                                className="my-3 mr-3 rounded-lg bg-input w-7 h-7"
                            />
                            Paystack
                        </label>
                       <img src="/assets/paystack.png" alt="paystack"  width={50}
                height={50}
                className="rounded-full" />
                    </div>
                </div>
            </div>
            <CartDetails cartArray={cartArray} billings={billings}/>
        </div>
        
  )
}

export default Payment;