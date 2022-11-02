import styles from './HowItWorks.module.scss';

function HowItWorks() {
  const items = [
    'In-depth analysis (market, product, channels, and business model)',
    'Sales funnel automation and analytics setup from scratch',
    'Data-driven creative solutions: development and implementation',
    'Product launch and ad campaigns optimization (weekly and monthly)',
  ];
  
  return (
      <section className="section section--title-right1 mb-60 mb-md-120">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 offset-xl-1 pb-5 pt-5">
              <div className={`${styles.howItWorks} ph-20`}>
                <ul className={styles.list}>
                  {items.map((item, i) => (
                      <li key={i} className={styles.item}>
                        <span className={styles.count}>{i + 1}</span>
                        <p className={styles.text}>{item}</p>
                      </li>
                  ))}
                </ul>
                <p className={styles.textAfter}>
                  We optimize your digital customer acquisition channels and you get revenue boost.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto pl-md-60">
              <div className="section__title-box p-40 pt-40 pb-40 pt-md-100">
                <h2 className={`section__title ta-left ta-md-left ${styles.h1title}`}>
                  HOW
                  <br/>
                  IT
                  <br/>
                  WORKS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default HowItWorks;
