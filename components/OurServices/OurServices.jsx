import styles from './OurServices.module.scss';
import Link from "next/link";

function OurServices() {
  return (
      <section className={`${styles.ourServices} mb-60 mb-md-100 mb-xl-160`}>
        <div className="container">
          <div className="row">
            <div className='col-12 col-md-6 col-lg-4 mb-30 mb-md-50'>
              <Link href='/services/paid-marketing-channels'>
                <a>
                  <div className={styles.item}>
                    <h3 className={styles.title}>Paid Marketing Channels</h3>
                  </div>
                  <p className={styles.text}>We analyze your key KPIs and optimize ad campaigns to cover ALL of your
                    target audiences efficiently.</p>
                </a>
              </Link>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-30 mb-md-50'>
              <Link href='/services/mobile-and-web-tracking'>
                <a>
                  <div className={styles.item}>
                    <h3 className={styles.title}>Mobile & Web tracking</h3>
                  </div>
                  <p className={styles.text}>We boost your sales and cut your losses with the optimized business
                    operations.</p>
                </a>
              </Link>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-30 mb-md-50'>
              <Link href='/services/no-code-automation'>
                <a>
                  <div className={styles.item}>
                    <h3 className={styles.title}>No-code Automation</h3>
                  </div>
                  <p className={styles.text}>Automation of your routine manual processes for safe your time and your
                    budget.</p>
                </a>
              </Link>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-30 mb-md-50'>
              <Link href='/services/customer-research'>
                <a>
                  <div className={styles.item}>
                    <h3 className={styles.title}>Customer Research</h3>
                  </div>
                  <p className={styles.text}>We estimate your product demand based on qualitative and quantitative data,
                    then create your ideal client profile. Finally, we optimize your product for target audience
                    needs.</p>
                </a>
              </Link>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-30 mb-md-50'>
              
              <div className={`${styles.item} ${styles.disable}`}>
                <h3 className={styles.title}>App
                  Store Optimization</h3>
              </div>
              <p className={styles.text}>Optimize your mobile app to get more installations from the App Store and
                Google Play.
                .</p>
            </div>
            <div className='col-12 col-md-6 col-lg-4 mb-30 mb-md-50'>
              <div className={`${styles.item} ${styles.disable}`}>
                <h3 className={styles.title}>Web development</h3>
              </div>
              <p className={styles.text}>We analyze your key KPIs and optimize ad campaigns to cover ALL of your
                target audiences efficiently.</p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default OurServices;
