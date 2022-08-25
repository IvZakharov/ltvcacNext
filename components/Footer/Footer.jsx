import styles from './Footer.module.scss';
import logoSvg from './img/logo.svg';
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
      <footer className={styles.footer}>
        <div className="container">
          <div className={`${styles.logo} mb-60 d-md-none`}>
            <Image src={logoSvg} width={125} height={125} alt="logo"/>
          </div>
          
          <nav className={`${styles.footerNav} mb-60 mb-md-0`}>
            <ul>
              <li>
                <Link href="/"><a>About Us</a></Link>
              </li>
              <li>
                <Link href="/portfolio"><a>Portfolio</a></Link>
              </li>
              <li>
                <Link href="/services"><a>SERVICES</a></Link>
              </li>
            </ul>
          </nav>
          <p className={`${styles.footerText} mb-60 mb-md-0`}>
            1054 Budapest, Honved utca 8. 1. em. 2<br/>
            SELLION Europe Kft. (HU29017043)
          </p>
          <p className={styles.footerText}>Copyright © 2022 LTV:CAC Agency. All rights reserved.</p>
        </div>
      </footer>
  );
}

