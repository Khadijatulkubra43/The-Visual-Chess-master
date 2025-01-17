import React from "react";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "react-icons/ri";
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="px-4 divide-y text-white bg-transparent relative">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Logo Section */}
        <div className="lg:w-1/3 flex justify-center lg:justify-start">
          <a rel="noopener noreferrer" href="#">
            <img
              src={logo}
              alt="Logo"
              className="w-36 h-36" // Increased logo size
            />
          </a>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-white">Product</h3>
            <ul className="space-y-1">
              <li><a rel="noopener noreferrer" href="#">Features</a></li>
              <li><a rel="noopener noreferrer" href="#">Integrations</a></li>
              <li><a rel="noopener noreferrer" href="#">Pricing</a></li>
              <li><a rel="noopener noreferrer" href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-white">Company</h3>
            <ul className="space-y-1">
              <li><a rel="noopener noreferrer" href="#">Privacy</a></li>
              <li><a rel="noopener noreferrer" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-white">Developers</h3>
            <ul className="space-y-1">
              <li><a rel="noopener noreferrer" href="#">Public API</a></li>
              <li><a rel="noopener noreferrer" href="#">Documentation</a></li>
              <li><a rel="noopener noreferrer" href="#">Guides</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-white">Social media</div>
            <div className="flex justify-start space-x-4">
              {/* Increased Icon Sizes */}
              <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1 text-2xl">
                <RiFacebookFill />
              </a>
              <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1 text-2xl">
                <RiTwitterFill />
              </a>
              <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1 text-2xl">
                <RiInstagramFill />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-6 text-sm text-center text-white">
        © {currentYear} The Visual Chess. All rights reserved.
      </div>

      {/* Scroll to Top Button */}
      <div className="absolute bottom-4 right-4 flex justify-center">
        <button
          onClick={scrollToTop}
          className="p-3 bg-transparent text-white rounded-full text-5xl   hover:bg-blue-500 hover:border-blue-500 transition duration-300"
        >
          &#8593; {/* Arrow symbol */}
        </button>
      </div>
    </footer>
  );
}
