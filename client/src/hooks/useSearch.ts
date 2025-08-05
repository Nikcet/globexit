import { useState, useEffect, useCallback } from 'react';

export function useSearch(onSearch: (term: string) => void, delay = 1000) {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearch = useCallback((term: string) => {
      const timeoutId = setTimeout(() => {
        onSearch(term);
      }, delay);

      return () => clearTimeout(timeoutId);
    },
    [onSearch, delay]
  );

  useEffect(() => {
    const cleanup = debouncedSearch(searchTerm);
    return cleanup;
  }, [searchTerm, debouncedSearch]);

  return { searchTerm, setSearchTerm };
} 