'use client';

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './AdventureBook.module.css';

export default function AdventureBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentPage < book.chapters.length - 1) {
        setSwipeDirection('left');
        setTimeout(() => {
          setCurrentPage(prev => prev + 1);
          setSwipeDirection(null);
        }, 800);
      }
    },
    onSwipedRight: () => {
      if (currentPage > 0) {
        setSwipeDirection('right');
        setTimeout(() => {
          setCurrentPage(prev => prev - 1);
          setSwipeDirection(null);
        }, 800);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: false
  });

  const book = {
    title: "My Journey",
    author: "Simone Marton",
    chapters: [
      {
        id: 0,
        type: 'title',
        content: null
      },
      {
        id: 1,
        type: 'contents',
        content: null
      },
      {
        id: 2,
        type: 'chapter',
        chapterNumber: "Chapter I",
        title: "About Me",
        date: "2024",
        location: "Personal",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.`
      },
      {
        id: 3,
        type: 'chapter',
        chapterNumber: "Chapter II",
        title: "Adventures in Europe",
        date: "Summer 2023",
        location: "Various Cities",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus justo, ut fringilla felis euismod sed. Morbi pellentesque semper congue.

        Memorable moments:
        • Lorem ipsum dolor sit amet, consectetur adipiscing
        • Vivamus lacinia odio vitae vestibulum
        • Cras porttitor metus justo
        • Morbi pellentesque semper congue

        Praesent eu lacus in libero dictum fermentum. Suspendisse potenti. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.

        Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.`
      },
      {
        id: 4,
        type: 'chapter',
        chapterNumber: "Chapter III",
        title: "Asian Explorations",
        date: "Winter 2023",
        location: "Asia",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo magna et libero mollis rhoncus. Integer tellus justo, scelerisque id lacinia vel, ultricies sit amet lorem.

        Special experiences:
        • Nam porttitor blandit accumsan
        • Ut vel turpis tempor, cursus dui sit amet
        • Etiam porttitor, lacus in luctus molestie
        • Vivamus fermentum semper porta

        Nullam in tortor ligula. Sed vitae posuere nunc. Nulla facilisi. Pellentesque tempor felis vitae magna semper, ac volutpat diam consequat. Sed lectus nulla, bibendum at nulla vel, tincidunt volutpat sem.

        Maecenas tempus porttitor odio, interdum vestibulum dolor mattis non. Donec a arcu et sapien hendrerit accumsan. Pellentesque sit amet gravida nunc. Sed sed sem nisi. Sed consequat ipsum placerat, consequat odio vitae, tempor libero.`
      }
    ]
  };

  const currentContent = book.chapters[currentPage];
  const chapters = book.chapters.filter(chapter => chapter.type === 'chapter');

  const nextPage = () => {
    if (currentPage < book.chapters.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const goToChapter = (chapterIndex) => {
    setCurrentPage(chapterIndex);
  };

  return (
    <>
      <div 
        className={`${styles.book} ${swipeDirection ? styles[`swipe-${swipeDirection}`] : ''}`}
        {...handlers}
      >
        {currentContent.type === 'title' ? (
          <div className={styles.titlePage}>
            <h1 className={styles.bookTitle}>{book.title}</h1>
            <div className={styles.authorLine}>by</div>
            <div className={styles.author}>{book.author}</div>
          </div>
        ) : currentContent.type === 'contents' ? (
          <div className={styles.contentsPage}>
            <h2 className={styles.contentsTitle}>Contents</h2>
            <div className={styles.chapterList}>
              {chapters.map((chapter, index) => (
                <div key={chapter.id} className={styles.chapterItem} onClick={() => goToChapter(index + 2)}>
                  <span className={styles.chapterLink}>{chapter.chapterNumber}</span>
                  <span className={styles.chapterLink}>{chapter.title}</span>
                  <span className={styles.chapterLocation}>{chapter.location}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.page}>
            <div className={styles.chapterHeader}>
              <span className={styles.chapterNumber}>{currentContent.chapterNumber}</span>
              <h2 className={styles.chapterTitle}>{currentContent.title}</h2>
              <div className={styles.dateLocation}>
                <span className={styles.date}>{currentContent.date}</span>
                <span className={styles.location}>{currentContent.location}</span>
              </div>
            </div>
            <div className={styles.content}>
              {currentContent.content.split('\n').map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        )}

      </div>

      {!isMobile && (
        <div className={styles.navigation}>
          <button 
            onClick={prevPage} 
            className={`${styles.navButton} ${currentPage === 0 ? styles.disabled : ''}`}
            disabled={currentPage === 0}
          >
            ← Previous
          </button>
          <span className={styles.pageNumber}>{currentPage + 1}/{book.chapters.length}</span>
          <button 
            onClick={nextPage} 
            className={`${styles.navButton} ${currentPage === book.chapters.length - 1 ? styles.disabled : ''}`}
            disabled={currentPage === book.chapters.length - 1}
          >
            Next →
          </button>
        </div>
      )}
    </>
  );
} 