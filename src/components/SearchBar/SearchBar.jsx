import styles from './SearchBar.module.css';
import { useId } from 'react';

function SearchBar({ onSearch }) {
  const searchFieldID = useId();
  const handleSubmit = ev => {
    ev.preventDefault();
    onSearch(ev.target.elements.searchBarInput.value);
  };
  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            className="searchBar"
            name="searchBarInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            id={searchFieldID}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
}

export default SearchBar;
