import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import StatusMessage from './components/StatusMessage';
import { useUsers } from './hooks/useUsers';
import { useSearch } from './hooks/useSearch';

function App() {
  const { users, loading, error, fetchUsers } = useUsers();
  const { searchTerm, setSearchTerm } = useSearch(fetchUsers);

  return (
    <div className="app">
      <div className="container">
        <SearchBar 
          value={searchTerm}
          onChange={setSearchTerm}
        />
        
        {loading && (
          <StatusMessage 
            type="loading" 
            message="Загрузка пользователей..." 
          />
        )}
        
        {error && (
          <StatusMessage 
            type="error" 
            message={error} 
          />
        )}
        
        {!loading && !error && (
          <UserList users={users} />
        )}
      </div>
    </div>
  );
}

export default App;
