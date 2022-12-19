import styles from './OurToolkit.module.scss';
import {useRouter} from "next/router";

function OurToolkit({arr, imagePosition, font}) {
  const router=useRouter()
    let title;
    if(font == null && imagePosition === 'left'){
        title = 'ta-md-right h1title'
    }else if(font == null && imagePosition === 'right'){
        title = 'h1title';
    }else if(imagePosition === 'left' && font == '2'){
        title = 'ta-md-right h2title';
    }else if(imagePosition === 'right' && font == '2'){
        title = 'h2title'
    }
  
  return (
      <section className={`section section--title-${imagePosition} mb-68 mt-68`}>
        <div className="container">
          <div className="row">
            <div
                className={`col-12 col-md-6 col-xl-6 ${imagePosition === 'right' ? 'order-md-2' : 'order-md-1 '} my-auto`}>
                <div className={`${imagePosition === 'left' ? 'marginHomeLeft' : 'marginHomeRight'}`}>
                    <h2 className={`${title} ta-left`}>
                        OUR
                        <br/>
                        TOOLKIT
                    </h2>
                </div>

            </div>
            <div
                className={`col-12 col-md-6 col-xl-6 order-md-1 `}>
              <div className={`${styles.ourToolkit} ${imagePosition === 'left' ? 'ml-120' : 'mr-120 ml-auto'}`}>
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
