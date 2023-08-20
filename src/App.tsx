import React, { useEffect} from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import ProductDetails from './components/products/ProductDetails';
import Cart from './components/cart/Cart';
import SignIn from './components/accounts/SignIn';
import SignUp from './components/accounts/SignUp';
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOutDetails from './components/checkOut/CheckOutDetails';


export type ProductItem = {
  title: string;
  collection: string;
  quantity: number;
  price: string;
  image: string;
  id: number;
};

const items: ProductItem[] = [
  {
    title: "City girl summer",
    collection: "city girl collection",
    quantity: 1,
    price: "152",
    image: "https://img.freepik.com/free-photo/smiling-attractive-young-woman-flowered-dress_23-2148135608.jpg?w=1500&t=st=1692134753~exp=1692135353~hmac=04e926a1f4b3f837a21771fbd7ca0a3494f5603e9433d28b746c34e49c0f8443",
    id: 1,
  },
  {
    title: "City girl summer",
    collection: "city girl collection",
    quantity: 1,
    price: "139",
    image: "https://img.freepik.com/premium-photo/young-pretty-sexy-woman-girl-with-cute-face-long-brunette-hair-has-fashionable-makeup-black-dress-pink-background_136403-2328.jpg?w=1500",
    id: 2,
  },
  {
    title: "City girl summer ",
    collection: "city girl collection",
    quantity: 1,
    price: "195",
    image: "https://img.freepik.com/premium-photo/woman-blue-satin-maxi-dress-with-high-apron-neckline_849906-17979.jpg?w=1500",
    id: 3,
  },
  {
    title: "City girl summer",
    collection: "city girl collection",
    quantity: 1,
    price: "130",
    image: "https://img.freepik.com/free-photo/stylish-tanned-girl-black-dress-red-neckerchief-posing-near-iron-lamppost_197531-3245.jpg?w=1500&t=st=1692134944~exp=1692135544~hmac=137b869bc61333a06002cb908016bb23059d16151983256c062c8e27038cafa9",
    id: 4,
  }  
];

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
    AOS.refresh();
  }, []);
 

  return (
    <div className='overflow-hidden'>
      <Router>
        <NavBar />
            <Routes>
               <Route path='/' element={<Home products={items}/>}></Route>
               <Route path='/product-details/:id' element={<ProductDetails  product={items}/>}></Route>
               <Route path='/cart' element={<Cart />}></Route>
               <Route path='/accounts/login' element={<SignIn />}></Route>
               <Route path='/accounts/register' element={<SignUp />}></Route>
               <Route path='/checkouts/details' element={<CheckOutDetails />}></Route>
            </Routes>
           <Footer />
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />
    </div>
  );
}

export default App;
