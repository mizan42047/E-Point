import Head from 'next/head'
import styles from '@/styles/Home.module.scss';
import { Bebas_Neue } from "@next/font/google";
import CategoryList from '@/components/CategoryList';
import Banner from '@/components/Banner';
import ProductsList from '@/components/ProductsList';

const bebas_neue = Bebas_Neue({
  weight: '400',
  subsets: ["latin"]
});

export const getStaticProps = async () => {
  const catRes = await fetch("https://fakestoreapi.com/products/categories");
  const productsRes = await fetch("https://fakestoreapi.com/products");
  const catData = await catRes.json();
  const productsData = await productsRes.json();

  return {
    props: {
      categoryList: catData,
      productsList: productsData
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}

export default function Home({categoryList, productsList}) {

  return (
    <>
      <Head>
        <title>E Point</title>
        <meta name="description" content="Best Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className={styles.main}>
        <Banner />
        <div className={styles.main__content}>
          <CategoryList categoryList={categoryList} />
          <ProductsList productsList={productsList} />
        </div>
      </main>
    </>
  )
}
