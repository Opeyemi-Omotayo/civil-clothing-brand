import React from "react";
import { BsArrowDown } from "react-icons/bs";

import NavBar from "../navbar/NavBar";
import Button from "../../micro/button/Button";

const Header = () => {
  return (
    <div className="relative w-full bg-cover bg-my-image h-95vh font-Lato">
      <NavBar />
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-80 left-1/2">
        <h1 className="text-lg font-medium text-normal">Quiet Luxury</h1>
        <Button className="flex items-center justify-center w-64 p-3 my-5 rounded-md animate-bounce">
          Shop Now <BsArrowDown className="ml-3 text-xl" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
