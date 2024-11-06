import { useState, useEffect } from 'react';
import CartItem from '../components/CartItem'
import WishlistItems from '../components/WishlistItems';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('cart');
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const savedWishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    setCartItems(savedCartItems);
    setWishlistItems(savedWishlistItems);
  }, []);

  const handleTabChange = (tab) => setSelectedTab(tab);

  const removeCartItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const removeWishlistItem = (index) => {
    const updatedWishlist = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
  };

  const sortCartByPrice = (setSortedItems) => {
    setSortedItems([...cartItems].sort((a, b) => b.price - a.price));
  };

  return (
    <div className="w-11/12 mx-auto text-center">
      <Helmet>
        <title>DashBoard - Gadget Heaven</title>
      </Helmet>
      <div className="bg-purple-600 text-white p-8 rounded-b-lg">
        <h2 className="text-4xl font-bold mb-4">Dashboard</h2>
        <p>Explore your cart and wishlist items here!</p>
        <div className="mt-4">
          <button
            className={`px-6 py-2 rounded-full ${selectedTab === 'cart' ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'} mr-4`}
            onClick={() => handleTabChange('cart')}>
            Cart
          </button>
          <button
            className={`px-6 py-2 rounded-full ${selectedTab === 'wishlist' ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'}`}
            onClick={() => handleTabChange('wishlist')}>
            Wishlist
          </button>
        </div>
      </div>

      {selectedTab === 'cart' ? (
        <CartItem cartItems={cartItems} onRemove={removeCartItem} onSort={sortCartByPrice} />
      ) : (
        <WishlistItems wishlistItems={wishlistItems} onRemove={removeWishlistItem} />
      )}
    </div>
  );
};

export default Dashboard;

