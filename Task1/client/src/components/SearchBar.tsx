import { SearchBarProps } from '../types/components';
import searchIcon from '../assets/images/search-icon.svg';
import './SearchBar.css';


function SearchBar({
    value,
    onChange,
}: SearchBarProps) {
    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="search-input"
                />
                <img src={searchIcon} alt="search" className="search-icon" />
            </div>
        </div>
    );
}

export default SearchBar; 