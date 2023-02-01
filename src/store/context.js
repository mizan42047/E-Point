import { createContext } from "react";

const categoryContext = createContext({
	allCategories: [],
	getCategoryProducts: (category) => {}
})

export {categoryContext};