/**
 * API Response Types
 */

export interface SuccessResponse<T = any> {
  success: true;
  data?: T;
  message?: string;
}

export interface ErrorResponse {
  success: false;
  error: string;
  details?: string;
  statusCode?: number;
}

export type APIResponse<T = any> = SuccessResponse<T> | ErrorResponse;

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T = any> {
  success: true;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
