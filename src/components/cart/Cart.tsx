import Store from "../../store/Store";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import FunkyBanner from "../banner/FunkyBanner";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cartArray, removeFromCart } = Store();
  const [cart, setCart] = React.useState(cartArray)

  const handleDecrementQuantity = (itemId: number) => {
    setCart((prevCart: any) =>
      prevCart.map((item: any) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleIncrementQuantity = (itemId: number) => {
    setCart((prevCart: any) =>
      prevCart.map((item: any) => {
        console.log(item.id);
        return item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      })
    );
  };

  const totalPrice = cart.reduce(
    (acc: number, curr) => acc + Number(curr.price * curr.quantity),
    0
  );

  const billings = {
    tax: 3.5,
    shipping: 10,
    discount: 5.0,
    total: totalPrice,
  };


  React.useEffect(() => {
    setCart(cartArray);
  }, [cartArray]);

  return (
    <main className="px-[25px] lg:px-[45px] pt-12 lg:pt-20 font-Lato">
      {cartArray.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-5 text-center mb-[8rem]">
          <h1 className="text-4xl font-bold lg:text-6xl sm:text-5xl ">
            Shopping Cart is <span className="text-primary">Empty</span>
          </h1>
          <p className="text-lg">
            Go to shop and add to cart product you'd like to buy.
          </p>
          <a href="/#product">
            <button className="flex items-center p-3 mt-8 text-white rounded-md bg-primary animate-verticalBounce">
              <BiArrowBack className="mr-2" /> Return to Shop
            </button>
          </a>
        </div>
      ) : (
        <>
          <div>
            <h1 className="text-5xl font-bold">Shopping Cart</h1>
            <p className="py-4 text-base font-medium">
              There {cartArray.length === 1 ? 'is' : 'are'} {" "}
              <span className="font-semibold ">
                {cartArray.length} {cartArray.length === 1 ? 'product' : 'products'} {" "}
              </span>
              in your cart
            </p>
          </div>

          <section className="flex flex-col justify-between py-10 lg:flex-row">
            <div className="w-full lg:w-8/12">
                <ul className="-my-6 divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li className="flex py-6 border-b" key={item.id}>
                      <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                        <img src={item.image} alt="product" className="object-cover object-center w-full h-full"/>
                      </div>
                    <div className="flex flex-col flex-1 ml-4" >
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="/#">{item.title}</a>
                            </h3>
                            <p className="ml-4">${item.price * item.quantity}.00</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Blue</p>
                        </div>
                        <div className="flex items-end justify-between flex-1 text-sm">
                          <div className="flex text-gray-500 border-gray-700 rounded-md shadow-sm">
                          <button
                          className="w-8 h-8"
                          onClick={() => handleDecrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="flex items-center px-2">{item.quantity} </span>
                        <button
                          className="w-8 h-8"
                          onClick={() => handleIncrementQuantity(item.id)}
                        >
                          +
                        </button>
                          </div>

                          <div className="flex">
                            <button type="button"  onClick={() => removeFromCart(item.id)} className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                  </ul>
            </div>

            <div className="p-5 mt-8 ml-0 border rounded-md lg:mt-0 lg:ml-10 lg:w-4/12 h-fit bg-gray-50">
              <div className="pb-3">
                 <h1 className="text-lg font-semibold">Order Summary</h1>
              </div>
              <div className="flex items-center justify-between py-1 border-b">
                <h1 className="text-sm font-semibold">
                  Subtotal
                </h1>
                <p className="text-sm font-medium">${billings.total}.00</p>
              </div>
              <div className="my-8">
                <h1 className="text-sm">Shipping & taxes calculated at <span className="font-semibold"> checkout</span></h1>
              </div>
              <Link 
              to="/checkouts/details"
                className="flex items-center justify-center w-full p-3 text-white rounded-md bg-primary hover:bg-black"
                onClick={() => {
                  toast('coming soon');
                }}
              >
               <span>
                  <AiOutlineShoppingCart className="mr-1 text-white" />
                </span> 
                <span>Checkout</span>
              </Link>
            </div>
          </section>
        </>
      )}
      <FunkyBanner />
    </main>
  );
};

export default Cart;