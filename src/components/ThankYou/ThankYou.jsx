import React from 'react';
import styles from './ThankYou.module.css';

const ThankYou = ({ message = 'Thank you for contacting us. We will get back to you shortly.' }) => {
  return (
    <div className={styles.thankYouContainer}>
      <div className={styles.content}>
        <div className={styles.airplane}>
          <svg viewBox="0 0 24 24" fill="#4A90E2" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v2l-8 5-8-5V6h16zm-8 7l8 5H4l8-5z" />
          </svg>
        </div>
        <div className={styles.checkmark}>
          <svg viewBox="0 0 24 24" fill="#4CAF50" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </div>
        <h1>Thank you</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ThankYou;