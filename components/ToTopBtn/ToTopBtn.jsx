import styles from './ToTopBtn.module.scss';

export const ToTopBtn = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return null;
  };

  return (
    <button onClick={() => ScrollToTop()} className={styles.toTopBtn}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.4996 23.8002L16.9996 15.3002L8.49961 23.8002L5.09961 22.1002L16.9996 10.2002L28.8996 22.1002L25.4996 23.8002Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
