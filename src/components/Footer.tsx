import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Music Academy
          </h3>
          <p className="text-sm leading-6">
            Learn music from professional instructors. Our platform offers
            high-quality lessons in guitar, piano, vocals, and music production
            to help you start or improve your musical journey.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-white transition">
                Courses
              </a>
            </li>
            <li>
              <a href="/instructors" className="hover:text-white transition">
                Instructors
              </a>
            </li>
            <li>
              <a href="/webinars" className="hover:text-white transition">
                Webinars
              </a>
            </li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Popular Courses
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Guitar Basics</li>
            <li className="hover:text-white cursor-pointer">
              Piano for Beginners
            </li>
            <li className="hover:text-white cursor-pointer">Vocal Training</li>
            <li className="hover:text-white cursor-pointer">
              Music Production
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
              Facebook
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition">
              YouTube
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Music Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
