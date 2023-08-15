import React from "react";
import Button from "../button/Button";
import { BsFuelPumpDieselFill, BsFillPeopleFill } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { Link } from "react-router-dom";
import { ProductItem } from "../../components/products/Products";


const ProductCard = ({ product }: { product: ProductItem[] }) => {

  return (
    <>
    {product.map((product: ProductItem) => (
          <div
            className="p-4 bg-white rounded-lg"
            key={product.id}
            data-aos="fade-in"
          >
            <div>
              <div>
                <hgroup>
                  <h3 className="text-base font-bold">{product.title}</h3>
                  <h4 className="text-lg font-medium lg:text-base text-text">
                    {product.category}
                  </h4>
                </hgroup>
              </div>
              <img
                src={product.image}
                alt="product"
                className="my-12 w-[270px] h-[108px]"
              />
            </div>
            <div>
              <ul className="flex justify-between text-sm text-text">
                <li className="flex items-center">
                  <span className="pr-2 text-base">
                    <BsFuelPumpDieselFill />
                  </span>
                  {product.quantity}L
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-base">
                    <GiSteeringWheel />
                  </span>
                  Manual
                </li>
                <li className="flex items-center">
                  <span className="pr-2 text-base">
                    <BsFillPeopleFill />
                  </span>
                  {product.id}
                </li>
              </ul>
              <div className="flex justify-between pt-5">
                <p className="text-base font-medium text-text">
                  <span className="text-base font-bold text-black">
                    ${product.price}.00/
                  </span>
                  day
                </p>
                <Link to={`/details/${product.id}`}>
                  <Button className="w-20 ml-10 text-sm font-medium text-white bg-primary lg:ml-5 xl:ml-10">
                    Rent Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
    ))};
    </>
  );
};

export default ProductCard;