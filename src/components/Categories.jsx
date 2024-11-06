
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const Categories = ({ setActiveCategory }) => {
  const products = useLoaderData();
  const categories = Array.from(new Set(products.map((product) => product.category)));
  const [activeCategory, setLocalActiveCategory] = useState('All Product');

  const handleCategoryClick = (category) => {
    setLocalActiveCategory(category);
    setActiveCategory(category);
  };

  return (
    <div className="p-4 mt-4 bg-gray-100 rounded-lg w-80">
      <button
        onClick={() => handleCategoryClick('All Product')}
        className={`w-full mb-2 py-2 rounded-full ${
          activeCategory === 'All Product' ? 'bg-purple-500 text-white' : 'bg-gray-200'
        }`}>
        All Product
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`w-full mb-2 py-2 rounded-full ${
            activeCategory === category ? 'bg-purple-500 text-white' : 'bg-gray-200'
          }`}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;



