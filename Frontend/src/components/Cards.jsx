import React from "react";

function Cards({ item, addToCart }) {
  return (
    <div className="mt-10">
      <div
        className="card bg-base-100 shadow-xl m-3 border 
                   hover:scale-105 hover:ring-2 hover:ring-pink-400 
                   focus:outline-none focus:ring-2 focus:ring-pink-400 
                   duration-300 cursor-pointer"
        tabIndex="0"
        onClick={() => addToCart(item)}   // ✅ Add to cart on card click
      >
        <figure>
          <img src={item.image} alt="Books" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary p-2 ml-2 text-black">
              {item.category}
            </div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-4">{item.price}</div>
            <button
              className="badge badge-outline hover:bg-pink-500 duration-300 hover:text-white p-4"
              onClick={(e) => {
                e.stopPropagation(); // ✅ prevent double trigger when clicking button
                addToCart(item);
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
