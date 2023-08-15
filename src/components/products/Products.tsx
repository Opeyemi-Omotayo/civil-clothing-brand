import React from "react";
import ProductCard from "../../micro/card/ProductCard";

export type ProductItem = {
    title: string;
    category: string;
    quantity: number;
    price: string;
    image: string;
    id: number;
  };
  
  const products: ProductItem[] = [
    {
      title: "Amazon Echo (3rd generation)",
      category: "appliances",
      quantity: 1,
      price: "52",
      image: "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
      id: 1,
    },
    {
      title: "IFB 30 L Convection Microwave Oven",
      category: "appliances",
      quantity: 1,
      price: "239",
      image: "https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg",
      id: 2,
    },
    {
      title: "Samsung 49' Curved LED Gaming Monitor ",
      category: "appliances",
      quantity: 1,
      price: "1095",
      image: "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
      id: 3,
    },
    {
      title: "Mama'S Pride Parboiled Rice 10kg",
      category: "grocery",
      quantity: 1,
      price: "13",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/52/934348/1.jpg?4747",
      id: 4,
    }  
  ];

const Products = () => {
  return (
    <main  id="products" className="container w-full px-5 mx-auto lg:px-10">
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