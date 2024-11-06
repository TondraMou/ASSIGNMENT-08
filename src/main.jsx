import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './components/Root';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ProductsList from './components/ProductList';
import ProductsDetails from './pages/ProductsDetails';
import { CartWishlistProvider } from './components/CartWishlistContext';
import DashBoard from './pages/DashBoard';
import ContactUs from './pages/ContactUs';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    loader: () => fetch('/product.json').then(res => res.json()),
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/product.json').then(res => res.json()),
        children: [
          {
            path: '/',
            element: <ProductsList />,
            loader: () => fetch('/product.json').then(res => res.json()),
          },
        ]
      },
      {
        path: '/products/:productId',
        element: <ProductsDetails />,
        loader: () => fetch('/product.json').then(res => res.json()),
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      }
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartWishlistProvider>
      <RouterProvider router={router} />
    </CartWishlistProvider>
  </StrictMode>,
);

