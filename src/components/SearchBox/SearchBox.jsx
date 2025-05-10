import { useId } from 'react';
import styles from './SearchBox.module.css';

function SearchBox({ onSearchChange }) {
  const searchFieldID = useId();

  return (
    <>
      <div className={styles.searchBoxWrapper}>
        <label htmlFor={searchFieldID}>Find contacts by name</label>
        <input
          type="text"
          name="searchInput"
          id={searchFieldID}
          onChange={onSearchChange}
        />
      </div>
    </>
  );
}

export default SearchBox;
