import Header from '@/components/Header';
import 'antd/dist/reset.css';
import "@/styles/globals.scss";
import Footer from '@/components/Footer';
import { Bebas_Neue } from "@next/font/google";
const bebas_neue = Bebas_Neue({
  weight: '400',
  subsets: ["latin"]
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${bebas_neue.style.fontFamily};
        }
      `}</style>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}
