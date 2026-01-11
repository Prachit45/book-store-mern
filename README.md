

# 📚 Book Store – MERN Stack Application

A **full-stack MERN (MongoDB, Express, React, Node.js)** Book Store web application that allows users to browse books, view details, authenticate securely, and manage their cart.
The project is built with a clean frontend UI and a scalable backend API.

---

## 🚀 Project Overview

The **Book Store MERN Application** is a complete end-to-end web app developed to demonstrate real-world full-stack development skills.
It includes user authentication, RESTful APIs, database integration, and a responsive frontend.
---

## 🛠️ Tech Stack

### Frontend

* ⚛️ React.js (Vite)
* 🎨 Tailwind CSS
* 🔄 Axios
* 🌐 React Router DOM

### Backend

* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB
* 📦 Mongoose
* 🔐 JWT Authentication
* 🧪 REST APIs

### Tools

* Git & GitHub
* VS Code
* Postman
* npm

---

## ✨ Features

### 🔐 Authentication

* User Signup & Login
* Secure password handling
* JWT-based authentication

### 📚 Book Management

* Fetch books from MongoDB
* Display books in card layout
* Dynamic data from backend APIs

### 🛒 Cart Functionality

* Add books to cart
* Remove items from cart
* Cart state management

### 🎯 UI/UX

* Responsive design (mobile & desktop)
* Clean and modern UI
* Smooth navigation

## ⚙️ Project Setup (Run Locally)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Prachit45/book-store-mern.git
cd book-store-mern
```

---

### 2️⃣ Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file inside `Backend`:

```env
PORT=4001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

Backend will run on:

```
http://localhost:4001
```

---

### 3️⃣ Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints (Sample)

| Method | Endpoint     | Description   |
| ------ | ------------ | ------------- |
| GET    | /book        | Get all books |
| POST   | /user/signup | User signup   |
| POST   | /user/login  | User login    |

---

## 📂 Folder Structure

```
book-store-mern/
│
├── Backend/
│   ├── controller/
│   ├── model/
│   ├── route/
│   ├── index.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
```

---

## 🎯 Why This Project?

✔ Demonstrates **real-world MERN architecture**
✔ Clean separation of frontend & backend
✔ Uses **best practices** (MVC, REST, JWT)
✔ Resume-ready full-stack project

---

## 👨‍💻 Author

**Prachit Honrao**

* GitHub: [https://github.com/Prachit45](https://github.com/Prachit45)
* Role: MERN Stack Developer

---

## ⭐ Future Enhancements

* Payment gateway integration
* Admin dashboard
* Order history
* Book search & filters
* Cloud image storage

