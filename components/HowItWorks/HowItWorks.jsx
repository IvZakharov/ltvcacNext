import styles from './HowItWorks.module.scss';
import {useRouter} from "next/router";

function HowItWorks() {
  const items = [
    'In-depth analysis (market, product, channels, and business model)',
    'Sales funnel automation and analytics setup from scratch',
    'Data-driven creative solutions: development and implementation',
    'Product launch and ad campaigns optimization (weekly and monthly)',
  ];
  const router = useRouter()
  return (
      <section className="section section--title-right1 mt-136 mb-68">
        <div className="container">
          <div className={`row ${styles.forMob}`}>
            <div className="col-12 col-md-6">
              <div className={`${styles.howItWorks} mr-120`}>
                <ul className={styles.list}>
                  {items.map((item, i) => (
                      <li key={i} className={styles.item}>
                        <span className={styles.count}>{i + 1}</span>
                        <p className={`${styles.text} textFonts`}>{item}</p>
                      </li>
                  ))}
                </ul>
                <p className={`${styles.textAfter} textFonts`}>
                  We optimize your digital customer acquisition channels and you get revenue boost.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 my-auto">
              <div className="marginHomeRight">
                <h2 className="h1title">
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
