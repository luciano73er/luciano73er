/**
 * AI Request and Response Types
 */

export interface WorkoutRecommendationRequest {
  experience: 'beginner' | 'intermediate' | 'advanced';
  goal: string;
  frequency: string; // "3 days per week", etc.
  limitations?: string;
  preferences?: string;
}

export interface TechniqueAnalysisRequest {
  exercise: string;
  description: string;
  experience?: string;
}

export interface ChatRequest {
  message: string;
  context?: string;
}

export interface ProgressAnalysisRequest {
  workoutHistory: WorkoutHistoryEntry[];
  currentGoal: string;
  feedback?: string;
}

export interface WorkoutHistoryEntry {
  date: string;
  exercise: string;
  weight?: number;
  reps?: number;
  sets?: number;
  duration?: number; // in minutes
}

export interface ExerciseSuggestionRequest {
  muscleGroup: string;
  equipment: string[];
  experience: string;
}

export interface NutritionAdviceRequest {
  goal: string;
  restrictions: string[];
  preferences?: string;
  weight?: number;
  experience?: string;
}

export interface AIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  details?: string;
}
