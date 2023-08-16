import React from "react";
import { BsArrowDown } from "react-icons/bs";

import Button from "../../micro/button/Button";

const Header = () => {
  return (
    <div className=" w-full bg-cover bg-my-image h-95vh font-Lato flex items-center justify-center">
      <div className="flex flex-col items-center"> 
      <h1 className="text-4xl font-medium text-normal">Lorem ipsum dolor sit amet consectetur.</h1>
        <Button className="flex items-center justify-center  border-primary bg-primary text-white w-[200px] p-3 my-5 rounded-md animate-bounce">
          Shop Now <BsArrowDown className="ml-3 text-xl" />
        </Button>
       

      </div>
    </div>
  );
};

export default Header;
