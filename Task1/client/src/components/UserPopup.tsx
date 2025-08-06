import { UserPopupProps } from '../types/components';
import closeIcon from '../assets/images/close-icon.svg';
import './UserPopup.css';


function UserPopup({ user, isOpen, onClose }: UserPopupProps) {
    if (!isOpen || !user) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU');
    };

    return (
        <div className="popup-backdrop" onClick={handleBackdropClick}>
            <div className="popup">
                <div className="popup-header">
                    <h2 className="popup-title">{user.name}</h2>
                    <button className="popup-close" onClick={onClose}>
                        <img src={closeIcon} alt="close" className="popup-icon" />
                    </button>
                </div>
                
                <div className="popup-info">
                    <div className="info-item">
                        <span className="info-label">Телефон:</span>
                        <span className="info-value">{user.phone}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Почта:</span>
                        <span className="info-value">{user.email}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Дата приема:</span>
                        <span className="info-value">{formatDate(user.hire_date)}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Должность:</span>
                        <span className="info-value">{user.position_name}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Подразделение:</span>
                        <span className="info-value">{user.department}</span>
                    </div>
                </div>
                
                <div className="popup-additional">
                    <p className="additional-title">Дополнительная информация:</p>
                    <p className="additional-text">
                        Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UserPopup; 