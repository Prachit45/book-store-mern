// src/Courses/Courses.jsx
import React from "react";

export default function Courses({ addToCart }) {
  // Dummy product list (replace with API later if needed)
  const products = [
    { id: 1, name: "Dracula", price: 299, image: "./src/assets/Drucala.jpg" },
    { id: 2, name: "Journey To The Center of The Earth", price: 299, image: "./src/assets/The journey.jpg" },
    { id: 3, name: "The Crab with Golden Claws ", price: 299, image: "./src/assets/The Crab.jpg" },
    { id: 4, name: "Vishnu", price: 299, image: "./src/assets/Vishnu.jpg" },
    { id: 5, name: "The Jungle Adventures", price: 499, image: "./src/assets/jungle.jpg" },
    { id: 6, name: "Whiskers and Paws", price: 399, image: "./src/assets/whiskers.jpg" },
    { id: 7, name: "The Secret Garden", price: 299, image: "./src/assets/Garder.jpg" },
    { id: 8, name: "Humsafar", price: 299, image: "./src/assets/Humsafar.jpg" },
    { id: 9, name: "How to Be Happy With Who You Are", price: 299, image: "./src/assets/sudha.jpg" },
    { id: 10, name: "The Circle of life", price: 299, image: "./src/assets/circle.jpg" },
    { id: 11, name: "The Power Of Positive Attitude", price: 299, image: "./src/assets/positive.jpg" },
    { id: 12, name: "Think And Grow Rich", price: 299, image: "./src/assets/Think.jpg" },
    { id: 13, name: "Godaan", price: 299, image: "./src/assets/Godan.jpg" },
    { id: 14, name: "EK Din Zindagi Badal Jayegi", price: 299, image: "./src/assets/Ek.jpg" },
    { id: 15, name: "Build An Epic Career", price: 299, image: "./src/assets/build.jpg"},
    { id: 16, name: "The Power of Your Subconscious Mind", price: 299, image: "./src/assets/The power.jpg" },
    { id: 17, name: "You Can", price: 299, image: "./src/assets/You can.jpg" },
    { id: 18, name: "The Art of Being Alone", price: 299, image: "./src/assets/The art.jpg" },
    { id: 19, name: "How To Talk To Anyone", price: 299, image: "./src/assets/How to.jpg" },
    { id: 20, name: "You Only Live Once", price: 299, image: "./src/assets/you only.jpg" },
    { id: 21, name: "Hanuman Chalisa", price: 299, image: "./src/assets/Hanuman Chalisa.jpg" },
    { id: 22, name: "The Far From The Madding Crowd", price: 299, image: "./src/assets/The far.jpg" },
    { id: 23, name: "Desert Gold", price: 299, image: "./src/assets/Desert.jpg" },
    { id: 24, name: "Gulliver's Travels", price: 299, image: "./src/assets/Gullever.jpg" },
    
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-20 sm:grid-cols-2 md:grid-cols-4 mt-28">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 transition bg-white shadow-md rounded-2xl hover:shadow-xl"
        >
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full rounded-lg h-96"
          />
          <h2 className="mt-3 text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-600">₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="w-full px-4 py-2 mt-3 text-white transition bg-pink-500 rounded-lg hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
