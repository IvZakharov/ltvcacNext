import styles from './ClientFocus.module.scss';

function ClientFocus() {
  return (
      <section className={`${styles.focus} section mt-68 mb-68`}>
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-6 my-auto p-0">
              <div className="marginHomeLeft ta-center">
                <h2 className="h1title">
                  CLIENT
                  <br/>
                  FOCUS
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-6 p-0">
              <div className={styles.content}>
                <h3 className={`${styles.title} h3`}>Online startups</h3>
                <p className={`${styles.subtitle}`}>SaaS, Mobile Apps, E-commerce</p>
                <ul className={` mb-40 mb-md-0`}>
                  <li className={`${styles.listSubtitle} textFonts mb-10`}>GET THESE JOBS DONE:</li>
                  <li className={`${styles.listItem} textFonts`}>
                    + identification of marketing challenges and customer pains
                  </li>
                  <li className={`${styles.listItem} textFonts`}>+ powerful sales funnel automation from scratch</li>
                  <li className={`${styles.listItem} textFonts`}>
                    + work on hypotheses based on operational data (pre-MVP)
                  </li>
                  <li className={`${styles.listItem} textFonts`}>
                    + customer acquisition channels growing from scratch
                  </li>
                  <li className={`${styles.listItem} textFonts`}>
                    + unit-economy analysis and optimization practices
                  </li>
                </ul>
              </div>
              <div className={styles.content}>
                <h3 className={`${styles.title} h3`}>Real Estate projects</h3>
                <p className={`${styles.subtitle}`}>Development, funds, agency</p>
                <ul className={`mb-40 mb-md-0`}>
                  <li className={`${styles.listSubtitle} textFonts mb-10`}>GET THESE JOBS DONE:</li>
                  <li className={`${styles.listItem} textFonts`}>+ identification of marketing challenges and customer pains</li>
                  <li className={`${styles.listItem} textFonts`}>+ сreating a stunning digital package for your project</li>
                  <li className={`${styles.listItem} textFonts`}>+ powerful sales funnel automation from scratch</li>
                  <li className={`${styles.listItem} textFonts`}>+ customer acquisition channels growing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default ClientFocus;
