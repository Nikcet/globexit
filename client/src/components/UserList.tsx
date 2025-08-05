import UserCard from './UserCard';
import { UserListProps } from '../types/components';
import './UserList.css';


function UserList({ users }: UserListProps) {
  return (
    <div className="user-list">
      {users.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
}

export default UserList; 