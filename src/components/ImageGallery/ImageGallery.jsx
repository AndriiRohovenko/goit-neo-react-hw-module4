import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ data, onImageClick }) {
  return (
    <>
      <ul className={styles.PhotosGalleryWrapper}>
        {data.map(photo => (
          <li key={photo.id}>
            <ImageCard
              smallImgUrl={photo.urls.small}
              regularImgUrl={photo.urls.regular}
              altText={photo.alt_description}
              onImageClick={onImageClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ImageGallery;
