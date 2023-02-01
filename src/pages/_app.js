import Header from '@/components/Header';
import 'antd/dist/reset.css';
import "@/styles/globals.scss";
import Footer from '@/components/Footer';
import { Categories } from '@/store/Provider';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Categories>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Categories>
    </>
  )
}
