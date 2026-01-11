import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center px-6 mt-40 text-center sm:px-12 lg:px-24">
        <h1 className="text-2xl font-semibold md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here! :)</span>
        </h1>

        <p className="max-w-6xl mt-10 text-xl text-gray-600">
          Welcome to Book Haven, your ultimate online destination for books of all genres...
        </p>

        <Link
          to="/"
          className="w-24 p-2 mt-10 text-white duration-300 bg-pink-500 rounded-lg hover:bg-pink-700"
        >
          Back
        </Link>

        {/* Books */}
        <div className="grid grid-cols-1 gap-6 mt-16 md:grid-cols-3">
          {book.map((item, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <img src={item.image} alt={item.name} className="h-40 mx-auto" />
              <h2 className="mt-2 font-bold">{item.name}</h2>
              <p>₹{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
