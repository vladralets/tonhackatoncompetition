import { useEffect, useState } from "react"
import { useLocationStore } from "../../utils/locationStore"

import { DUMMY_PRODUCTS } from "../../constants/DUMMY_PRODUCTS"
import ProductCard from "../ProductCard"

import style from './style.module.scss'

const ProductList = () => {

	const [products, setProducts] = useState([])

	const { location } = useLocationStore()

	useEffect(() => {
		for (let i = 0; i < DUMMY_PRODUCTS.length; i++) {
			if (DUMMY_PRODUCTS[i].id === location) {
				setProducts(DUMMY_PRODUCTS[i].products)
			}
		}
	}, [location])

	return (
		<div>
			{
				products.map((category) => {
					return (
						<div className={style.category} key={category.id}>
							<h2 className={style.category__title}>{category.categoryName}</h2>
							<div className={style.category__list}>
								{category.products.map((product) => {
									return (
										<ProductCard
											key={product.id}
											product={product}
										/>
									)
								})}
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default ProductList