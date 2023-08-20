import React from "react";
import { Link } from "react-router-dom";

import Input from "../../micro/input/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../validation/Validator";
import { useForm } from "../../hooks/form-hook";
import { toast } from "react-toastify";

const SignIn = () => {
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
        firstname: undefined,
        lastname: undefined,
      },
      formState.inputs.email.isValid && formState.inputs.password.isValid
    );
  };

  const submitHandler = async (event: any) => {
    event.preventDefault();
    toast('Logged in!');
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-center mt-10 font-Lato mb-[7rem]">
        <form action="" className="w-4/6  md:w-3/6 lg:w-2/6" onSubmit={submitHandler}>
          <div className="flex items-center justify-center my-6">
            <h1 className="text-2xl font-bold  lg:text-3xl">LOGIN</h1>
          </div>
          <Input
            id="email"
            element="input"
            type="text"
            label="Email"
            placeholder="Email Address"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter your registered email address"
            onInput={inputHandler}
          />
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter your registered password."
            onInput={inputHandler}
          />
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 text-white rounded-md shadow bg-primary lg:px-10 lg:py-4 disabled:cursor-not-allowed"
              disabled={!formState.isValid}
            >
              SIGNIN
            </button>
            <h1 className="text-xs  md:text-sm">
              <span>New Customer? </span>{" "}
              <Link
                onClick={switchModeHandler}
                to="/accounts/register"
                className="hover:text-primary "
              >
                Create an account
              </Link>
            </h1>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default SignIn;
