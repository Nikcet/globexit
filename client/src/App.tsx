import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import StatusMessage from './components/StatusMessage';
import UserPopup from './components/UserPopup';
import { useUsers } from './hooks/useUsers';
import { useSearch } from './hooks/useSearch';
import { User } from './types/user';

function App() {
  const { users, loading, error, fetchUsers } = useUsers();
  const { searchTerm, setSearchTerm } = useSearch(fetchUsers, 500);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = (user: User) => {
    setSelectedUser(user);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedUser(null);
  };

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
          <UserList users={users} onCardClick={handleCardClick} />
        )}
      </div>

      <UserPopup 
        user={selectedUser}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
}

export default App;
