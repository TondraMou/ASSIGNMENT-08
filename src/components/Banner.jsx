import { Link } from 'react-router-dom';
import bannerIMG from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-purple-600 p-8 rounded-b-lg text-center w-11/12 mx-auto overflow-visible">
      <div className="max-w-5xl mx-auto mt-7">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-white text-md md:text-lg mb-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to
          the coolest accessories, we have it all!
        </p>
        <Link to="/dashboard">
          <button className="bg-white text-purple-600 font-semibold mb-24 py-2 px-6 rounded-full hover:bg-purple-100 transition">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="mt-16 lg:w-[1062px] mx-auto relative">
        <img
          src={bannerIMG}
          alt="Gadget Accessory"
          className=" mx-auto border-2 border-white p-4 inset-0 bg-white bg-opacity-20 rounded-lg"
          style={{
            maxHeight: '563px',
            width: '100%',
            objectFit: 'cover',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            marginTop: '-150px',
            zIndex: 1,
            backdropFilter: '30px',
          }}
        />
      </div>
    </div>
  );
};

export default Banner;


