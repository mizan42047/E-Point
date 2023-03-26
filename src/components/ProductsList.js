import Link from "next/link";
import styles from "@/styles/productsList.module.scss";
import { Rate } from 'antd';
import { useMemo } from "react";

const ProductsList = ({ productsList }) => {
    const products = useMemo(() => {
        return [...productsList];
    })

    return (
        <div className={styles["products-list"]}>
            <h2 className={styles["products-list__heading"]}>Products</h2>
            <ul className={styles["products-list__grid"]}>
                {
                    products && products.map((product, index) => (
                        <li key={index} className={styles["products-list__grid--item"]}>
                            <div className={styles["products-list__wrapper"]}>
                                <Link href={`/products/${product?.id}`} className={styles["products-list__wrapper-link"]}>
                                    <figure className={styles["products-list__thumbnail"]}>
                                        <img src={product.image} alt={product.title} width={500} height={500} />
                                    </figure>
                                </Link>
                                <div className={styles["products-list__content"]}>
                                    <div className={styles["product-list__categories"]}>
                                        <Link href={`/products/category/${product.category}`} className={styles["products-list__categories-link"]}>{product.category}</Link>
                                    </div>
                                    <h3 className={styles["products-list__title"]}>{product.title}</h3>
                                    <div className={styles["products-list__ratings"]}>
                                        <Rate disabled defaultValue={product.rating.rate} className={styles["products-list__ratings--rate"]} />
                                        <p className={styles["products-list__ratings--count"]}>({product.rating.count})</p>
                                    </div>
                                    <div className={styles["products-list__price"]}>
                                        <span className={styles["products-list__price--item"]}>${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
                <div className="productsListInfinityArea"></div>
            </ul>
        </div>
    )
}

export default ProductsList;
