import '../styles/globals.scss';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#25a5f0"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
