import styles from './page.module.css';
import BackButton from '../components/BackButton';

export default function About() {
  return (
    <div className={styles.container}>
      <BackButton />
      <h1 className={styles.title}>About Me</h1>
      
      <div className={styles.content}>
        <p className={styles.text}>
          Hi there! I'm Simone Marton, a passionate developer with a love for creating beautiful and functional web experiences.
          I specialize in modern web technologies and enjoy bringing creative ideas to life through code.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat hendrerit lacus, 
          ac facilisis nulla hendrerit ut. Sed non tortor sodales, sagittis nisi sed, facilisis lorem.
          Praesent bibendum, velit id malesuada fringilla, dolor augue tempus sem, non malesuada quam erat quis odio.
        </p>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Skills</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
            nunc id aliquam tincidunt, nisl nunc tincidunt nunc, vitae aliquam nunc nunc vitae nunc.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>Frontend Development</div>
            <div className={styles.skillCard}>React & Next.js</div>
            <div className={styles.skillCard}>UI/UX Design</div>
            <div className={styles.skillCard}>JavaScript/TypeScript</div>
            <div className={styles.skillCard}>Responsive Design</div>
            <div className={styles.skillCard}>Version Control</div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Background</h2>
          <p className={styles.text}>
            My journey in web development started with a curiosity for creating interactive experiences.
            I'm constantly learning and exploring new technologies to expand my skillset and create better solutions.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Experience</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, 
            sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. 
            Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, 
            tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer id nisi nec nulla luctus 
            lacinia non eu turpis. Etiam in ex imperdiet justo tincidunt egestas.
          </p>
        </div>
      </div>
    </div>
  );
} 