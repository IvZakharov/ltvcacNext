import styles from './HowItWorks.module.scss';

function HowItWorks() {
  const items = [
    'In-depth analysis (market, product, channels, and business model)',
    'Sales funnel automation and analytics setup from scratch',
    'Data-driven creative solutions: development and implementation',
    'Product launch and ad campaigns optimization (weekly and monthly)',
  ];
  
  return (
      <section className="section section--title-right1 mt-136 mb-68">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 p-0">
              <div className={styles.howItWorks}>
                <ul className={styles.list}>
                  {items.map((item, i) => (
                      <li key={i} className={styles.item}>
                        <span className={styles.count}>{i + 1}</span>
                        <p className={styles.text}>{item}</p>
                      </li>
                  ))}
                </ul>
                <span className={styles.line}></span>
                <p className={styles.textAfter}>
                  We optimize your digital customer acquisition channels and you get revenue boost.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto p-0">
              <div className="section__title-box">
                <h2 className={styles.h1title}>
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
