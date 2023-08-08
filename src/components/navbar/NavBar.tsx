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
    <nav className="container z-50 px-5 py-5 mx-auto ">
      <div className="items-center justify-between hidden lg:flex">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold text-secondary">
            Ci<span className="text-primary">v</span>il
          </Link>
        </div>
        <ul className="flex items-center justify-between space-x-10 cursor-pointer text-normal">
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
      <div className="flex items-center justify-between lg:hidden">
        <Link to="/" className="text-3xl font-bold text-secondary">
          Ci<span className="text-primary">v</span>il
        </Link>
        <ul
          onClick={() => setNav(!nav)}
          className={`absolute top-[74px] z-20 bg-blueShade items-center w-full left-0 py-10 text-secondary h-full ${
            nav ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-between text-lg h-96">
            <li>
              <a href="/#product">Products</a>
            </li>
            <li>
              <a href="/#delivery">Delivery</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>

            <li className="flex items-center justify-center w-32 p-2 text-white bg-black rounded-full cursor-pointer">
              <a href="/cart" className="flex items-center">
                <AiOutlineShoppingCart className="mr-2" /> Cart
              </a>
            </li>
            <li className="flex items-center justify-center w-32 p-2 text-black bg-white rounded-full cursor-pointer">
              <a href="/#delivery" className="flex items-center">
                <MdOutlineDeliveryDining className="mr-2" /> Delivery
              </a>
            </li>
          </div>
        </ul>
        <div className="block text-3xl lg:hidden" onClick={() => setNav(!nav)}>
          {!nav ? <CiMenuBurger /> : <TfiClose />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;