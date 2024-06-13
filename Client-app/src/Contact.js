import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-900 text-gray-200 flex flex-col items-center p-6">
      <div className="w-full mt-20 max-w-2xl bg-gray-800 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-lg text-center mb-6">We'd love to hear from you! Whether you have a question about our menu, feedback on your recent order, or just want to say hello, feel free to reach out.</p>
        
        <form className="space-y-4">
          <div>
            <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border  text-black border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-black text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
