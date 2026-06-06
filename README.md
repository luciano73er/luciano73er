# 💪 Gym Management App

Aplicación para la administración, gestión y evolución de tu trabajo en el gimnasio con recomendaciones inteligentes impulsadas por Gemini AI.

## 🏃 Características

- ✅ Gestión completa de rutinas de ejercicio
- ✅ Seguimiento de progreso y evolución
- ✅ Recomendaciones personalizadas con Gemini AI
- ✅ Análisis de técnicas y mejoras
- ✅ Dashboard intuitivo

## 📁 Estructura del Proyecto

```
gym-app/
├── backend/           # API REST con Node.js/Express
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── config/
│   └── package.json
├── frontend/          # React + TypeScript
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   └── package.json
└── docs/              # Documentación
```

## 🚀 Tech Stack

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** PostgreSQL + Prisma ORM
- **Authentication:** JWT
- **AI:** Google Gemini API

### Frontend
- **Framework:** React 18+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand

## 🔧 Instalación

### Requisitos previos
- Node.js 18+
- PostgreSQL 13+
- API Key de Gemini

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 🤖 Integración con Gemini

La app utiliza Gemini para:
1. **Recomendaciones de rutinas** - Genera rutinas personalizadas
2. **Análisis de técnicas** - Sugiere mejoras en la ejecución
3. **Asesoramiento** - Responde preguntas sobre ejercicios
4. **Evolución** - Analiza tu progreso y sugiere ajustes

## 📊 API Endpoints

### Ejercicios
- `GET /api/exercises` - Listar ejercicios
- `POST /api/exercises` - Crear ejercicio
- `GET /api/exercises/:id` - Obtener detalle

### Rutinas
- `GET /api/routines` - Listar rutinas
- `POST /api/routines` - Crear rutina
- `GET /api/routines/:id` - Obtener rutina

### Gemini AI
- `POST /api/ai/recommendations` - Obtener recomendaciones
- `POST /api/ai/analyze-technique` - Analizar técnica
- `POST /api/ai/chat` - Chat con IA

## 📝 Documentación

Ver [/docs](./docs) para más información.

## 📄 Licencia

MIT
