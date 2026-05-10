# AI Gym Planner

A full-stack AI-powered fitness application that generates personalized workout plans based on user goals, experience level, workout frequency, and available equipment.

Built with React, TypeScript, Express, PostgreSQL, Prisma, and OpenRouter AI models.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- React Router DOM

### Backend
- Node.js
- Express.js
- Prisma ORM

### Database
- PostgreSQL
- Neon

### AI
- OpenRouter API
- OpenAI-Compatible Models

---

## Features

- User authentication
- AI-generated workout plans
- Personalized onboarding flow
- Weekly training schedules
- Exercise recommendations
- Sets, reps, and RPE tracking
- Responsive UI
- PostgreSQL data storage

---

## Project Structure

```bash
ai-gym-planner/
│
├── client/
├── server/
├── prisma/
├── .env
└── README.md
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
DATABASE_URL=
OPENROUTER_API_KEY=
AUTH_SECRET=
PORT=5000
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/ai-gym-planner.git
cd ai-gym-planner
```

### Install Dependencies

```bash
# frontend
cd client
npm install

# backend
cd ../server
npm install
```

---

## Database Setup

```bash
npx prisma migrate dev
npx prisma generate
```

---

## Run Application

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

---

## AI Workflow

1. User completes onboarding form
2. Backend formats fitness data into AI prompts
3. OpenRouter generates structured workout plans
4. Plans are stored in PostgreSQL
5. Frontend renders schedules and exercises dynamically

---

## Screenshots

Add project screenshots here.

```md
/assets/home.png
/assets/dashboard.png
/assets/workout-plan.png
```

---

## Future Improvements

- Workout progress tracking
- Nutrition planning
- Analytics dashboard
- PDF export
- Mobile support
- Subscription system

---

## Credits

Built while following the full-stack AI course by :contentReference[oaicite:0]{index=0}.

---

## License

This project is for educational and learning purposes.