import styles from './OurToolkit.module.scss';

function OurToolkit({itemsFirstColumn, itemsSecondColumns, imagePosition}) {
  
  
  return (
      <section className={`section section--title-${imagePosition}-img2 mb-60 mb-md-0`}>
        <div className="container p-0">
          <div className="row">
            <div
                className={`col-12 col-md-6 col-xl-5 offset-xl-1 ${imagePosition === 'right' ? 'order-md-2' : 'order-md-1'} mb-60 mb-md-0 pb-xl-50 d-xl-flex flex-column justify-content-between`}>
              <div
                  className="section__title-box section__title-box--img2 pl-20 pt-80 pb-80 pt-md-160 pt-md-100">
                <h2 className="section__title ta-left">
                  OUR
                  <br/>
                  TOOLKIT
                </h2>
              </div>
            </div>
            <div
                className={`col-12 col-md-6 col-xl-6 pt-md-50 order-md-1 pb-md-50 pt-xl-130 pb-xl-160`}>
              <div className={`${styles.ourToolkit} ph-20 row`}>
                <div className="col-12 col-xl-6">
                  {itemsFirstColumn.map((obj, i) => (
                      <div key={i} className={`${styles.item}`}>
                        <i className={styles.icon}>
                          <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26.3522 2.19608H5.64629C3.74037 2.19608 2.19531 3.74113 2.19531 5.64706V26.3529C2.19531 28.2589 3.74037 29.8039 5.64629 29.8039H26.3522C28.2581 29.8039 29.8032 28.2589 29.8032 26.3529V5.64706C29.8032 3.74113 28.2581 2.19608 26.3522 2.19608Z"
                                stroke="#23A6F0"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.8242 16L14.2752 19.451L21.1772 12.549"
                                stroke="#23A6F0"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        <div className={styles.info}>
                          <h3 className="h3 mb-10">{obj.title}</h3>
                          <p className={styles.text}>{obj.text}</p>
                        </div>
                      </div>
                  ))}
                </div>
                
                <div className="col-12 col-xl-6 pr-xl-30">
                  {itemsSecondColumns.map((obj, i) => (
                      <div key={i} className={`${styles.item}`}>
                        <i className={styles.icon}>
                          <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26.3522 2.19608H5.64629C3.74037 2.19608 2.19531 3.74113 2.19531 5.64706V26.3529C2.19531 28.2589 3.74037 29.8039 5.64629 29.8039H26.3522C28.2581 29.8039 29.8032 28.2589 29.8032 26.3529V5.64706C29.8032 3.74113 28.2581 2.19608 26.3522 2.19608Z"
                                stroke="#23A6F0"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.8242 16L14.2752 19.451L21.1772 12.549"
                                stroke="#23A6F0"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                          </svg>
                        </i>
                        <div className={styles.info}>
                          <h3 className="h3 mb-10">{obj.title}</h3>
                          <p className={styles.text}>{obj.text}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default OurToolkit;
