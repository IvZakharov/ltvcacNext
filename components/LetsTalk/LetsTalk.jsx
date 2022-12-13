import styles from './LetsTalk.module.scss';
import React from 'react';
import Form from '../Form/Form';
import Image from "next/image";

function LetsTalk({ contentSide }) {
  return (
    <section className={`section section--title-${contentSide === 'left'? contentSide+'1 mt-136 mb-68': contentSide+' mt-136 mb-68'} `} id="contact">
      <div className="container">
        <div className={`row ${styles.forMob}`}>
          <div className={`col-12 col-md-6 my-auto ${styles.h1title} ${contentSide === 'right'? 'order-1': ''}`}>
            <div className={contentSide === 'left'? 'marginHomeLeft': 'marginHomeRight'}>
              <h2 className={`ta-left h1title`}>
                LET&apos;S
                <br />
                TALK
              </h2>
            </div>
          </div>
          <div
            className={`col-12 col-md-6 ${
              contentSide === 'left' ? 'order-md-1' : ''
            } `}>
            <div className={`${styles.letsTalk}  ml-120`}>
              <div className={styles.block}>
                <span className={styles.label}>FREE!
                <Image src="/img/contacts/emojione-monotone_fire.svg"
                       width={28}
                       height={28}
                       alt="emojione monotone fire"
                />
                </span>
                <h4 className={styles.h4}>For <span>$3k+</span> work budgets:</h4>
                <ul className={styles.list}>
                  <li>Product audit</li>
                  <li>Customer & market audit</li>
                  <li>Competitive audit</li>
                </ul>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
