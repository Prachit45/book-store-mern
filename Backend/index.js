import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./route/user.route.js";


// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/user", userRoutes);


// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/Bookstore", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected to Bookstore"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

//Schema
const bookSchema = new mongoose.Schema({
  id:Number,
  name:String,
  title:String,
  price:String,
  category:String,
  image:String
});

const Book = mongoose.model("Book", bookSchema);

// Route to fetch all books
app.get("/book", async (req, res) => {
  try {
    const books = await Book.find();
    console.log(`📚 Fetched ${books.length} books from DB`);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
