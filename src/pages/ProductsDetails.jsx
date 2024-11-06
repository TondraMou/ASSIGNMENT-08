import ProductDetails from "../components/ProductDetails";
import { Helmet } from "react-helmet";


const ProductsDetails = () => {
    return (
        <div>
            <Helmet>
              <title>ProductDetails Page - Gadget Heaven</title>
             </Helmet>
            <ProductDetails></ProductDetails>
        </div>
    );
};

export default ProductsDetails;