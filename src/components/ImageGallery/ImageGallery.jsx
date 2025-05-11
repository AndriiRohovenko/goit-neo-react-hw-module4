import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ data }) {
  return (
    <>
      <ul className={styles.PhotosGalleryWrapper}>
        {data.map(photo => (
          <li key={photo.id}>
            <ImageCard url={photo.urls.small} altText={photo.alt_description} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ImageGallery;
