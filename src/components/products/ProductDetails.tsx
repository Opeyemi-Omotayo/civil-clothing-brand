import React from 'react';
import Store from '../../store/Store';
import { ProductItem } from '../../App';
import { RiStarSFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useParams } from 'react-router-dom';


const ProductDetails = ({ product }: { product: ProductItem[] }) => {
  const { id }= useParams();
  const {cartArray, addToCart, removeFromCart} = Store();
  const handleAddToCart = (cart: ProductItem) => {
      const itemExist = cartArray.find((item) => item.id === cart.id);
      if (!itemExist) {
        addToCart(cart);
      }
    };

    if (id === undefined) {
      return <div>Product ID not found.</div>;
    }
  
    const productId = parseInt(id);

    const products = product.find((product) => product.id === productId);


    if (!products) {
      return <div>Product not found.</div>;
    }
  return (
    <div>
       
<div className="bg-white" data-aos="fade-in">
  <div className="pt-6">
    <nav aria-label="Breadcrumb">
      <ol role="list" className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div className="flex items-center">
            <a href="/" className="mr-2 text-sm font-medium text-gray-900">Home</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="w-4 h-5 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <a href="/" className="mr-2 text-sm font-medium text-gray-900">Products</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" className="w-4 h-5 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li className="text-sm">
          <a href="/" aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">{products.title} {id}</a>
        </li>
      </ol>
    </nav>

    <div className="max-w-2xl mx-auto mt-6 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div className="hidden overflow-hidden rounded-lg aspect-h-4 aspect-w-3 lg:block">
        <img src={products.image} alt="Model wearing BLACK GOWN." className="object-cover object-center w-full h-full"/>
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
          <img src={products.image} alt="Model wearing BLACK GOWN." className="object-cover object-center w-full h-full"/>
        </div>
        <div className="overflow-hidden rounded-lg aspect-h-2 aspect-w-3">
          <img src={products.image} alt="Model wearing BLACK GOWN." className="object-cover object-center w-full h-full"/>
        </div>
      </div>
      <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
        <img src={products.image} alt="Model wearing BLACK GOWN." className="object-cover object-center w-full h-full"/>
      </div>
    </div>

    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{products.title}</h1>
      </div>

      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">${products.price}</p>

        <div className="mt-6">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
          <div className="flex space-x-2 text-xl text-yellow-400">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill className="text-black" />
            </div>
            <p className="sr-only">4 out of 5 stars</p>
            <a href="/" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
          </div>
        </div>

        <form className="mt-10">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Color</h3>

            <fieldset className="mt-4">
              <legend className="sr-only">Choose a color</legend>
              <div className="flex items-center space-x-3">
                
                <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label"/>
                  <span id="color-choice-0-label" className="sr-only">White</span>
                  <span aria-hidden="true" className="w-8 h-8 bg-white border border-black rounded-full border-opacity-10"></span>
                </label>
                
                <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                  <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label"/>
                  <span id="color-choice-1-label" className="sr-only">Gray</span>
                  <span aria-hidden="true" className="w-8 h-8 bg-gray-200 border border-black rounded-full border-opacity-10"></span>
                </label>
               
                <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900">
                  <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label"/>
                  <span id="color-choice-2-label" className="sr-only">Black</span>
                  <span aria-hidden="true" className="w-8 h-8 bg-gray-900 border border-black rounded-full border-opacity-10"></span>
                </label>
              </div>
            </fieldset>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <a href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
            </div>

            <fieldset className="mt-4">
              <legend className="sr-only">Choose a size</legend>
              <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-200 uppercase border rounded-md cursor-not-allowed group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50">
                  <input type="radio" name="size-choice" value="XXS" disabled className="sr-only" aria-labelledby="size-choice-0-label"/>
                  <span id="size-choice-0-label">XXS</span>
                  <span aria-hidden="true" className="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px">
                    <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                      <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                    </svg>
                  </span>
                </label>
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label"/>
                  <span id="size-choice-1-label">XS</span>
                  
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                </label>
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label"/>
                  <span id="size-choice-2-label">S</span>
                 
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                </label>
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label"/>
                  <span id="size-choice-3-label">M</span>
                  
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                </label>
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label"/>
                  <span id="size-choice-4-label">L</span>
                
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                </label>
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label"/>
                  <span id="size-choice-5-label">XL</span>
                 
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                </label>
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" value="2XL" className="sr-only" aria-labelledby="size-choice-6-label"/>
                  <span id="size-choice-6-label">2XL</span>
                 
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                </label>
                <label className="relative flex items-center justify-center px-4 py-3 text-sm font-medium text-gray-900 uppercase bg-white border rounded-md shadow-sm cursor-pointer group hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6">
                  <input type="radio" name="size-choice" value="3XL" className="sr-only" aria-labelledby="size-choice-7-label"/>
                  <span id="size-choice-7-label">3XL</span>
                  
                  <span className="absolute rounded-md pointer-events-none -inset-px" aria-hidden="true"></span>
                </label>
              </div>
            </fieldset>
          </div>

          {!cartArray.find((item) => item.id === products.id) ? (
                <button
                  onClick={() => handleAddToCart(products)}
                  className="flex items-center justify-center p-2 my-5 rounded-md"
                >
                  <AiOutlineShoppingCart className="mr-2" /> Add
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(products.id)}
                  className="flex items-center justify-center p-2 my-5 rounded-md"
                >
                  <AiOutlineShoppingCart className="mr-2" /> Remove
                </button>
              )}

          <button type="submit" className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white border border-transparent rounded-md bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">Add to Cart</button>
        </form>
      </div>

      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <div>
          <h3 className="sr-only">Description</h3>

          <div className="space-y-6">
            <p className="text-base text-gray-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ex nisi praesentium officia! Accusamus quam ullam veritatis commodi at molestiae hic eligendi esse, unde ut labore sunt maxime eum est?</p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

          <div className="mt-4">
            <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
              <li className="text-gray-400"><span className="text-gray-600">Hand cut and sewn locally</span></li>
              <li className="text-gray-400"><span className="text-gray-600">Handled with care</span></li>
              <li className="text-gray-400"><span className="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
              <li className="text-gray-400"><span className="text-gray-600">Ultra-soft 100% cotton</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-sm font-medium text-gray-900">Details</h2>

          <div className="mt-4 space-y-6">
            <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iste quod deserunt rem illum perferendis animi saepe. Eos perspiciatis debitis odit laborum sint magni consequatur ratione necessitatibus, animi sequi hic non doloremque porro maiores quidem tempora, dolorum suscipit accusantium dignissimos!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ProductDetails;
export {}