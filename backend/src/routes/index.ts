import { Router } from 'express';
import {
  AIController,
  WorkoutController,
  ExerciseController,
  ProgressController,
} from '../controllers';

const router = Router();

/**
 * AI Routes
 */
router.post('/ai/recommendations', AIController.getRecommendations);
router.post('/ai/analyze-technique', AIController.analyzeTechnique);
router.post('/ai/chat', AIController.chat);
router.post('/ai/analyze-progress', AIController.analyzeProgress);
router.post('/ai/suggest-exercises', AIController.suggestExercises);
router.post('/ai/nutrition-advice', AIController.getNutritionAdvice);

/**
 * Workout Routes
 */
router.post('/workouts', WorkoutController.createWorkout);
router.get('/workouts', WorkoutController.getWorkouts);
router.get('/workouts/:id', WorkoutController.getWorkoutById);
router.put('/workouts/:id', WorkoutController.updateWorkout);
router.delete('/workouts/:id', WorkoutController.deleteWorkout);

/**
 * Exercise Routes
 */
router.post('/exercises', ExerciseController.createExercise);
router.get('/exercises', ExerciseController.getExercises);
router.get('/exercises/:id', ExerciseController.getExerciseById);
router.put('/exercises/:id', ExerciseController.updateExercise);
router.delete('/exercises/:id', ExerciseController.deleteExercise);

/**
 * Progress Routes
 */
router.post('/progress', ProgressController.logProgress);
router.get('/progress/:userId', ProgressController.getProgress);
router.get('/progress/:userId/stats', ProgressController.getProgressStats);

export default router;
