import { appWithTranslation } from 'next-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
};

export default appWithTranslation(MyApp);
