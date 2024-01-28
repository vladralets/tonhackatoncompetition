/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useLocationStore } from "../../utils/locationStore"

import { DUMMY_PRODUCTS } from "../../constants/DUMMY_PRODUCTS"
import ProductCard from "../ProductCard"

import style from './style.module.scss'

const ProductList = ({
	categoryId,
	onProductClick
}) => {

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
				products.map((category, index) => {
					if (categoryId === "all") {
						return (
							<div className={style.category} key={index}>
								<h2 className={style.category__title}>{category.categoryName}</h2>
								<div className={style.category__list}>
									{category.products.map((product, index) => {
										return (
											<ProductCard
												key={index}
												product={product}
												onProductClick={onProductClick}
											/>
										)
									})}
								</div>
							</div>
						)
					} else {
						if (categoryId === category.category) {
							return (
								<div className={style.category} key={index}>
									<h2 className={style.category__title}>{category.categoryName}</h2>
									<div className={style.category__list}>
										{category.products.map((product, index) => {
											return (
												<ProductCard
													key={index}
													product={product}
												/>
											)
										})}
									</div>
								</div>
							)
						}
					}
					
				})
			}
		</div>
	)
}

export default ProductList