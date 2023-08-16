import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import Store from "../../store/Store";
import Collections from "../../micro/collections/Collections";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { cartArray } = Store();

  return (
    <>
      <nav className="font-Lato">
        <div className="lg:flex hidden bg-black  py-4 px-[45px] text-white items-center">
          <Link to='/' className="flex items-center">
            <h1 className="text-2xl">Ci<span className='text-primary'>v</span>il</h1>
          </Link>
          <div className="flex flex-1 items-center  ">
           <ul className=" flex justify-center flex-1">
            <li className="mr-8 capitalize">What's New</li>
            <li className="mr-8 capitalize">Shop</li>
            <li className="mr-8 capitalize"><Collections /></li>
            <li className="mr-8 capitalize">Pre-Order</li>
            <li className="capitalize">Ready to wear</li>
           </ul>
          </div>
          <div className="flex">
          <div className="mx-2">
              <a href="/help">Help</a>
            </div>
            <div className="flex items-center mx-2">
              <a href="/accounts" className="flex items-center">
                <AiOutlineUser className="text-white" />
              </a>
            </div>
            <div className="flex items-center ml-2">
              <a href="/cart" className="flex items-center">
                <span>
                  <AiOutlineShoppingCart className="text-white " />
                </span>
                <span className="relative right-2 bg-primary bottom-2 h-4 w-4 text-white flex items-center justify-center text-xs rounded-full">
                  {cartArray.length}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="lg:hidden flex justify-between items-center p-4 bg-black">
          <Link to="/" className="flex items-center text-xl font-bold ">
          <h1 className="text-2xl">Ci<span className='text-primary'>v</span>il</h1>
          </Link>
          <ul
            onClick={() => setNav(!nav)}
            className={`absolute top-[63px] z-20 bg-gray-50 items-center w-full left-0 py-10 text-sky h-full ${
              nav ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col h-96 text-lg  items-center justify-between">
              <li>
                <a href="/#product">Products</a>
              </li>
              <li>
                <a href="/#help">Help</a>
              </li>
              <li className="cursor-pointer bg-white text-black p-2 w-32 flex items-center justify-center rounded-full">
                <a href="/#accounts" className="flex items-center">
                  <AiOutlineUser className="mr-2" /> Sign in
                </a>
              </li>
              <li className="cursor-pointer bg-black text-white p-2 w-32 flex items-center justify-center rounded-full">
                <a href="/cart" className="flex items-center">
                  <AiOutlineShoppingCart className="mr-2" /> Cart
                </a>
              </li>
            </div>
          </ul>
          <div
            className="lg:hidden block text-3xl text-white"
            onClick={() => setNav(!nav)}
          >
            {!nav ? <CiMenuBurger /> : <TfiClose />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
