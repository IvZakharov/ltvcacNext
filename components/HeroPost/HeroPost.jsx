import styles from './HeroPost.module.scss';
import Link from 'next/link';

export const HeroPost = ({ title, subtitle, image }) => {
  return (
    <section
      className={`${styles.heroPost}`}
      style={{
        backgroundImage: `url(${image})`,
      }}>
      <div className="container">
        <div className="row">
          <div className="col-10 m-auto col-md-8 col-xl-8">
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
