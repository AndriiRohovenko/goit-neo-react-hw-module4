import styles from './ImageModal.module.css';
import Modal from 'react-modal';

function ImageModal({ isOpen, onRequestClose, selectedImage }) {
  return (
    <Modal
      className={styles.modalWindow}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
    >
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      )}
    </Modal>
  );
}

export default ImageModal;
