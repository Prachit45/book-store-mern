import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <Navbar />
    <div className=" bg-gradient-to-b from-rose-50 to-white text-gray-800 px-6 py-16">
      <div className="p-28 mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-pink-500">Welcome to BookStore</h1>
        <p className="text-xl text-black mb-6 mt-20">
          At <span className="font-semibold">BookStore</span>, every page tells a story and every book opens a world of
          imagination. Since our founding, we’ve aimed to make books accessible and enjoyable for readers
          of all ages. From timeless classics and inspiring biographies to the latest thrillers and children’s
          favorites, our collection is carefully curated for you.
        </p>
        <p className="text-xl text-black mb-8">
          More than just a store, we are a community of book lovers. We host reading events, author meetups,
          and offer student discounts to encourage the love of reading. Discover new adventures, expand your
          knowledge, and grow with us every day.
        </p>

        {/* Highlights Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
          <div className="p-10 border rounded-xl shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Books</h3>
            <p className="text-black text-lg">
              Thousands of books across genres and categories.
            </p>
          </div>
          <div className="p-10 border rounded-xl shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Delivery</h3>
            <p className="text-black text-lg">
              Quick and safe delivery to your doorstep.
            </p>
          </div>
          <div className="p-10 border rounded-xl shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2 text-rose-500">Events</h3>
            <p className="text-black text-lg">
              Fun book clubs and meetups for readers.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-pink-100 text-gray-700 mt-12 py-8">
        <div className=" mx-auto  grid md:grid-cols-3 gap-5">
          {/* Brand */}
          <div className="pl-60">
            <h2 className="text-2xl font-bold text-pink-500">BookStore</h2>
            <p className="mt-2 text-sm">
              Your trusted place for books, events, and learning.  
            </p>
          </div>

          {/* Quick Links */}
          <div className="pl-48"> 
            <h3 className="text-lg font-semibold mb-3 text-pink-600 pl-16">Quick Links</h3>
            <ul className=" text-sm flex gap-5">
              <li><a href="/" className="hover:text-rose-500">Home</a></li>
              <li><a href="/about" className="hover:text-rose-500">About</a></li>
              <li><a href="/books" className="hover:text-rose-500">Books</a></li>
              <li><a href="/contact" className="hover:text-rose-500">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="pl-48">
            <h3 className="text-xl font-semibold mb-3 text-pink-600">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-500"><FaFacebookF /></a>
              <a href="#" className="hover:text-pink-500"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-pink-500"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-600 mt-6 border-t pt-4">
          © {new Date().getFullYear()} BookStore. All Rights Reserved.
        </div>
      </footer>
    </div>
  </>
  );
}
