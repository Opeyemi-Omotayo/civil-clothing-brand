import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { ProductItem } from "../../App";


const ProductCard = ({ product }: { product: ProductItem[] }) => {

  return (
    <>
    {product.map((product: ProductItem) => (
          <div
            className="bg-white border rounded-lg shadow "
            key={product.id}
            data-aos="fade-in"
          >
            <div>
              <img
                src={product.image}
                alt="product"
                className=" w-full h-[250px] rounded-lg"
              />
            </div>
            <div className="p-4">
            <div >
                  <h3 className="text-base font-medium">{product.title}</h3>
              </div>
            <div>
              <div className="flex justify-between pt-5">
                <p className="text-base font-medium text-text"> ${product.price}.00 </p>
                <Link to={`/productDetails/${product.id}`}>
                  <Button className="w-20 p-1 ml-10 text-sm font-medium text-primary border-primary hover:bg-primary hover:text-white lg:ml-5 xl:ml-10">
                    View More
                  </Button>
                </Link>
              </div>
            </div>
            </div>
           
          </div>
    ))}
    </>
  );
};

export default ProductCard;