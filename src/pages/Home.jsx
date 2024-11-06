import Banner from "../components/Banner";
import ProductsList from "../components/ProductList";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Home Page - Gadget Heaven</title>
            </Helmet>
            <Banner></Banner>
            <h2 className="mt-[400px] text-center text-5xl font-bold mb-4">Explore Cutting-Edge Gadgets</h2>
            <ProductsList></ProductsList>
        </div>
    );
};

export default Home;