import { User } from '../types/user';


export interface UserCardProps {
  user: User;
}

export interface UserListProps {
  users: User[];
}

export interface StatusMessageProps {
  type: 'loading' | 'error';
  message: string;
}

export interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}