

const Footer = () => {
    return (
        <div className='bg-gray-100 mx-auto p-4 mt-24 w-full'>
            <div className='flex flex-col items-center'>
                <h2 className="text-5xl font-bold mb-3">Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
                
            </div>
            <hr className='mt-5 border-t-2 border-black' />
            <div className="footer w-[60%] mx-auto p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of service</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</div>
        </div>
    );
};

export default Footer;