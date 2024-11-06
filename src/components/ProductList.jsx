
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';
import Categories from './Categories';

const ProductsList = () => {
  const products = useLoaderData();
  const [activeCategory, setActiveCategory] = React.useState('All Product');

  const filteredProducts = activeCategory === 'All Product' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-11/12 mx-auto">
      <Categories setActiveCategory={setActiveCategory} />
      <div className="grid lg:grid-cols-3 justify-center w-full">
        {filteredProducts.map(product => (
          <div className="w-full p-4" key={product.product_id}>
            <ProductsCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
