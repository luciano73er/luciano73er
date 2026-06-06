/**
 * User Types and Interfaces
 */

export interface User {
  id: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
  profile?: UserProfile;
}

export interface UserProfile {
  id: string;
  userId: string;
  age?: number;
  gender?: 'male' | 'female' | 'other';
  height?: number; // in cm
  weight?: number; // in kg
  experience: 'beginner' | 'intermediate' | 'advanced';
  goal: string;
  limitations?: string; // injuries, disabilities, etc.
  preferences?: string; // home gym, commercial gym, outdoor, etc.
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUserRequest {
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
}

export interface UpdateUserRequest {
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
}

export interface UpdateUserProfileRequest {
  age?: number;
  gender?: 'male' | 'female' | 'other';
  height?: number;
  weight?: number;
  experience?: 'beginner' | 'intermediate' | 'advanced';
  goal?: string;
  limitations?: string;
  preferences?: string;
}
