import styles from './ImageCard.module.css';

function ImageCard({ url, altText }) {
  return (
    <>
      <div>
        <img src={url} alt={altText} />
      </div>
    </>
  );
}

export default ImageCard;
