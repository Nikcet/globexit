import { ApiResponse } from '../types/user';

const API_BASE_URL = 'http://localhost:3000';

export async function fetchUsers(searchTerm?: string): Promise<ApiResponse> {
  const url = searchTerm
    ? `${API_BASE_URL}/?term=${encodeURIComponent(searchTerm)}`
    : `${API_BASE_URL}/`;

  const response = await fetch(url);
  return response.json();
} 