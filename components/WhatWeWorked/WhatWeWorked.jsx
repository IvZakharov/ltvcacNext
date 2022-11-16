import styles from './WhatWeWorked.module.scss';
import Image from "next/image";
import icon1 from './img/1.svg';
import icon2 from './img/2.svg';
import icon3 from './img/3.svg';
import icon4 from './img/4.svg';
import icon5 from './img/5.svg';
import icon6 from './img/6.svg';
import {useRouter} from "next/router";

function WhatWeWorked({itemsArr, contentSide}) {
  const router = useRouter()
  const text = 'WHAT \n WE \n WORKED \n ON'
  return (
      <section className={`section section--title-${contentSide === 'left' ? 'left ': 'right1'} ${router.pathname == '/' ? 'mt-68 mb-68': ''}`}>
        <div className="container">
          <div className={`row ${styles.mob} ${contentSide === 'left' ? styles.left : ''}`}>
            <div className={ router.pathname == '/' ? "col-12 col-md-6 col-xl-6": 'col-12 col-md-6 col-xl-4 offset-xl-2 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100'}>
              <div className={`${styles.whatWeWorked} mr-120`}>
                <ul className={styles.list}>
                  {itemsArr.map((obj, i) => (
                      <li key={i} className={styles.item}>
                        <i className={styles.icon}>
                          <Image src={obj.svgIcon} alt={obj.title} width={48} height={48}/>
                        </i>
                        <div className={styles.info}>
                          <h4 className={styles.title}>{obj.title}</h4>
                          <ul className={styles.links}>
                            {obj.links.map((item, i) => (
                                <li key={i} className="textFonts">{item}</li>
                            ))}
                          </ul>
                        </div>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={router.pathname == '/' ? `col-12 col-md-6 col-xl-6 my-auto` : 'col-12 col-md-6 col-xl-5 mb-60 mb-md-0 pb-xl-50 offsetr-xl-2'}>
              <div className= {router.pathname == '/' ? 'marginHomeRight': 'section__title-box p-20 pt-120 pb-120'}>
                <h2 className={router.pathname == '/' ? 'h1title' : 'section__title section__title--small ta-left ta-md-right'}>
                  {text}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default WhatWeWorked;
