import React from 'react';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>Page not found</p>
      <Link to="/" className={`${styles.button} button`}>
        Back to home
      </Link>
    </div>
  );
}

export default NotFound;
