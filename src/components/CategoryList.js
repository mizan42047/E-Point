import { Card, Skeleton } from "antd";
const { Meta } = Card;
import { categoryContext } from "@/store/context";
import { useContext, useState } from "react";
import Image from "next/image";
import styles from '@/styles/categoryList.module.scss';

const CategoryList = () => {
	const { data, error, isLoading } = useContext(categoryContext);
	const imageList = [
		"/electronics.svg",
		"/jewelry.svg",
		"/mens-cloth.svg",
		"/womens-cloth.svg",
		"/access.svg",
		"/travell.svg",
		"/games.svg",
		"/baby.svg",
		"/vegetable.svg",
		"/food.svg"
	]

	const categories = data ? [...data, 'Access', 'Travell', 'Games', 'Baby', 'Vegetables', 'Food'] : [];

	return (
		<div className={styles.category__list}>
			<div className={styles.list__grid}>
				{
					!isLoading && categories.map((category, index) => {
						return (
							<div key={index} className={[styles['list__grid--item']]}>
								<Card className="epoint__category--card" style={{ width: '100%' }} cover={
									<Image src={imageList[index]} alt="Electronics" width={300} height={300} />
								}>
									<Meta
										title={<h3 className={styles.category__title}>{category}</h3>}
									/>
								</Card>
							</div>
						)
					})
				}

				{
					isLoading && imageList.map((item, index) => {
						return (
							<div key={index} className={[styles['list__grid--item']]}>
								<Card className="epoint__category--card" style={{ width: '100%' }} cover={
									<Skeleton.Image active={isLoading} style={{ width: 'auto', height: '150px' }} />
								}>
									<Meta
										title={<Skeleton.Input active={isLoading} size="large" block/>}
									/>
								</Card>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default CategoryList;