import errorImg from "../assets/error.jpg";
import { Helmet } from "react-helmet";

const Error = () => {
    return (
        <div className="flex justify-center mx-auto w-[80%] h-[500px]">
            <Helmet>
                <title>Error Page - Gadget Heaven</title>
             </Helmet>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default Error;