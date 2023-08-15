import React from "react";
import ProductCard from "../../micro/card/ProductCard";

export type ProductItem = {
    title: string;
    collection: string;
    quantity: number;
    price: string;
    image: string;
    id: number;
  };
  
  const products: ProductItem[] = [
    {
      title: "City girl summer",
      collection: "city girl collection",
      quantity: 1,
      price: "152",
      image: "https://img.freepik.com/free-photo/smiling-attractive-young-woman-flowered-dress_23-2148135608.jpg?w=360&t=st=1692134753~exp=1692135353~hmac=04e926a1f4b3f837a21771fbd7ca0a3494f5603e9433d28b746c34e49c0f8443",
      id: 1,
    },
    {
      title: "City girl summer",
      collection: "city girl collection",
      quantity: 1,
      price: "139",
      image: "https://img.freepik.com/premium-photo/young-pretty-sexy-woman-girl-with-cute-face-long-brunette-hair-has-fashionable-makeup-black-dress-pink-background_136403-2328.jpg?w=360",
      id: 2,
    },
    {
      title: "City girl summer ",
      collection: "city girl collection",
      quantity: 1,
      price: "195",
      image: "https://img.freepik.com/premium-photo/woman-blue-satin-maxi-dress-with-high-apron-neckline_849906-17979.jpg?w=740",
      id: 3,
    },
    {
      title: "City girl summer",
      collection: "city girl collection",
      quantity: 1,
      price: "130",
      image: "https://img.freepik.com/free-photo/stylish-tanned-girl-black-dress-red-neckerchief-posing-near-iron-lamppost_197531-3245.jpg?w=360&t=st=1692134944~exp=1692135544~hmac=137b869bc61333a06002cb908016bb23059d16151983256c062c8e27038cafa9",
      id: 4,
    }  
  ];

const Products = () => {
  return (
    <main  id="products" className="container w-full px-5 mx-auto my-10 lg:px-10">
      <nav className="flex justify-between py-4 font-medium text-text">
        <h3>Products </h3>
        <p className="text-gray-500">View All</p>
      </nav>
      <div className="flex grid-cols-4 space-x-5 overflow-x-auto lg:grid xl:overflow-hidden">
        <ProductCard product={products}/>
      </div>
    </main>
  );
};

export default Products;