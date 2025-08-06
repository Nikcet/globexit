import { User } from '../types/user';


export interface UserCardProps {
  user: User;
  onCardClick: (user: User) => void;
}

export interface UserListProps {
  users: User[];
  onCardClick: (user: User) => void;
}

export interface StatusMessageProps {
  type: 'loading' | 'error';
  message: string;
}

export interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export interface UserPopupProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
}