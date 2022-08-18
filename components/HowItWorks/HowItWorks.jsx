import styles from './HowItWorks.module.scss';

function HowItWorks() {
  const items = [
    'In-depth analysis (market, product, channels, and business model)',
    'Sales funnel automation and analytics setup from scratch',
    'Data-driven creative solutions: development and implementation',
    'Product launch and ad campaigns optimization (weekly and monthly)',
  ];
  
  return (
      <section className="section section--title-left-img2 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 mb-60 mb-md-0 d-flex aligin-center">
              <div className="section__title-box section__title-box--img2 p-20 pt-80 pb-80 pt-md-100">
                <h2 className="section__title ta-left section__title--large">
                  HOW
                  <br/>
                  IT
                  <br/>
                  WORKS
                </h2>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-xl-5 offset-xl-1 pt-md-50 pb-md-50 pt-xl-120 pb-xl-120">
              <div className={`${styles.howItWorks} ph-20`}>
                <ul className={styles.list}>
                  {items.map((item, i) => (
                      <li key={i} className={styles.item}>
                        <span className={styles.count}>{i + 1}</span>
                        <p className={styles.text}>{item}</p>
                      </li>
                  ))}
                </ul>
                <p className={styles.text}>
                  We optimize your digital customer acquisition channels and you get revenue boost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default HowItWorks;
