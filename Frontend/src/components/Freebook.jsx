import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { useEffect, useState } from "react";

function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4001/book")
      .then((res) => {
        console.log("API Response:", res.data);
        setBooks(res.data);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: books.length > 3,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 3} },
    ],
  };

  return (
    <div className="mt-16 px-6 sm:px-12 lg:px-24 max-w-[2200px] mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Avaliable Books</h2>

      {books.length > 0 && (
       <Slider {...settings}>
   {books.slice(0, 4).map((book, index) => (   // 👈 show only first 3 books
    <div key={book._id || index} className="p-3">
      <div className="card bg-base-100 shadow-xl hover:scale-105 duration-300 border">
        <figure>
          <img
            src={book.image}
            alt={book.name}
            className="w-full h-80 object-cover rounded-t-2xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {book.name}
            <div className="badge badge-secondary p-2 ml-2 text-black">
              {book.category}
            </div>
          </h2>
          <p>{book.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-4">{book.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 duration-300 hover:text-white p-4">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>

      )}
    </div>
  );
}

export default Freebook;