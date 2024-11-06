import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartWishlist } from './CartWishlistContext';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import ReactStars from 'react-rating-stars-component';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useLoaderData().find(p => p.product_id === Number(productId));
  const { cartItems, wishlistItems, addToCart, addToWishlist, removeFromWishlist } = useCartWishlist();

  const [inWishlist, setInWishlist] = useState(false);
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  useEffect(() => {
    
    const isProductInWishlist = wishlistItems.some(item => item.product_id === product.product_id);
    setInWishlist(isProductInWishlist);
  }, [wishlistItems, product.product_id]);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Item added to cart!', { autoClose: 2000 }); 
  };

  const handleAddToWishlist = () => {
    if (isAddingToWishlist) return; 

    setIsAddingToWishlist(true); 

    addToWishlist(product);
    setInWishlist(true); 

    toast.success('Item added to wishlist!', { autoClose: 2000 }); 
    setIsAddingToWishlist(false);
  };

  const handleRemoveFromWishlist = () => {
    removeFromWishlist(product.product_id);
    setInWishlist(false);
    toast.info('Item removed from wishlist.', { autoClose: 2000 });
  };

  return (
    <div className="w-11/12 mx-auto bg-purple-600 p-8 rounded-b-lg text-center relative overflow-visible">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Product Details</h2>
        <p className="text-white text-md md:text-lg mb-[100px]">Explore the latest gadgets...</p>
      </div>
      <div className="flex max-w-[1062px] mx-auto bg-white border rounded-lg border-gray-600" style={{
          width: '100%',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '-50px',
        }}>
        <div className="w-[455px] p-2">
          <img src={product.product_image} alt={product.product_title} className="w-full h-[503px] object-cover" />
        </div>
        <div className="py-8 flex-1 justify-between flex flex-col">
          <h1 className="text-2xl text-start font-bold">{product.product_title}</h1>
          <p className="text-lg text-start my-2">${product.price}</p>
          {product.availability ? (
            <button className="text-green-500 w-[87px] border border-green-500 rounded-full px-3 py-1 font-semibold">In Stock</button>
          ) : (
            <button className="text-red-500 w-[87px] font-semibold">Out of Stock</button>
          )}
          <p className="text-start">{product.description}</p>
          <h3 className="mt-4 text-start font-semibold">Specifications:</h3>
          <ul className="text-start">
            {product.specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <p className="text-start">Rating: {product.rating}</p>
          <div className="rating">
        <ReactStars
          count={5}
          value={product.rating}
          size={24}
          activeColor="#ffd700"
          isHalf={true}
        />
        </div>
          <div className="flex">
            <button onClick={handleAddToCart} className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700">
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className={`mt-4 ml-2 py-2 px-4 rounded-full ${inWishlist ? 'bg-gray-300' : 'bg-purple-600 text-white'}`}
              disabled={isAddingToWishlist || inWishlist}
            >
              {isAddingToWishlist ? 'Adding...' : inWishlist ? 'Added to Wishlist' : '♥'}
            </button>
            {inWishlist && (
              <button onClick={handleRemoveFromWishlist} className="mt-4 ml-2 py-2 px-4 rounded-full bg-purple-600 text-white">
                Remove from Wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;