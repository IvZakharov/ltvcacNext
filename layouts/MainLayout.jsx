import Head from 'next/head';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MobileMenu } from '../components/MobileMenu/MobileMenu';
import { ToTopBtn } from '../components/ToTopBtn/ToTopBtn';
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';

export const MainLayout = ({ children, title, description, keywords }) => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [offset, setOffset] = useState(0);

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
      </Head>

      <Header onClickMenu={(bool) => setOpenedMenu(bool)} />

      <div className="main">{children}</div>

      {openedMenu && <MobileMenu onClickClose={(bool) => setOpenedMenu(bool)} />}
      {offset > 100 ? <ToTopBtn /> : null}
      <Footer />
    </>
  );
};
