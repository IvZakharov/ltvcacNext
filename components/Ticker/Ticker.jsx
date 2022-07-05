import styles from './Ticker.module.scss';
import Marquee from 'react-fast-marquee';

function Ticker() {
  const tickersArr = [
    'CUSTOMER DEVELOPMENT',
    'TRAFFIC',
    'ANALYTICS',
    'DESIGN',
    'STRATEGY',
    'AUTOMATION',
  ];

  return (
    <div className={styles.ticker}>
      <Marquee gradient={false} speed={150}>
        <ul className={styles.list}>
          {tickersArr.map((item, i) => (
            <div key={i}>
              <li className={styles.item}>{item}</li>
              <li className={styles.icon}>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.07368 16L7.33966 10.1389L2.35598 13.3194L0.830078 10.6806L6.12174 8L0.830078 5.31944L2.35598 2.68056L7.33966 5.86111L7.07368 0H10.1115L9.8455 5.86111L14.8292 2.68056L16.3551 5.31944L11.0634 8L16.3551 10.6806L14.8292 13.3194L9.8455 10.1389L10.1115 16H7.07368Z"
                    fill="white"
                  />
                </svg>
              </li>
            </div>
          ))}
        </ul>
      </Marquee>
    </div>
  );
}

export default Ticker;
