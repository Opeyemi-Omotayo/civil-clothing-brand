import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../validation/Validator";
import Input from "../../micro/input/Input";
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import NavBar from "../navbar/NavBar";

const SignUp = () => {
  const navigate = useNavigate();
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

  const onSignInSubmit = async(e: any) => {
    e.preventDefault();
    try{
      await fetch(
        process.env.REACT_APP_BACKEND_URL + "/api/users/registration",{
        method: "POST",
        body: JSON.stringify({
          firstName: formState.inputs.firstName.value,
          lastName: formState.inputs.lastName.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
          role: "customer"
        }),
        headers: {
          'Content-Type': 'application/json',
        }
    });
    navigate('/');
    toast('Account Created');
    }catch(err){
      console.log(err);
      throw err;
    }
    
  };


  return (
    <React.Fragment>
      <NavBar />
      <div className="flex items-center justify-center mt-10 font-Lato mb-[7rem]">
        <form action="" className="w-4/6 md:w-3/6 lg:w-2/6" onSubmit={onSignInSubmit}>
          <div className="flex items-center justify-center my-6">
            <h1 className="text-2xl font-bold md:text-3xl">CREATE ACCOUNT</h1>
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
                id="lastName"
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
              className="px-4 py-2 text-white rounded-md shadow bg-primary lg:px-10 lg:py-4 disabled:cursor-not-allowed"
              disabled={!formState.isValid}
              onClick={onSignInSubmit}
            >
              SIGNUP
            </button>
            <h1 className="text-xs md:text-sm">
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
