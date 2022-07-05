import styles from './LetsTalk.module.scss';

function LetsTalk() {
  return (
    <section className="section section--title-right mb-150 mb-md-0">
      <div className="container p-0">
        <div className="row">
          <div className="col-12 col-md-6 mb-50 mb-md-0 order-md-1 col-xl-5 offset-xl-2">
            <div className="section__title-box section__title-box--img2 p-20 pt-120 pb-120 pt-md-100 pt-xl-280 pb-xl-280">
              <h2 className="section__title section__title--large ta-left">
                LET'S
                <br />
                TALK
              </h2>
            </div>
          </div>

          <div className="col-9 col-md-6 col-xl-4 offset-2 pt-md-60 pb-md-60 offset-md-0 offset-xl-1 pt-xl-100">
            <div className={`${styles.letsTalk} m-auto`}>
              <h3 className={styles.title}>Speak With Expert Team</h3>
              <span className={styles.label}>FREE!</span>
              <h4 className="h3 mb-30">For $3k+ work budgets:</h4>
              <ul className={`${styles.list} mb-50`}>
                <li>Product audit</li>
                <li>Customer & market research</li>
                <li>Competitive analysis</li>
                <li>Sales and ads channels audit</li>
                <li>Business model optimization</li>
              </ul>

              <div>
                <a href="https://tally.so/r/wkdaBd/">
                  <button className={`${styles.button} button  button--black CTA`}>
                    DISCUSS YOUR PROJECT
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
