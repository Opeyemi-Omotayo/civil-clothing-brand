import React from "react";

import { useForm } from "../../hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../validation/Validator";
import Input from "../../micro/input/Input";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';

const SignUp = () => {
  const [formState, inputHandler, setFormData] = useForm(
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

  const switchModeHandler = () => {
    setFormData(
      {
        ...formState.inputs,
        firstName: {
          value: "",
          isValid: false,
        },
        lastName: {
          value: "",
          isValid: false,
        },
      },
      false
    );
  };

  const onSignInSubmit = (e: any) => {
    e.preventDefault();
    toast('Account Created');
  };


  return (
    <React.Fragment>
      <div className="flex items-center justify-center mt-10 font-Lato mb-[7rem]">
        <form action="" className="w-4/6 md:w-3/6 lg:w-2/6" onSubmit={onSignInSubmit}>
          <div className="flex items-center justify-center my-6">
            <h1 className=" text-2xl md:text-3xl font-bold">CREATE ACCOUNT</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[48%]">
              <Input
                id="firstName"
                element="input"
                type="text"
                label="First Name"
                placeholder="First Name"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your first name."
                onInput={inputHandler}
              />
            </div>
            <div className="w-[48%]">
              <Input
                id="lastname"
                element="input"
                type="text"
                label=" Last Name"
                placeholder="Last Name"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter your last name"
                onInput={inputHandler}
              />
            </div>
          </div>
          <Input
            id="email"
            element="input"
            type="text"
            label="Email"
            placeholder="Email Address"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter your correct email address"
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="text-white bg-primary px-4 py-2 lg:px-10 lg:py-4 rounded-md shadow disabled:cursor-not-allowed"
              disabled={!formState.isValid}
              onClick={onSignInSubmit}
            >
              SIGNUP
            </button>
            <h1 className=" text-xs md:text-sm ">
              <span>Returning Customer? </span>{" "}
              <Link
                onClick={switchModeHandler}
                to="/accounts/login"
                className="hover:text-primary"
              >
                Sign in
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
