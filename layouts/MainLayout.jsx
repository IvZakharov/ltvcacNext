import Head from 'next/head';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MobileMenu } from '../components/MobileMenu/MobileMenu';
import { ToTopBtn } from '../components/ToTopBtn/ToTopBtn';
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import CookieAlert from "../components/CookieAlert/CookieAlert";
import {useRouter} from "next/router";
import Cookies from 'js-cookie'

export const MainLayout = ({ children, title, description, keywords, color, date }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [offset, setOffset] = useState(0);
  const [Cookie, setAlert] = useState(true);
  const router = useRouter()


  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-NNP4KS4',
    };

    TagManager.initialize(tagManagerArgs);
    if(Cookies.get('Cookies')){
      setAlert(false)
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="facebook-domain-verification" content="1yko0pr5s3tuwq9dl4iokow2q6yb1j" />
        <meta name="google-site-verification" content="wVbSfQSBg1umwVgMwqVtLQIuOJtpF9b24xu7obWkLUQ" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://www.ltvcac.agency/#organization","name":"LTVCAC Agency","url":"https://www.ltvcac.agency/","sameAs":["https://linkedin.com/company/ltvcac-agency","https://facebook.com/ltvcac","https://instagram.com/ltvcac.agency"],"logo":{"@type":"ImageObject","@id":"https://seoquick.com.ua/#logo","url":"https://seoquick.com.ua/wp-content/uploads/2021/10/seoquick-600x600-1.png","width":336,"height":333,"caption":"LTVCAC"},"image":{"@id":"https://www.ltvcac.agency/#logo"}},{"@type":"WebSite","@id":"https://www.ltvcac.agency/#website","url":"https://www.ltvcac.agency/","name":"LTVCAC Agency","publisher":{"@id":"https://www.ltvcac.agency/#organization"}},{"@type":"WebPage","@id":"https://www.ltvcac.agency${router.pathname}#webpage","url":"https://www.ltvcac.agency${router.pathname}","inLanguage":"en-EN","name":"${title}","isPartOf":{"@id":"https://www.ltvcac.agency/#website"},"about":{"@id":"https://www.ltvcac.agency/#organization"},"datePublished":"2015-06-17T13:45:57+03:00","description":"${description}"}]}`}} />
      </Head>

      <Header onClickMenu={(bool) => setOpenedMenu(bool)} />

      <div className="main">{children}</div>

      {openedMenu && <MobileMenu onClickClose={(bool) => setOpenedMenu(bool)} />}
      {offset > 100 ? <ToTopBtn /> : null}
      {Cookie && <CookieAlert onClickClose={(bool) => setAlert(bool)} />}
      <Footer />
    </>
  );
};
