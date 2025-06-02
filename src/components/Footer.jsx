import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#D6BBFB] py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-serif font-bold mb-4 text-[#BFA2DB]">
            SugandhaLok Perfumes
          </h3>
          <p className="mb-4 max-w-sm text-[#A285C9]">
            Exquisite fragrances crafted with passion.<br />
            Sector 22, Chandigarh, India
          </p>
          <div className="flex items-center gap-4 mb-2 cursor-pointer hover:text-[#C026D3] transition-colors">
            <FaPhone className="text-[#C026D3] text-xl" />
            <a href="tel:+919876543210" className="hover:underline">
              +91 9876543210
            </a>
          </div>
          <div className="flex items-center gap-4 cursor-pointer hover:text-[#C026D3] transition-colors">
            <FaEnvelope className="text-[#C026D3] text-xl" />
            <a href="mailto:support@sugandha.com" className="hover:underline">
              support@sugandhalok.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-serif font-bold mb-4 text-[#BFA2DB]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[#A285C9]">
            <li>
              <a
                href="/"
                className="hover:text-[#C026D3] hover:underline transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="hover:text-[#C026D3] hover:underline transition"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-[#C026D3] hover:underline transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#C026D3] hover:underline transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-[#C026D3] hover:underline transition"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="text-xl font-serif font-bold mb-4 text-[#BFA2DB]">
            Customer Services
          </h3>
          <ul className="space-y-2 text-[#A285C9]">
            <li>
              <a
                href="/returns"
                className="hover:text-[#C026D3] hover:underline transition"
              >
                Returns & Refunds
              </a>
            </li>
            <li>
              <a
                href="/shipping"
                className="hover:text-[#C026D3] hover:underline transition"
              >
                Shipping Info
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="hover:text-[#C026D3] hover:underline transition"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-[#C026D3] hover:underline transition"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-[#C026D3] hover:underline transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Location */}
        <div>
          <h3 className="text-xl font-serif font-bold mb-4 text-[#BFA2DB]">
            Follow Us
          </h3>
          <div className="flex gap-6 mb-6 text-[#C026D3] text-2xl">
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
            <a
              href="https://linkedin.com/company/sugandha"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#9D174D] transition"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="flex items-center gap-4 cursor-pointer hover:text-[#C026D3] transition-colors text-[#C026D3] text-lg">
            <FaMapMarkerAlt className="text-2xl" />
            <span>Sector 22, Chandigarh, India</span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[#3E3364] pt-6 text-center text-[#A285C9] text-sm">
        © {new Date().getFullYear()} SugandhaLok Perfumes. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
