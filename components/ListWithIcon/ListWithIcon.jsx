import styles from './ListWithIcon.module.scss';
import checkIcon from './img/check.svg';
import noCheckIcon from './img/noCheck.svg';

function ListWithIcon({ arr }) {
  return (
    <ul className={styles.listWithIcon}>
      {arr.map((obj, i) => (
        <li key={i} className={styles.item}>
          <i className={styles.icon}>
            {obj.iconCheck ? (
              <img src={checkIcon} alt="Check icon" />
            ) : (
              <img src={noCheckIcon} alt="No check icon" />
            )}
          </i>
          <div>
            <h4 className={styles.title}>{obj.title}</h4>
            <p className={styles.text}>{obj.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListWithIcon;
