import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../micro/input/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from '../../validation/Validator';
import { useForm } from '../../hooks/form-hook';
import Store from '../../store/Store';
import { ProductItem } from '../../App';
import CartDetails from '../../micro/checkout/CartDetails';

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

    const subTotal = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCost = 0;
    const total = subTotal + shippingCost;
    const billings = { subTotal, total };



  return (
    <div className='flex mb-[8rem] '>
      <div className='w-[60%] py-10 pb-4 mx-auto px-[25px] lg:px-[45px]'>
      <Link to='/' className="flex items-center justify-center pb-8">
            <h1 className="text-5xl">Ci<span className='text-primary'>v</span>il</h1>
      </Link>
        <div className='flex justify-between pb-4'>
          <h1 className='text-xl font-semibold'>Contact details</h1>
          <h1 className="flex items-center text-xs md:text-sm">
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
          <Link to={'/checkouts/shipping'} className='flex items-center justify-end pt-3'>
            <button disabled={!formState.isValid} className="w-2/6 p-3 text-white rounded-md cursor-pointer disabled:cursor-not-allowed bg-primary hover:bg-black">Continue to shipping</button>
          </Link>
        </div>
      </div>
      <CartDetails cartArray={cartArray} billings={billings}  />
    </div>
  )
}

export default CheckOutDetails;