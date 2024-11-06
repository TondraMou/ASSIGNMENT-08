
import { NavLink } from 'react-router-dom';
import { useCartWishlist } from './CartWishlistContext';

const Navbar = ({ isHomePage }) => {
  const { cartItems, wishlistItems } = useCartWishlist();

  return (
    <div className={`navbar p-4 ${isHomePage ? 'bg-purple-600 text-white' : ''} bg-base-100 w-11/12 mx-auto`}>
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-12">
          <NavLink to="/" className={({ isActive }) =>
            isActive
              ? 'text-white font-bold'  
              : isHomePage
              ? 'text-white'       
              : 'text-black'   
          }>
            Home
          </NavLink>
          <NavLink to="/statistics" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>Statistics</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>Dashboard</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-purple-600 font-bold" : ""}>Contact</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <NavLink to="/cart">
          <i
            className={`ri-shopping-cart-2-line border-slate-500 rounded-full border bg-white p-3 ${isHomePage ? 'text-black' : ''}`}
          >
            <span className="badge">{cartItems.length}</span>
          </i>
        </NavLink>
        <NavLink to="/wishlist">
          <i
            className={`ri-heart-line border-slate-500 rounded-full border bg-white p-3 ${isHomePage ? 'text-black' : ''}`}
          >
            <span className="badge">{wishlistItems.length}</span>
          </i>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

