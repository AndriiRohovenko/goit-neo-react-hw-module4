import styles from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

function Contact({ name, number, onDelete }) {
  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.contactData}>
          <div className={styles.fieldWrapper}>
            <IoPerson />
            <p>{name}</p>
          </div>
          <div className={styles.fieldWrapper}>
            <FaPhoneAlt />
            <p>{number}</p>
          </div>
        </div>
        <button className={styles.deleteBtn} onClick={onDelete}>
          Delete
        </button>
      </div>
    </>
  );
}

export default Contact;
