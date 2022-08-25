import styles from './Hero.module.scss';
import Link from 'next/link';
import useMediaQuery from "../../lib/useMediaQuery";
import {useState, useEffect} from "react";

export const Hero = ({title, subtitle, imageUrls, tags}) => {
  const matches = useMediaQuery('(min-width: 768px)');
  const [heroImage, setHeroImage] = useState(imageUrls.mobile);
  
  useEffect(() => {
    matches ? setHeroImage(imageUrls.desktop) : setHeroImage(imageUrls.mobile)
  }, [matches])
  
  return (
      <section className={styles.hero}
               style={{backgroundImage: `url(${heroImage})`}}>
        <div className="container">
          <div className="row">
            <div className="col-10 m-auto col-md-8 col-xl-8">
              <h1 className={styles.title}>{title}</h1>
              <p className={styles.subtitle}>{subtitle}</p>
              {tags && (
                  <ul className={`${styles.tags} mb-30`}>
                    {tags.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                  </ul>
              )}
              <div className={styles.buttonWrap}>
                <Link href="https://tally.so/r/wkdaBd/">
                  <a className={`${styles.button} button CTA`}>TELL US ABOUT YOUR PROJECT</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
