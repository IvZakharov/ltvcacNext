import styles from './Footer.module.scss';
import logoSvg from './img/logo.svg';
import Image from "next/image";
import Link from "next/link";
import CookieAlert from "../CookieAlert/CookieAlert";
import {useState} from "react";

export const Footer = () => {

  return (
      <footer className={styles.footer}>
        <div className="container">
          <nav className={`${styles.footerNav} mb-60 mb-md-0`}>
            <ul>
              <li>
                <Link href="/"><a>About Us</a></Link>
              </li>
              {/*<li>*/}
              {/*  <Link href="/portfolio"><a>Portfolio</a></Link>*/}
              {/*</li>*/}
              <li>
                <Link href="/services"><a>SERVICES</a></Link>
              </li>
            </ul>
          </nav>
          <div className={styles.address}>
            <p className={`${styles.footerText} mb-60 mb-md-0`}>
              1054 Budapest, Honved utca 8. 1. em. 2<br/>
              SELLION Europe Kft. (HU29017043)
            </p>
            <p className={`${styles.footerText} mb-60 mb-md-0`}>
              19 W 24th Street, New York NY 10010,<br/> United States
            </p>
          </div>

          <p className={styles.copyright}>LTV:CAC Agency © 2022</p>
        </div>
      </footer>
  )
}

