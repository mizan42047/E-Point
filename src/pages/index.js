import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss';
import CategoryList from '@/components/CategoryList';
import Banner from '@/components/Banner';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>E Point</title>
        <meta name="description" content="Best Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={styles.main}>
        <Banner/>
        <div className={styles.main__content}>
          <CategoryList/>
        </div>
      </main>
    </>
  )
}
