import React from "react";
import ProductCard from "../../micro/card/ProductCard";
import { ProductItem } from "../../App";

const Products = ({ product }: { product: ProductItem[] }) => {
  return (
    <main  id="products" className="w-full my-10 px-[25px] lg:px-[45px]">
      <nav className="flex justify-between py-4 font-medium text-text">
        <h3>Products </h3>
        <p className="text-gray-500">View All</p>
      </nav>
      <div className="flex grid-cols-4 space-x-5 overflow-x-auto lg:grid xl:overflow-hidden">
        <ProductCard product={product}/>
      </div>
    </main>
  );
};

export default Products;