import styles from './MustHaveEvents.module.scss';
import website from './img/website.svg';
import apps from './img/apps.svg';

function MustHaveEvents() {
  return (
    <>
      <section className="section section--title-right-img1 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5 offset-xl-2 order-md-1 mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img1 pl-70 pl-md-20 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-left">
                  HOW TO LOOK <br /> WEBSITE <br /> TRACKING <br /> FUNNEL?
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 offset-xl-1 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
              <div className="ph-20">
                <div className={styles.events}>
                  <img src={website} alt="events" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--title-left-img2 mb-60 mb-md-0">
        <div className="container p-0">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-5  mb-60 mb-md-0 pb-xl-50 ">
              <div className="section__title-box section__title-box--img2 pl-70 pl-md-20 p-20 pt-120 pb-120">
                <h2 className="section__title section__title--small ta-md-right">
                  HOW TO LOOK <br /> MOBILE APP <br /> TRACKING <br /> FUNNEL?
                </h2>
              </div>
            </div>

            <div className="col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100">
              <div className="ph-20">
                <div className={styles.events}>
                  <img src={apps} alt="events" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MustHaveEvents;
