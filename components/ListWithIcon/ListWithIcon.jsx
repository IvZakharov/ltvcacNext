import styles from './ListWithIcon.module.scss';
import checkIcon from './img/check.svg';
import noCheckIcon from './img/noCheck.svg';
import Image from 'next/image';

function ListWithIcon({arr}) {
  return (
      <ul className={styles.listWithIcon}>
        {arr.map((obj, i) => (
            <li key={i} className={styles.item}>
              <i className={styles.icon}>
                {obj.iconCheck ? (
                    <Image width={32} height={32} src={checkIcon} alt="Check icon"/>
                ) : (
                    <Image width={32} height={32} src={noCheckIcon} alt="No check icon"/>
                )}
              </i>
              <div>
                {obj.title && <h4 className={styles.title}>{obj.title}</h4>}
                <p className={styles.text}>{obj.text}</p>
              </div>
            </li>
        ))}
      </ul>
  );
}

export default ListWithIcon;
