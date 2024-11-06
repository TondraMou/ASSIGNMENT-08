import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartWishlist } from "./CartWishlistContext";
import group from "../assets/Group.png";

const CartItem = ({ cartItems, onRemove, onSort }) => {
  const [sortedCartItems, setSortedCartItems] = useState(cartItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const { clearCart } = useCartWishlist();

  useEffect(() => {
    setSortedCartItems(cartItems);
    const total = cartItems.reduce((total, item) => total + item.price, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  const handlePurchase = () => {
    if (cartItems.length === 0) return; 
    setIsModalOpen(true);  
    clearCart(); 
  };

  return (
    <div className="my-8">
      <div className="flex items-center">
        <h3 className="text-2xl font-semibold">Cart</h3>
      </div>
      <div className="flex justify-end gap-3 my-4">
      <p className="text-xl font-semibold mt-1">Total cost: ${totalPrice.toFixed(2)}</p>
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
          onClick={() => onSort(setSortedCartItems)}
        >
          Sort by Price
        </button>
        <button
          className={`ml-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 ${totalPrice === 0 ? "cursor-not-allowed opacity-50" : ""}`}
          onClick={handlePurchase}
          disabled={totalPrice === 0} 
        >
          Purchase
        </button>
      </div>

      
      <div className="space-y-4">
        {sortedCartItems.map((item, index) => (
          <div key={index} className="flex items-center bg-white border rounded-lg p-4 shadow-md">
            <img
              src={item.product_image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex-1">
              <h4 className="text-lg font-semibold">{item.product_title}</h4>
              <p>{item.description}</p>
              <p className="text-purple-600 font-bold">Price: ${item.price.toFixed(2)}</p>
            </div>
            <button
              className="text-red-500 font-bold text-lg ml-4"
              onClick={() => onRemove(index)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <div className="flex justify-center">
            <img src={group} alt="" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
            <p>Your purchase has been successful.</p>
            <div className="mt-4">
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
