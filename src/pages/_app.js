import '../styles/globals.css';
import CountriesContextProvider from '../common/contexts/CountriesContext';

function MyApp({ Component, pageProps }) {
  return (
    <CountriesContextProvider>
      <Component {...pageProps} />
    </CountriesContextProvider>
  );
}

export default MyApp;
