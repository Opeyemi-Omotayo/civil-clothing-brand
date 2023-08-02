import { Link } from "react-router-dom";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineMail,
} from "react-icons/ai";
import { MdOutlineDeliveryDining } from "react-icons/md";

const NavBar = () => {
  const [nav, setNav] = React.useState(false);

  return (
    <nav className="mx-auto container px-5 lg:px-10 py-5 z-50">
      <div className="justify-between items-center hidden lg:flex">
        <div className="flex items-center  justify-between">
          <Link to="/" className="text-3xl font-bold text-secondary">
            Ci<span className="text-primary">v</span>il
          </Link>
        </div>
        <ul className="flex items-center justify-between space-x-10 text-gray-600 cursor-pointer">
          <li>
            <a href="/cart" className="flex items-center">
              <AiOutlineShoppingCart className="text-xl" />
              Cart
            </a>
          </li>
          <li>
            <a href="/#product" className="flex items-center">
              <AiOutlineHeart className="mr-2" /> Products
            </a>
          </li>
          <li>
            <a href="/#delivery" className="flex items-center">
              <MdOutlineDeliveryDining className="mr-2" /> Delivery
            </a>
          </li>
          <li>
            <a href="/#contact" className="flex items-center">
              <AiOutlineMail className="mr-2" /> Contact
            </a>
          </li>
        </ul>
      </div>

      {/* mobile */}
      <div className="lg:hidden flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-secondary">
          Ci<span className="text-primary">v</span>il
        </Link>
        <ul
          onClick={() => setNav(!nav)}
          className={`absolute top-[74px] z-20 bg-blueShade items-center w-full left-0 py-10 text-secondary h-full ${
            nav ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col h-96 text-lg  items-center justify-between">
            <li>
              <a href="/#product">Products</a>
            </li>
            <li>
              <a href="/#delivery">Delivery</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>

            <li className="cursor-pointer bg-black text-white p-2 w-32 flex items-center justify-center rounded-full">
              <a href="/cart" className="flex items-center">
                <AiOutlineShoppingCart className="mr-2" /> Cart
              </a>
            </li>
            <li className="cursor-pointer bg-white text-black p-2 w-32 flex items-center justify-center rounded-full">
              <a href="/#delivery" className="flex items-center">
                <MdOutlineDeliveryDining className="mr-2" /> Delivery
              </a>
            </li>
          </div>
        </ul>
        <div className="lg:hidden block text-3xl" onClick={() => setNav(!nav)}>
          {!nav ? <CiMenuBurger /> : <TfiClose />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;