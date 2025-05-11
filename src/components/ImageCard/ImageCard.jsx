import styles from './ImageCard.module.css';

function ImageCard({ url, altText }) {
  return (
    <>
      <div className={styles.imageCardWrapper}>
        <img src={url} alt={altText} />
      </div>
    </>
  );
}

export default ImageCard;
