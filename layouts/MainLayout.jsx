import Head from 'next/head';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MobileMenu } from '../components/MobileMenu/MobileMenu';
import { ToTopBtn } from '../components/ToTopBtn/ToTopBtn';
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import CookieAlert from "../components/CookieAlert/CookieAlert";
import {useRouter} from "next/router";

export const MainLayout = ({ children, title, description, keywords, color }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [offset, setOffset] = useState(0);
  const [Cookie, setAlert] = useState(true);
  const router = useRouter();

  console.log(router.asPath)

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
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="facebook-domain-verification" content="1yko0pr5s3tuwq9dl4iokow2q6yb1j" />
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
