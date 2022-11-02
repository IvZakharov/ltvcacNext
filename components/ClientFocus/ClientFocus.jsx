import styles from './ClientFocus.module.scss';

function ClientFocus() {
  return (
      <section className={`${styles.focus} section`}>
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-xl-6 my-auto">
              <div className={styles.titleBox}>
                <h2 className="section__title  section__title--large ta-center ta-xl-left">
                  CLIENT
                  <br/>
                  FOCUS
                </h2>
              </div>
            </div>
            <div className="col-12 col-xl-4 offset-xl-1 d-md-flex d-xl-block pt-xl-50 pb-xl-20">
              <div className={`${styles.content} mb-40`}>
                <h3 className={`${styles.title} h3`}>Online startups</h3>
                <p className={`${styles.subtitle}`}>SaaS, Mobile Apps, E-commerce</p>
                <ul className={`${styles.list} mb-40 mb-md-0`}>
                  <li className={`${styles.listSubtitle} mb-10`}>GET THESE JOBS DONE:</li>
                  <li className={styles.listItem}>
                    + identification of marketing challenges and customer pains
                  </li>
                  <li className={styles.listItem}>+ powerful sales funnel automation from scratch</li>
                  <li className={styles.listItem}>
                    + work on hypotheses based on operational data (pre-MVP)
                  </li>
                  <li className={styles.listItem}>
                    + customer acquisition channels growing from scratch
                  </li>
                  <li className={styles.listItem}>
                    + unit-economy analysis and optimization practices
                  </li>
                </ul>
              </div>
              <div className={`${styles.content} mb-40`}>
                <h3 className={`${styles.title} h3`}>Real Estate projects</h3>
                <p className={`${styles.subtitle}`}>Development, funds, agency</p>
                <ul className={`${styles.list} mb-40 mb-md-0`}>
                  <li className={`${styles.listSubtitle} mb-10`}>GET THESE JOBS DONE:</li>
                  <li className={styles.listItem}>+ identification of marketing challenges and customer pains</li>
                  <li className={styles.listItem}>+ сreating a stunning digital package for your project</li>
                  <li className={styles.listItem}>+ powerful sales funnel automation from scratch</li>
                  <li className={styles.listItem}>+ customer acquisition channels growing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ClientFocus;
