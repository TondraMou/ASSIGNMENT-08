import contactImg from "../assets/contact.jpg";
import { useState } from "react";
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    
    console.log(formData);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setIsSubmitting(false);
  };

  return (
    <div className="w-11/12 mx-auto px-4 py-8">
        <Helmet>
        <title>Contact Page - Gadget Heaven</title>
       </Helmet>
        <h2 className='text-7xl text-center text-purple-600 mb-9'>Contact Us</h2>
      <div className="flex justify-between gap-8">
        
        <div className="w-full md:w-1/2 p-6 rounded-lg">
          <img src={contactImg} alt="" className="w-full h-fit"/>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg border border-gray-300">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;