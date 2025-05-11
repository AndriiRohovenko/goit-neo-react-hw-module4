// import styles from './LoadMoreBtn.module.css';

function LoadMoreBtn({ handler }) {
  return (
    <>
      <div>
        <button onClick={handler}>Load More</button>
      </div>
    </>
  );
}

export default LoadMoreBtn;
