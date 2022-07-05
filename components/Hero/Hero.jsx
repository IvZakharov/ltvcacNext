import styles from './Hero.module.scss';
import Link from "next/link";

export const Hero = ({title, subtitle, heroImg, tags}) => {
  return (
    <section className={`${styles.hero} ${styles[heroImg]}`}>
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
              <Link href="https://tally.so/r/wkdaBd/" className={`${styles.button} button CTA`}>
                <a>TELL US ABOUT YOUR PROJECT</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
