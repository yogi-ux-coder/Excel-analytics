# 📊 Excel Analytics

An Excel Analytics Dashboard built with the **MERN stack**.  
This project allows users to upload Excel files, visualize data in charts, and save chart history for future reference.

---

## 🚀 Features
- Upload Excel files (`.xlsx`, `.csv`)
- Parse and display data in tabular format
- Generate interactive charts (Bar, Line, Pie, etc.)
- Save chart history to **MongoDB**
- View and manage saved chart history
- Responsive frontend built with React
- Backend API with Node.js & Express

---

## 🛠️ Tech Stack
**Frontend:**
- React.js
- Plain CSS (no Tailwind)
- Chart.js / Recharts for visualizations

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose

**Deployment:**
- Frontend: Vercel
- Backend: (can be hosted on Render, Railway, or local server)
- Database: MongoDB Atlas

---

## 📂 Project Structure
Excel-analytics/
│── backend/ # Express server + MongoDB models
│── frontend/ # React application
│ ├── public/
│ └── src/
│── README.md # Project documentation

## ⚡ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yogi-ux-coder/Excel-analytics.git
cd Excel-analytics

2️⃣ Backend Setup
cd backend
npm install
npm start

3️⃣ Frontend Setup
cd ../frontend
npm install
npm start

📌 Future Enhancements
User authentication (JWT)
Export charts as images/PDF
More advanced analytics (filters, pivot tables)

