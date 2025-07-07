import '../styles/globals.css';
import 'boxicons/css/boxicons.min.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
