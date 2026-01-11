export default function Cart({ cartItems = [], removeFromCart }) {
  return (
    <div className="p-6 mt-32">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="border-b py-2 flex justify-between items-center">
              {item.name} - ₹{item.price} × {item.quantity}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-0.5 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
