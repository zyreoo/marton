import styles from './page.module.css';
import BackButton from '../components/BackButton';
import AdventureBook from '../components/AdventureBook';

export default function Adventures() {
  return (
    <div className={styles.container}>
      <BackButton />
      <AdventureBook />
    </div>
  );
} 