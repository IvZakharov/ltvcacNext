import styles from './WhatWeWorked.module.scss';
import Image from "next/image";
import icon1 from './img/1.svg';
import icon2 from './img/2.svg';
import icon3 from './img/3.svg';
import icon4 from './img/4.svg';
import icon5 from './img/5.svg';

function WhatWeWorked() {
  const items = [
    {
      title: 'E-Commerce',
      links: ['AliExpress,', 'LepreStore'],
      svgIcon: icon1,
    },
    {
      title: `Mobile Apps (non-gaming)`,
      links: [
        'Badoo,',
        'KeYou,',
        'APUS Launcher,',
        'Kika,',
        'Keyboard,',
        'GO Keyboard,',
        'UC Browser',
      ],
      svgIcon: icon2,
    },
    {
      title: 'Video Games',
      links: ['Cradle of Empires,', 'World of Tanks Blitz,', 'War Thunder,', 'Dragon Soul'],
      svgIcon: icon3,
    },
    {
      title: 'SaaS',
      links: ['Togezzer,', 'Mix Cart,', 'Grabbly,', 'DDHA'],
      svgIcon: icon4,
    },

    {
      title: 'Platforms',
      links: ['Uber,', 'Chummy App,', 'Guvera,', 'City Life'],
      svgIcon: icon5,
    },
  ];

  return (
    <section className="section mb-80 mb-md-100 mb-xl-0 section--title-left">
      <div className="container p-0">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-5 mb-60 mb-md-0">
            <div className="section__title-box p-20 pt-40 pb-40 pt-md-100">
              <h2 className="section__title ta-left ta-md-right">
                WHAT
                <br/>
                WE
                <br/>
                WORKED
                <br/>
                ON
              </h2>
            </div>
          </div>

          <div className="col-12 col-md-6 col-xl-4 offset-xl-2 m-auto">
            <div className={`${styles.whatWeWorked} ph-20 pt-md-50 pb-md-50 pt-xl-100 pb-xl-100`}>
              <ul className={styles.list}>
                {items.map((obj, i) => (
                  <li key={i} className={`${styles.item} mb-10`}>
                    <i className={styles.icon}>
                      <Image src={obj.svgIcon} alt={obj.title} width={48} height={48}/>
                    </i>
                    <div className={styles.info}>
                      <h4 className={styles.title}>{obj.title}</h4>
                      <ul className={styles.links}>
                        {obj.links.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeWorked;
