/**
 * Exercise Types and Interfaces
 */

export type MuscleGroup =
  | 'chest'
  | 'back'
  | 'shoulders'
  | 'biceps'
  | 'triceps'
  | 'forearms'
  | 'legs'
  | 'quadriceps'
  | 'hamstrings'
  | 'glutes'
  | 'calves'
  | 'abs'
  | 'cardio';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type Equipment =
  | 'barbell'
  | 'dumbbell'
  | 'kettlebell'
  | 'machine'
  | 'cable'
  | 'bodyweight'
  | 'band'
  | 'medicine ball'
  | 'plate';

export interface Exercise {
  id: string;
  name: string;
  description: string;
  muscleGroup: MuscleGroup;
  difficulty: Difficulty;
  equipment: Equipment[];
  instructions?: string[];
  tips?: string[];
  variations?: string[];
  videoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateExerciseRequest {
  name: string;
  description: string;
  muscleGroup: MuscleGroup;
  difficulty: Difficulty;
  equipment: Equipment[];
  instructions?: string[];
  tips?: string[];
  variations?: string[];
  videoUrl?: string;
}

export interface UpdateExerciseRequest {
  name?: string;
  description?: string;
  muscleGroup?: MuscleGroup;
  difficulty?: Difficulty;
  equipment?: Equipment[];
  instructions?: string[];
  tips?: string[];
  variations?: string[];
  videoUrl?: string;
}

export interface ExerciseSet {
  id: string;
  exerciseId: string;
  reps: number;
  weight?: number; // in kg
  duration?: number; // in seconds
  restTime?: number; // in seconds
  notes?: string;
}

export interface ExerciseLog {
  id: string;
  exerciseId: string;
  exercise?: Exercise;
  sets: ExerciseSet[];
  date: Date;
  completed: boolean;
  notes?: string;
}
