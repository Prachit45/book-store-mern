// backend/routes/book.routes.js
import express from "express";
import Book from "../model/book.model.js"; // Your Mongoose model

const router = express.Router();

// GET all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
