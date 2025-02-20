import React from 'react';
import ContactSection from '../components/contact/ContactSection';

const Contact = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">
          Contact <span className="text-green-400">Me</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 text-gray-900 py-2 px-4 rounded-md hover:bg-green-500 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Other Ways to Connect</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-green-400 font-medium mb-2">Email</h3>
                <p className="text-gray-400">your.email@example.com</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-green-400 font-medium mb-2">Location</h3>
                <p className="text-gray-400">Your City, Country</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-green-400 font-medium mb-2">Social Media</h3>
                <div className="space-y-2 text-gray-400">
                  <p>GitHub: https://github.com/nne-nna/</p>
                  <p>LinkedIn: https://www.linkedin.com/in/nnenna-ezidiegwu</p>
                  <p>Twitter: https://x.com/neneofdgoodlife/</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactSection />
      </div>
    </main>
  );
};

export default Contact;