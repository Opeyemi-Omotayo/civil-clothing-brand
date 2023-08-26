import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../micro/input/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from '../../validation/Validator';
import { useForm } from '../../hooks/form-hook';
import Store from '../../store/Store';
import { ProductItem } from '../../App';

const CheckOutDetails = ({ products }: { products: ProductItem[] }) => {
  const { cartArray } = Store();
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const total = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const billings = { total };


  return (
    <div className='flex '>
      <div className='w-[60%] py-10 pb-4 mx-auto px-[25px] lg:px-[45px]'>
        <div className='flex justify-between pb-4'>
          <h1 className='text-4xl '>Contact details</h1>
          <h1 className="text-xs  md:text-sm flex items-center">
            <span>Returning Customer? </span>{" "}
            <Link
              to="/accounts/login"
              className="hover:text-primary"
            >
              Sign in
            </Link>
          </h1>
        </div>
        <div>
          <Input
            id="contact"
            element="input"
            type="text"
            label="Contact"
            placeholder="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter your Contact."
            onInput={inputHandler}
          />
          <div className='py-4'>
            <h1 className='text-lg font-semibold'>Shipping address</h1>
          </div>
          <Input
            id="country"
            element="input"
            type="text"
            placeholder="Country"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your Country."
            onInput={inputHandler}
          />
          <div className="flex items-center justify-between">
            <div className="w-[48%]">
              <Input
                id="firstName"
                element="input"
                type="text"
                placeholder="First Name"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your first name."
                onInput={inputHandler}
              />
            </div>
            <div className="w-[48%]">
              <Input
                id="lastName"
                element="input"
                type="text"
                placeholder="Last Name"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your last name"
                onInput={inputHandler}
              />
            </div>
          </div>
          <Input
            id="address"
            element="input"
            type="text"
            placeholder="Address"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your address."
            onInput={inputHandler}
          />
          <Input
            id="suite"
            element="input"
            type="text"
            placeholder="Apartment Suite, etc. (Optional)"
            onInput={inputHandler}
          />
          <div className="flex items-center justify-between">
            <div className="w-[30%]">
              <Input
                id="city"
                element="input"
                type="text"
                placeholder="City"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your city."
                onInput={inputHandler}
              />
            </div>
            <div className="w-[30%]">
              <Input
                id="state"
                element="input"
                type="text"
                placeholder="State"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your state."
                onInput={inputHandler}
              />
            </div>
            <div className="w-[30%]">
              <Input
                id="postalCode"
                element="input"
                type="text"
                placeholder="Postal Code"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your Postal Code"
                onInput={inputHandler}
              />
            </div>
          </div>
          <Input
            id="number"
            element="input"
            type="text"
            placeholder="Phone"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your Phone."
            onInput={inputHandler}
          />
          <Link to={'/checkout/shipping'} className='flex items-center justify-end pt-3'>
            <button disabled={!formState.isValid} className="cursor-pointer w-2/6 p-3 text-white rounded-md bg-primary hover:bg-black">Continue to shipping</button>
          </Link>
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
            <p className="text-sm font-medium">${billings.total}.00</p>
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
    </div>
  )
}

export default CheckOutDetails;