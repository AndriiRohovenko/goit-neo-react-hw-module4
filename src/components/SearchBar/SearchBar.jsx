import styles from './SearchBar.module.css';
import { useId } from 'react';
import { toast } from 'react-hot-toast';

function SearchBar({ onSearch }) {
  const searchFieldID = useId();
  const handleSubmit = ev => {
    ev.preventDefault();
    const input_value = ev.target.elements.searchBarInput.value;
    if (!input_value) {
      toast.error('Please insert search text!');
    }
    onSearch(input_value);
  };
  return (
    <>
      <header>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
          <input
            className={styles.searchBar}
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
