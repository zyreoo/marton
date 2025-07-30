import styles from './BackButton.module.css';
import Link from 'next/link';

export default function BackButton() {
  return (
    <Link href="/" className={styles.backButton}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        className={styles.arrow}
      >
        <path 
          fill="currentColor" 
          d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        />
      </svg>
    </Link>
  );
} 