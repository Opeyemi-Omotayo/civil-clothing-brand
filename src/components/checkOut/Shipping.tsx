import React from 'react';
import Store from '../../store/Store';
import { Link } from 'react-router-dom';
import CartDetails from '../../micro/checkout/CartDetails';

const Shipping = () => {
    const { cartArray } = Store();

    const subTotal = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCost = 15;
    const total = subTotal + shippingCost;
    const billings = { subTotal, total };


    return (
        <div className='flex mb-[8rem]'>
            <div className='w-[60%] py-10 pb-4 mx-auto px-[25px] lg:px-[45px]'>
            <Link to='/' className="flex items-center justify-center pb-8">
              <h1 className="text-5xl">Ci<span className='text-primary'>v</span>il</h1>
            </Link>
                <h1 className='py-3 text-lg font-semibold'>Shipping Method</h1>
                <div className='flex items-center justify-between p-4 bg-gray-100 border rounded shadow'>
                    <h1>Express Delivery</h1>
                    <h1>$15.00</h1>
                </div>
                <Link to={'/checkouts/payment'} className='flex items-center justify-end pt-3'>
                    <button className="w-2/6 p-3 text-white rounded-md cursor-pointer bg-primary hover:bg-black">Continue to payment</button>
                </Link>
            </div>
            <CartDetails cartArray={cartArray} billings={billings}/>
        </div>
    )
}

export default Shipping