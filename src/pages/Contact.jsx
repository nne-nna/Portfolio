import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        'service_ppyzhkm', 
        'template_0nyou01', 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Nnenna', 
        },
        'EGAlSYDokuM1ZZv9m'
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:ezidiegwunnennafavour@gmail.com',
      icon: Mail,
      text: 'ezidiegwunnennafavour@gmail.com'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/nne-nna/',
      icon: Github,
      text: 'github.com/nne-nna'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nnenna-ezidiegwu-23404124b/',
      icon: Linkedin,
      text: 'linkedin.com/in/nnenna-ezidiegwu'
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Get in <span className="text-green-400">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations.
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400 transition-shadow"
                  placeholder="Your message..."
                />
              </div>

              {status.message && (
                <div className={`flex items-center gap-2 text-sm ${
                  status.type === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-400 text-gray-900 py-3 px-6 rounded-lg hover:bg-green-500 
                transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-100">
                Connect With Me
              </h2>
              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition-colors group"
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="text-sm group-hover:underline">{link.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-gray-100">
                Looking for Opportunities
              </h2>
              <p className="text-gray-400">
                I'm currently available for freelance projects, full-time positions, 
                and interesting collaborations. Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;