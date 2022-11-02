import styles from './OurToolkit.module.scss';

function OurToolkit({arr, imagePosition}) {
  
  
  return (
      <section className={`section section--title-${imagePosition}-img2 mb-60 mb-md-120`}>
        <div className="container p-0">
          <div className="row">
            <div
                className={`col-12 col-md-6 col-xl-5  ${imagePosition === 'right' ? 'order-md-2 offset-xl-1' : 'order-md-1'} mb-60 mb-md-0  d-flex justify-content-center align-items-center`}>
              <div className="section__title-box pl-20">
                <h2 className={`section__title ta-left ${imagePosition === 'left' ? 'ta-md-right' : ''} ${styles.h1title}`}>
                  OUR
                  <br/>
                  TOOLKIT
                </h2>
              </div>
            </div>
            <div
                className={`col-12 col-md-6 col-xl-6 pt-5 pb-3 ${imagePosition === 'left' ? 'offset-xl-1' : ''}  order-md-1 `}>
              <div className={`${styles.ourToolkit} ph-20 row align-items-center`}>
                {arr.map((obj, i) => (
                    <div key={i} className={`${styles.item} col-12 col-md-7`}>
                      <i className={styles.icon}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.194824" width="27.6078" height="27.61" rx="3" fill="#3725A2"/>
                          <path d="M8.62744 13.9998L12.0784 17.4508L18.9804 10.5488" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </i>
                      <div>
                        <h3 className="h3 mb-10">{obj.title}</h3>
                        <p className={styles.text}>{obj.text}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default OurToolkit;
