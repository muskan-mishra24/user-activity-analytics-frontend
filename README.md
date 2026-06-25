# User Activity Analytics Frontend

A modern React-based analytics dashboard that visualizes user activity, engagement metrics, and system insights through interactive charts and real-time reporting.

## 🚀 Live Demo

Frontend: https://user-activity-analytics-frontendmm.vercel.app/

Backend : https://user-activity-analytics-api-1.onrender.com/

---

## 📌 Features

- Secure User Authentication
- Interactive Analytics Dashboard
- Daily Activity Tracking
- User Engagement Metrics
- Real-Time Data Visualization
- Responsive UI Design
- Protected Routes
- REST API Integration
- Error Handling & Loading States

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Recharts
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```bash
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProtectedRoute.jsx
│
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│
├── services/
│   └── api.js
│
├── App.jsx
├── main.jsx
│
public/
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/yourusername/user-activity-analytics-frontend.git
```

### Navigate to Project

```bash
cd user-activity-analytics-frontend
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
VITE_API_URL=https://user-activity-analytics-api-1.onrender.com/api
```

### Run Development Server

```bash
npm run dev
```

---

## 📊 Dashboard Analytics

The dashboard provides:

- Total Users
- Daily Active Users
- User Activity Logs
- Login Trends
- Activity Distribution
- Engagement Analytics

---

## 🔒 Authentication

- JWT Based Authentication
- User Registration
- Secure Login
- Protected Routes
- Session Persistence

---

## 🌐 API Integration

The frontend communicates with the backend using Axios.

Example:

```javascript
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
```

---

## 📸 Screenshots
### Login Page
![Login](screenshots/login.png)
### Dashboard

Add screenshots here after deployment.

```text
Screenshots/
├── dashboard.png
├── login.png
└── analytics.png
```

---

## 📈 Future Improvements

- Export Analytics Reports
- Dark Mode
- Advanced Filtering
- Role-Based Access Control
- Real-Time Notifications
- User Behavior Prediction

---

## 👨‍💻 Author

Muskan Mishra

GitHub: https://github.com/muskan-mishra24

LinkedIn: Add Your LinkedIn Profile

---

## ⭐ Project Highlights

✔ Full-Stack MERN Application

✔ Authentication & Authorization

✔ Interactive Data Visualization

✔ REST API Integration

✔ Cloud Deployment (Render + Vercel)

✔ Production-Ready Architecture

---

If you found this project useful, consider giving it a ⭐.
