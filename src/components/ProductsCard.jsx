
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
  return (
    <div className="border w-[325px] rounded-lg overflow-hidden shadow-md p-2 mb-4">
      <div className='w-[325px]'>
      <img src={product.product_image} alt={product.product_title} className="w-full h-[250px] object-cover" />
      </div>
      <h2 className="text-lg font-semibold mt-2">{product.product_title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <Link to={`/products/${product.product_id}`}>
        <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductsCard;

