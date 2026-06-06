# Gym App API Documentation

## Base URL

```
http://localhost:3001/api
```

## Autenticación

Todos los endpoints requieren JWT token en el header:

```
Authorization: Bearer <token>
```

## Endpoints

### Ejercicios

#### Listar todos los ejercicios

```
GET /exercises
```

#### Crear nuevo ejercicio

```
POST /exercises

Body:
{
  "name": "Sentadillas",
  "description": "Ejercicio para piernas",
  "muscleGroup": "piernas",
  "difficulty": "intermedio"
}
```

### Rutinas

#### Listar rutinas

```
GET /routines
```

#### Crear rutina

```
POST /routines

Body:
{
  "name": "Rutina Pecho y Tríceps",
  "description": "Rutina de fuerza",
  "exercises": ["ex-001", "ex-002"]
}
```

### Gemini AI

#### Obtener recomendaciones

```
POST /ai/recommendations

Body:
{
  "experience": "intermedio",
  "goal": "ganancia muscular",
  "frequency": "4 días por semana",
  "limitations": "dolor de espalda"
}
```

#### Analizar técnica

```
POST /ai/analyze-technique

Body:
{
  "exercise": "Sentadillas",
  "description": "Descripción del movimiento realizado"
}
```

#### Chat con IA

```
POST /ai/chat

Body:
{
  "message": "¿Cuál es la mejor forma de entrenar pecho?"
}
```
