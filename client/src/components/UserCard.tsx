import { memo } from 'react';
import { UserCardProps } from '../types/components';
import phoneIcon from '../images/phone-icon.svg';
import mailIcon from '../images/mail-icon.svg';
import './UserCard.css';


function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <h3 className="user-name">{user.name}</h3>
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