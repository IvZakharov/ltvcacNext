import styles from './HeroAdvantages.module.scss';

function HeroAdvantages() {
  return (
    <div className={styles.heroAdvantages}>
      <ul className={styles.list}>
        <li>
          15+ YEARS
          <br /> OF EXPERIENCE
        </li>
        <li>
          2.5M+ USERS
          <br /> ACQUIRED
        </li>
        <li>
          $11M+ REVENUE
          <br />
          GENERATED
        </li>
      </ul>
    </div>
  );
}

export default HeroAdvantages;
