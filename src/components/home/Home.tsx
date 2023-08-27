import React from 'react';
import Products from '../products/Products';
import Banner from '../banner/Banner';
import { ProductItem } from '../../App';
import Header from '../header/Header';

const Home = ( { products }: { products: ProductItem[] }) => {
  return (
    <div>
        <Header />
        <Products product= {products}/>
        <Banner />
    </div>
  )
}

export default Home;