# 🏪 Store Rating System

A full-stack web application that allows users to rate and review stores, with role-based dashboards and authentication for admins, store owners, and normal users.

## 🚀 Features

### 🔐 Authentication & Roles
- JWT-based login and registration
- Three roles:
  - **Admin**: Manage users, stores, and view KPIs
  - **Store Owner**: Register and manage their own store
  - **User**: Rate and view stores

### 📊 Dashboards
- **Admin Dashboard**: View total users, stores, ratings, and manage listings
- **User Dashboard**: Browse and rate stores, view personal ratings
- **Store Owner Dashboard** *(coming soon)*: Manage their own store and view feedback

### ⭐ Store Rating
- Users can rate stores from 1 to 5
- Store pages show average rating and individual user rating

---

## 🛠 Tech Stack

### 🧠 Backend
- Node.js + Express.js
- PostgreSQL with `pg` module
- JWT Authentication
- REST API

### 🎨 Frontend
- React.js with Tailwind CSS
- Axios for API requests
- React Router DOM for routing

---

## 📦 Installation

### Backend
```bash
cd backend
npm install
npm run dev


PORT=5000
JWT_SECRET=your_jwt_secret
DATABASE_URL=postgres://user:password@localhost:5432/store_rating_db


cd frontend
npm install
npm run dev
