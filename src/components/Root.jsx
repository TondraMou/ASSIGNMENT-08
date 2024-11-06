
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    const location = useLocation();

    const isHomePage = location.pathname === '/';


    const isProductDetailsPage = location.pathname.includes('/products/');
    return (
        <div>
            <ToastContainer position="top-center" /> 
            <Navbar isHomePage={isHomePage}></Navbar>
            <Outlet></Outlet>
            <footer className={`${isProductDetailsPage ? 'mt-96' : ''} p-4 text-center text-white`}></footer>
            <Footer></Footer>
        </div>
    );
};

export default Root;