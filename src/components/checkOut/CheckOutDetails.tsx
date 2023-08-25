import React from 'react';
import Input from '../../micro/input/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from '../../validation/Validator';
import { useForm } from '../../hooks/form-hook';
import Store from '../../store/Store';
import { ProductItem } from '../../App';

const CheckOutDetails = ({ products }: { products: ProductItem[] }) => {
  const {cartArray} = Store()
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

  return (
    <div className='flex py-10 pb-4 mx-auto px-[25px] lg:px-[45px]'>
        <div>
        <div>
            <h1 className='text-4xl'>CIVIL</h1>
            <h3>Contact details</h3>
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
              <div>
                <h1>Shipping address</h1>
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
              <div>
                <button disabled={!formState.isValid} className="w-full p-3 text-white rounded-md bg-primary hover:bg-black">Continue to shipping</button>
              </div>
        </div>
        </div>
        <div className='bg-gray-200'>
       
        </div>
    </div>
  )
}

export default CheckOutDetails;