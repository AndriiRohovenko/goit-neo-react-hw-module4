import styles from './LoadMoreBtn.module.css';

function LoadMoreBtn({ handler }) {
  return (
    <>
      <div className={styles.loadMoreWrapper}>
        <button onClick={handler} className={styles.loadMoreBtn}>
          Load More
        </button>
      </div>
    </>
  );
}

export default LoadMoreBtn;
