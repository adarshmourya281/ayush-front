import { Link } from "react-router-dom";

import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-[#f8f8f8] pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">
          
          {/* Left */}
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-gray-500 leading-8 text-[17px] max-w-[280px]">
              Transforming healthcare delivery through innovative
              technology solutions that empower providers.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-[#7d9dd8] flex items-center justify-center text-white hover:bg-[#5f84cb] transition"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-[#7d9dd8] flex items-center justify-center text-white hover:bg-[#5f84cb] transition"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-[#7d9dd8] flex items-center justify-center text-white hover:bg-[#5f84cb] transition"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[34px] font-bold text-[#2fc7a3]">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-gray-500 text-[18px]">
              
              <Link
                to="/"
                className="hover:text-[#2fc7a3] transition"
              >
                • Features
              </Link>

              <Link
                to="/"
                className="hover:text-[#2fc7a3] transition"
              >
                • Dashboard
              </Link>

              <Link
                to="/testimonials"
                className="hover:text-[#2fc7a3] transition"
              >
                • Testimonials
              </Link>

              <Link
                to="/pricing"
                className="hover:text-[#2fc7a3] transition"
              >
                • Pricing
              </Link>

              <Link
                to="/contact"
                className="hover:text-[#2fc7a3] transition"
              >
                • Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[34px] font-bold text-[#2fc7a3]">
              Support
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-gray-500 text-[18px]">
              <p>• Help Center</p>
              <p>• Contact Support</p>
              <p>• System Status</p>
              <p>• Training</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[34px] font-bold text-[#2fc7a3]">
              Contact Info
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-gray-500 text-[18px] leading-8">
              <p>
                125, Jubilee Hills,
                Hyderabad
              </p>

              <p>info@ayushcms.com</p>

              <p>+91 9666655590</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-[17px]">
          © 2026 AYUSH. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
