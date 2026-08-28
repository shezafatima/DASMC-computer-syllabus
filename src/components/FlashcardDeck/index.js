import React, { useState } from 'react';
import styles from './styles.module.css';

export default function FlashcardDeck({ cards = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!cards || cards.length === 0) {
    return null;
  }

  const handleNext = (e) => {
    e.stopPropagation();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className={styles.deckContainer}>
      <div 
        className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} 
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Term</span>
              <p>{currentCard.front}</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Definition</span>
              <p>{currentCard.back}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.controls}>
        <button onClick={handlePrev} className={styles.button}>&larr; Prev</button>
        <span className={styles.counter}>{currentIndex + 1} / {cards.length}</span>
        <button onClick={handleNext} className={styles.button}>Next &rarr;</button>
      </div>
    </div>
  );
}
