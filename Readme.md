# RSVP App

A fullstack RSVP management application built using **TypeScript**, **Express.js**, **React** and **Vite** — designed to collect and display event RSVP responses.

---

## 📁 Project Structure

rsvp-app/

|----- backend/        # Express API with file-based storage (LowDB)

|----- frontend/        # React + Vite UI

## How to Run the App

### Prerequisites

- Node.js v18+
- npm (comes with Node)
- Any terminal + code editor (VS Code recommended)

### 🔧 1. Clone and Setup

```bash
git clone https://github.com/your-username/rsvp-app.git
cd rsvp-app
```


### **🟦 2. Run the Backend API**

Open a new terminal window:

```bash
cd backend
npm install
npm run dev
```

✔️ Starts the API at: **http://localhost:4000**

### **🟩 3. Run the Frontend App**

Open a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

✔️ Opens the UI at: **http://localhost:5173**

## **Features**

* 🎯 Add or update RSVP responses (Yes / No / Maybe)
* 📊 View live summary of responses
* 👀 Show/hide attendee list with a toggle button
* 💾 Data saved to a local JSON file (**rsvps.json**)

UI:
![image](https://github.com/user-attachments/assets/a81d50d3-c3a3-4361-a5ad-2fbe3d837104)



**🙌 Made by Ved Naik**
