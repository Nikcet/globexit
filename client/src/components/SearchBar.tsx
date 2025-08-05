import { SearchBarProps } from '../types/components';
import searchIcon from '../images/search-icon.svg';
import './SearchBar.css';


function SearchBar({
    value,
    onChange,
    placeholder = "Поиск пользователей..."
}: SearchBarProps) {
    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="search-input"
                />
                <img src={searchIcon} alt="search" className="search-icon" />
            </div>
        </div>
    );
}

export default SearchBar; 