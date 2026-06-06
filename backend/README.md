# Gym App - Backend Setup Guide

## Prerequisites

- Node.js 18+
- npm or yarn
- Gemini API Key

## Installation

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the `backend` folder:

```bash
cp .env.example .env
```

Edit `.env` and add your Gemini API key:

```env
PORT=3001
GEMINI_API_KEY=your_actual_api_key_here
NODE_ENV=development
```

### 3. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy and paste it into your `.env` file

## Development

### Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3001`

### Build for Production

```bash
npm run build
```

This will compile TypeScript to JavaScript in the `dist` folder.

### Run Production Build

```bash
npm run start
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production build
- `npm test` - Run tests
- `npm run lint` - Check code style
- `npm run format` - Format code with Prettier

## API Endpoints

### Health Check

```
GET http://localhost:3001/api/health
```

### AI Endpoints

#### Get Recommendations

```
POST http://localhost:3001/api/ai/recommendations
Content-Type: application/json

{
  "experience": "intermediate",
  "goal": "muscle gain",
  "frequency": "4 days per week",
  "limitations": "back pain",
  "preferences": "home gym"
}
```

#### Analyze Technique

```
POST http://localhost:3001/api/ai/analyze-technique
Content-Type: application/json

{
  "exercise": "Squats",
  "description": "Going down to parallel, feet shoulder-width apart",
  "experience": "intermediate"
}
```

#### Chat

```
POST http://localhost:3001/api/ai/chat
Content-Type: application/json

{
  "message": "What is the best way to train chest?",
  "context": "I'm an intermediate lifter"
}
```

#### Analyze Progress

```
POST http://localhost:3001/api/ai/analyze-progress
Content-Type: application/json

{
  "workoutHistory": [
    {
      "date": "2026-06-01",
      "exercise": "Bench Press",
      "weight": 185,
      "reps": 8,
      "sets": 4
    }
  ],
  "currentGoal": "increase strength",
  "feedback": "Feeling strong"
}
```

#### Suggest Exercises

```
POST http://localhost:3001/api/ai/suggest-exercises
Content-Type: application/json

{
  "muscleGroup": "chest",
  "equipment": ["barbell", "dumbbells", "machine"],
  "experience": "intermediate"
}
```

#### Nutrition Advice

```
POST http://localhost:3001/api/ai/nutrition-advice
Content-Type: application/json

{
  "goal": "muscle gain",
  "restrictions": ["gluten"],
  "preferences": "high protein"
}
```

## Testing

### Run Tests

```bash
npm test
```

### With Coverage

```bash
npm test -- --coverage
```

## Troubleshooting

### GEMINI_API_KEY Error

Make sure your `.env` file has the correct API key:

```env
GEMINI_API_KEY=your_actual_key_here
```

### Port Already in Use

Change the PORT in `.env`:

```env
PORT=3002
```

### Module Not Found

Run:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── index.ts          # All controller classes
│   ├── services/
│   │   └── geminiService.ts  # Gemini AI service
│   ├── routes/
│   │   └── index.ts          # API routes
│   └── index.ts              # Main server file
├── package.json
├── tsconfig.json
├── jest.config.js
└── .env.example
```

## Next Steps

1. Start the backend server: `npm run dev`
2. Test API endpoints with Postman or cURL
3. Connect frontend to the API
4. Add database integration (Prisma + PostgreSQL)
5. Add authentication (JWT)

## Support

For issues or questions, check the [API Documentation](../docs/API.md)
