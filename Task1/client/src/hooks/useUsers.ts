import { useState, useEffect, useCallback, useRef } from 'react';
import { User, CacheEntry } from '../types/user';
import { fetchUsers } from '../utils/api';



export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const cache = useRef<Map<string, CacheEntry>>(new Map());
  const CACHE_DURATION = 1000 * 60 * 5; // 5 минут

  const loadUsers = useCallback(async (searchTerm?: string) => {
    
    const cacheKey = searchTerm || 'all';
    const now = Date.now();
    const cached = cache.current.get(cacheKey);

    if (cached && (now - cached.timestamp) < CACHE_DURATION) {
      setUsers(cached.data);
      setError(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const data = await fetchUsers(searchTerm);
      
      if (data.success) {
        setUsers(data.data);
        setError(null);
        
        cache.current.set(cacheKey, {
          data: data.data,
          timestamp: now
        });
      } else {
        setError('Ошибка загрузки данных');
      }
    } catch (err) {
      setError('Ошибка подключения к серверу');
    } finally {
      setLoading(false);
    }
  }, [CACHE_DURATION]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { users, loading, error, fetchUsers: loadUsers };
} 