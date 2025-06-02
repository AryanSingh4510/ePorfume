import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaMapMarkerAlt,
} from 'react-icons/fa';

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-20 bg-[#121212] py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-[#1E1B2E] p-10 rounded-3xl shadow-xl border border-[#3E3364]">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif font-bold text-[#D6BBFB] mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-[#BFA2DB] max-w-xl mx-auto">
              We'd love to hear from you. Whether you have a question about
              our perfumes, need assistance, or just want to say hello, drop
              us a message.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#A285C9] mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#3E3364] rounded-lg bg-[#121212] text-white placeholder-[#6B5F8C] focus:outline-none focus:ring-2 focus:ring-[#C026D3] focus:border-transparent"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A285C9] mb-1">
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-[#3E3364] rounded-lg bg-[#121212] text-white placeholder-[#6B5F8C] focus:outline-none focus:ring-2 focus:ring-[#C026D3] focus:border-transparent"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A285C9] mb-1">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 border border-[#3E3364] rounded-lg bg-[#121212] text-white placeholder-[#6B5F8C] focus:outline-none focus:ring-2 focus:ring-[#C026D3] focus:border-transparent"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#9D174D] hover:bg-[#C026D3] text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-[#D6BBFB] flex flex-col justify-center space-y-8">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Get in Touch
          </h2>
          <div className="flex items-center gap-5 cursor-pointer hover:text-[#C026D3] transition-colors">
            <FaPhone className="text-[#C026D3] text-3xl" />
            <a href="tel:+919876543210" className="text-lg underline">
              +91 98765 43210
            </a>
          </div>
          <div className="flex items-center gap-5 cursor-pointer hover:text-[#C026D3] transition-colors">
            <FaEnvelope className="text-[#C026D3] text-3xl" />
            <a
              href="mailto:support@sugandha.com"
              className="text-lg underline"
            >
              support@sugandhalok.com
            </a>
          </div>
          <div className="flex items-center gap-5 cursor-pointer hover:text-[#C026D3] transition-colors">
            <FaMapMarkerAlt className="text-[#C026D3] text-3xl" />
            <span className="text-lg">Sector 22, Chandigarh, India</span>
          </div>

          <div className="flex space-x-8 text-[#C026D3] text-3xl">
            <a
              href="https://facebook.com/shopwithus"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#9D174D] transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/shopwithus"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#9D174D] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/shopwithus"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#9D174D] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
