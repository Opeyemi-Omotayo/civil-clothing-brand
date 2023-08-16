import React from 'react';
import Products from '../products/Products';
import Footer from '../footer/Footer';
import Banner from '../banner/Banner';
import { ProductItem } from '../../App';

const Home = ( { products }: { products: ProductItem[] }) => {
  return (
    <div>
        <Products product= {products}/>
        <Banner />
        <Footer />
    </div>
  )
}

export default Home;