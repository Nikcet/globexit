import UserCard from './UserCard';
import { UserListProps } from '../types/components';
import './UserList.css';


function UserList({ users, onCardClick }: UserListProps) {
  return (
    <div className="user-list">
      {users.map((user) => <UserCard key={user.id} user={user} onCardClick={onCardClick}/>)}
    </div>
  );
}

export default UserList; 