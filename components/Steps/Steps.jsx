import styles from './Steps.module.scss';

function Steps({stepsArr, center}) {
  
  
  return (
      <section className={`${styles.steps} sectiin mr-120 ${center ? 'mx-auto': ''}`}>
        <div className="container ph-20 mt-22 mb-22">
          <div className="row align-items-stretch">
            {stepsArr.map((obj, index) => (
                <div key={index} className="col-6 col-md-6 col-xl-4 p-2">
                  <div className={styles.item}>
                    <span className="text text--fw-500 text--white tt-upper d-block mb-10">STEP</span>
                    <span className={`${styles.count} mb-10`}>{index + 1}</span>
                    <h3 className={`${styles.title} mb-5`}>{obj.title}</h3>
                    <span className={`text ${styles.days}`}>{obj.days}</span>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

export default Steps;
