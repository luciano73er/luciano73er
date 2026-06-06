/**
 * Workout Types and Interfaces
 */

import { Exercise, ExerciseLog } from './exercise.types';

export type WorkoutType = 'strength' | 'hypertrophy' | 'endurance' | 'cardio' | 'mixed';

export interface WorkoutExercise {
  exerciseId: string;
  exercise?: Exercise;
  sets: number;
  reps: number;
  weight?: number; // in kg
  duration?: number; // in seconds
  restTime?: number; // in seconds
  notes?: string;
}

export interface Workout {
  id: string;
  userId: string;
  name: string;
  description?: string;
  type: WorkoutType;
  exercises: WorkoutExercise[];
  duration?: number; // in minutes
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateWorkoutRequest {
  name: string;
  description?: string;
  type: WorkoutType;
  exercises: WorkoutExercise[];
  duration?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface UpdateWorkoutRequest {
  name?: string;
  description?: string;
  type?: WorkoutType;
  exercises?: WorkoutExercise[];
  duration?: number;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface WorkoutSession {
  id: string;
  userId: string;
  workoutId: string;
  workout?: Workout;
  startTime: Date;
  endTime?: Date;
  duration?: number; // in minutes
  exercises: ExerciseLog[];
  notes?: string;
  rating?: number; // 1-5
  completed: boolean;
  createdAt: Date;
}

export interface CreateWorkoutSessionRequest {
  workoutId: string;
  exercises: ExerciseLog[];
  notes?: string;
  rating?: number;
  completed: boolean;
}

export interface UpdateWorkoutSessionRequest {
  exercises?: ExerciseLog[];
  notes?: string;
  rating?: number;
  completed?: boolean;
}
