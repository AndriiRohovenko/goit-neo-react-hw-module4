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
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;

    const fetching = async () => {
      try {
        setIsLoading(true);

        const data = await getPhotos(searchQuery, page);
        if (data.results.length === 0) {
          setHasMore(false);
          if (page === 1) setError(true);
        } else {
          setHasMore(true);
          setError(false);
        }

        setHits(prev =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      } catch (error) {
        console.error(error);
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
        {error == true && <ErrorMessage />}
        <ImageGallery data={hits.length > 0 ? hits : []} />
        <Loader isLoading={isLoading} />
        {hasMore && <LoadMoreBtn handler={handleLoadMore} />}
      </div>
    </>
  );
}

export default App;
