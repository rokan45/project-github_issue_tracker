# 🐛 GitHub Issues Tracker

A responsive GitHub Issues Tracker web application built with HTML, Tailwind CSS, and Vanilla JavaScript. This project fetches real issue data from a REST API and displays them with filtering, searching, and detailed modal views.


## 🛠️ Tech Stack

- **HTML5**
- **Tailwind CSS** / DaisyUI
- **Vanilla JavaScript (ES6+)**

---

## ✨ Features

- 🔐 Login page with demo credentials
- 📋 View all GitHub issues in card layout
- 🟢 Filter issues by **All**, **Open**, and **Closed** tabs
- 🔍 Search issues by keyword
- 🪟 Click on a card to view full issue details in a modal
- 🎨 Color-coded top border: Green for Open, Purple for Closed
- ⏳ Loading spinner while data is being fetched
- 📱 Fully responsive design

---

## 🔑 Demo Credentials

| Field    | Value      |
|----------|------------|
| Username | `admin`    |
| Password | `admin123` |

---

## 📡 API Endpoints

| Purpose       | Endpoint                                                                 |
|---------------|--------------------------------------------------------------------------|
| All Issues    | `https://phi-lab-server.vercel.app/api/v1/lab/issues`                   |
| Single Issue  | `https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}`               |
| Search Issues | `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={query}`  |

---

## 📁 Project Structure

```
github-issues-tracker/
├── index.html        # Login page
├── main.html         # Main issues page
├── style.css         # Custom styles (if any)
├── app.js            # JavaScript logic
└── README.md         # Project documentation
```

---

## ⚙️ How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/github-issues-tracker.git
   ```
2. Open the project folder in VS Code.
3. Open `index.html` with **Live Server** extension.
4. Login using the demo credentials above.



## 🤝 Author

**Rokanuzzaman**
- CSE Undergraduate | MERN Stack Developer
- [GitHub](https://github.com/rokan45)
- [LinkedIn](https://linkedin.com/in/rokan45)

---

## 📄 License

This project is for educational purposes as part of a university assignment.
