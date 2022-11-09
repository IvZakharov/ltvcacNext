import styles from './OurToolkit.module.scss';

function OurToolkit({arr, imagePosition}) {
  
  
  return (
      <section className={`section section--title-${imagePosition}-img2 mb-68 mt-68`}>
        <div className="container">
          <div className="row">
            <div
                className={`col-12 col-md-6 col-xl-6 ${imagePosition === 'right' ? 'order-md-2 offset-xl-1' : 'order-md-1 '} my-auto`}>
                <div className={`${imagePosition === 'left' ? 'marginHomeLeft' : ''}`}>
                    <h2 className={` ${imagePosition === 'left' ? 'ta-md-right h1title' : ''} ta-left`}>
                        OUR
                        <br/>
                        TOOLKIT
                    </h2>
                </div>

            </div>
            <div
                className={`col-12 col-md-6 col-xl-6  ${imagePosition === 'left' ? '' : 'offset-xl-1 pt-5 pb-3'}  order-md-1 `}>
              <div className={`${styles.ourToolkit} ml-120`}>
                {arr.map((obj, i) => (
                    <div key={i} className={`${styles.item}`}>
                      <i className={styles.icon}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect y="0.194824" width="27.6078" height="27.61" rx="3" fill="#3725A2"/>
                          <path d="M8.62744 13.9998L12.0784 17.4508L18.9804 10.5488" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </i>
                      <div>
                        <h3 className={styles.title}>{obj.title}</h3>
                        <p className={`${styles.text} textFonts`}>{obj.text}</p>
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
