import styles from "@/styles/categoryList.module.scss";
import Link from "next/link";
import { useMemo } from "react";

const CategoryList = ({ categoryList }) => {
	const categories = useMemo(() => {
		return [...categoryList];
	})

	return (
		<div className={styles.category__list}>
			<h2 className="category-heading">Categories</h2>
			<div className={styles.list__grid}>
				{
					categories && categories.map((category, idx) => (
						<div className={styles['list__grid--item']} key={idx}>
							<Link href={`/products/category/${category}`} className={styles.category__link}>
								<h3 className={styles.category__title}>{category}</h3>
							</Link>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default CategoryList;