# 🏋️‍♂️ AI Gym Planner | Full-Stack PERN Application

An intelligent, production-ready workout architect that transforms user fitness profiles into personalized, data-driven training regimes. Built with the **PERN stack** (PostgreSQL, Express, React, Node.js) and integrated with **OpenAI/OpenRouter**.


![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

## 🚀 Overview

Stop guessing your sets and reps. The **AI Gym Planner** takes the friction out of fitness by leveraging LLMs to analyze your goals, equipment, and schedule. It generates a structured, multi-week training plan complete with RPE targets and progression strategies.

### Core Features
*   **Intelligent Onboarding:** A multi-step questionnaire to capture fitness levels, goals, and available equipment.
*   **AI Logic Engine:** Powered by OpenRouter/OpenAI to generate structured JSON workout data.
*   **Robust Persistence:** User profiles and plans are stored securely in a PostgreSQL database (Neon) using Prisma ORM.
*   **Responsive UI:** A sleek, mobile-first dashboard built with Tailwind CSS for tracking workouts on the gym floor.
*   **Secure Auth:** Integrated authentication flow via Neon/Clerk.

---

## 🛠️ Tech Stack

### Frontend
*   **Framework:** React (Vite)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Routing:** React Router DOM

### Backend
*   **Server:** Node.js / Express
*   **ORM:** Prisma
*   **Database:** PostgreSQL (Neon)
*   **AI:** OpenAI API / OpenRouter

---

## 📂 Project Structure

```text
├── client/              # React frontend (Vite)
│   ├── src/components   # Reusable UI components
│   ├── src/pages        # Dashboard, Onboarding, Home
│   └── src/hooks        # Custom React hooks
├── server/              # Express backend
│   ├── prisma/          # Database schema & migrations
│   ├── routes/          # API endpoints
│   └── controllers/     # Business logic & AI prompt engineering
└── .env                 # Environment variables (API keys, DB URL)