/**
 * Progress Types and Interfaces
 */

export interface ProgressRecord {
  id: string;
  userId: string;
  date: Date;
  weight?: number; // in kg
  bodyFat?: number; // in percentage
  measurements?: BodyMeasurements;
  notes?: string;
}

export interface BodyMeasurements {
  chest?: number; // in cm
  waist?: number;
  hips?: number;
  thighs?: number;
  arms?: number;
  calves?: number;
}

export interface ProgressStats {
  totalWorkouts: number;
  totalExercises: number;
  totalSets: number;
  totalReps: number;
  totalWeight: number; // sum of all weights
  averageWorkoutDuration: number; // in minutes
  weeklyFrequency: number;
  streak: number; // consecutive days
  bestExercise?: {
    exerciseId: string;
    exerciseName: string;
    weight: number;
    reps: number;
  };
}

export interface ProgressAnalysis {
  period: 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  startDate: Date;
  endDate: Date;
  stats: ProgressStats;
  improvements: string[];
  recommendations: string[];
  trends: ProgressTrend[];
}

export interface ProgressTrend {
  metric: 'weight' | 'strength' | 'volume' | 'frequency' | 'duration';
  trend: 'up' | 'down' | 'stable';
  percentage: number;
}

export interface CreateProgressRecordRequest {
  weight?: number;
  bodyFat?: number;
  measurements?: BodyMeasurements;
  notes?: string;
}

export interface UpdateProgressRecordRequest {
  weight?: number;
  bodyFat?: number;
  measurements?: BodyMeasurements;
  notes?: string;
}
