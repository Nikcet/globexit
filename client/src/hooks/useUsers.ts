import { useState, useEffect, useCallback } from 'react';
import { User } from '../types/user';
import { fetchUsers } from '../utils/api';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = useCallback(async (searchTerm?: string) => {
    try {
      setLoading(true);
      const data = await fetchUsers(searchTerm);
      
      if (data.success) {
        setUsers(data.data);
        setError(null);
      } else {
        setError('Ошибка загрузки данных');
      }
    } catch (err) {
      setError('Ошибка подключения к серверу');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { users, loading, error, fetchUsers: loadUsers };
} 