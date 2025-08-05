import { memo } from 'react';
import { UserCardProps } from '../types/components';
import phoneIcon from '../assets/images/phone-icon.svg';
import mailIcon from '../assets/images/mail-icon.svg';
import './UserCard.css';


function UserCard({ user, onCardClick }: UserCardProps) {
  return (
    <div className="user-card" onClick={() => onCardClick(user)}>
      <h2 className="user-name">{user.name}</h2>
      <div className="user-info">
        <div className="info-row">
          <img src={phoneIcon} alt="phone" className="info-icon" />
          <span className="info-text">{user.phone}</span>
        </div>
        <div className="info-row">
          <img src={mailIcon} alt="email" className="info-icon" />
          <span className="info-text">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default memo(UserCard); 