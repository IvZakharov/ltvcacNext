import styles from './WhatWeWorked.module.scss';
import Image from "next/image";
import icon1 from './img/1.svg';
import icon2 from './img/2.svg';
import icon3 from './img/3.svg';
import icon4 from './img/4.svg';
import icon5 from './img/5.svg';
import icon6 from './img/6.svg';

function WhatWeWorked({itemsArr, contentSide}) {
  
  
  return (
      <section className={`section mb-68 mt-68 section--title-${contentSide === 'left'? 'left': 'right1'}`}>
        <div className="container">
          <div className={`row ${styles.mob} ${contentSide === 'left' ? styles.left : ''}`}>
            <div className="col-12 col-md-6 col-xl-6">
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
            <div className={`col-12 col-md-6 col-xl-6 my-auto`}>
              <div className="marginHomeRight">
                <h2 className="h1title">
                  WHAT WE WORKED ON
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default WhatWeWorked;
