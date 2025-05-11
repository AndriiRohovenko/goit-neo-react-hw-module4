import styles from './ImageCard.module.css';

function ImageCard({ smallImgUrl, regularImgUrl, altText, onImageClick }) {
  return (
    <>
      <div className={styles.imageCardWrapper}>
        <img
          src={smallImgUrl}
          alt={altText}
          onClick={() => onImageClick(regularImgUrl)}
        />
      </div>
    </>
  );
}

export default ImageCard;
