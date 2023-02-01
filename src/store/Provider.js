import { useState } from "react";
import useSWR from 'swr';
import { categoryContext } from "./context";
import { Empty } from 'antd';

const CategoryData = categoryContext;

const Categories = ({ children }) => {
	const fetcher = (...args) => fetch(...args).then((res) => res.json())
	const { data, error, isLoading } = useSWR('https://fakestoreapi.com/products/categories', fetcher);
	
	return (
		<CategoryData.Provider value={{ data, error, isLoading }}>
			{children}
		</CategoryData.Provider>
	)
}

export { Categories };