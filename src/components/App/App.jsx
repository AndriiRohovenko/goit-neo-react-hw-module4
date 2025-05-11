import styles from './App.module.css';

import { useState, useEffect } from 'react';

// import { nanoid } from 'nanoid';

import { getPhotos } from '../../api/getPhotos';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!searchQuery) return;

    const fetching = async () => {
      try {
        setIsLoading(true);
        // setError(false)
        // setHits([]);

        const data = await getPhotos(searchQuery, page);

        setHits(prev =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      } catch (error) {
        console.error(error);
        // setError(true)
      } finally {
        setIsLoading(false);
      }
    };
    fetching();
  }, [page, searchQuery]);

  const handleSearch = searchValue => {
    setSearchQuery(searchValue);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className={styles.appContent}>
        <SearchBar onSearch={handleSearch} />
        <ErrorMessage />
        <ImageGallery data={hits.length > 0 ? hits : []} />
        <Loader isLoading={isLoading} />
        {hits.length > 0 && <LoadMoreBtn handler={handleLoadMore} />}
      </div>
    </>
  );
}

export default App;
