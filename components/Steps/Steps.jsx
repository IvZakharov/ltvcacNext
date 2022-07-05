import styles from './Steps.module.scss';

function Steps() {
  return (
    <section className={`${styles.steps} sectiin mb-80 mb-md-100`}>
      <div className="container ph-20">
        <div className="row">
          <div className="col-6 col-md-4 col-xl-2 p-2">
            <div className={styles.item}>
              <span className="text text--fw-500 text--white tt-upper d-block mb-10">STEP</span>
              <span className={`${styles.count} mb-10`}>1</span>
              <h3 className={`${styles.title} mb-5`}>Introduction</h3>
              <span className={`text ${styles.days}`}>1-2 days</span>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2 p-2">
            <div className={styles.item}>
              <span className="text text--fw-500 text--white tt-upper d-block mb-10">STEP</span>
              <span className={`${styles.count} mb-10`}>2</span>
              <h3 className={`${styles.title} mb-5`}>Analysis</h3>
              <span className={`text ${styles.days}`}>1-4 days</span>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2 p-2">
            <div className={styles.item}>
              <span className="text text--fw-500 text--white tt-upper d-block mb-10">STEP</span>
              <span className={`${styles.count} mb-10`}>3</span>
              <h3 className={`${styles.title} mb-5`}>Preparation</h3>
              <span className={`text ${styles.days}`}>3-5 days</span>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2 p-2">
            <div className={styles.item}>
              <span className="text text--fw-500 text--white tt-upper d-block mb-10">STEP</span>
              <span className={`${styles.count} mb-10`}>4</span>
              <h3 className={`${styles.title} mb-5`}>Launch</h3>
              <span className={`text ${styles.days}`}>3-5 days</span>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2 p-2">
            <div className={styles.item}>
              <span className="text text--fw-500 text--white tt-upper d-block mb-10">STEP</span>
              <span className={`${styles.count} mb-10`}>5</span>
              <h3 className={`${styles.title} mb-5`}>Optimization</h3>
              <span className={`text ${styles.days}`}>5-7 days</span>
            </div>
          </div>
          <div className="col-6 col-md-4 col-xl-2 p-2">
            <div className={styles.item}>
              <span className="text text--fw-500 text--white tt-upper d-block mb-10">STEP</span>
              <span className={`${styles.count} mb-10`}>6</span>
              <h3 className={`${styles.title} mb-5`}>Scaling</h3>
              <span className={styles.days}>5-7 days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
