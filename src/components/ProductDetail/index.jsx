/* eslint-disable react/prop-types */
import style from './style.module.scss'
import { useState } from 'react'

const ProductDetail = ({product, onClose}) => {
	const [count, setCount] = useState(0)
	return (
		<div className={style.product} onClick={onClose}>
			<div className={style.product__wrapper}>
				{count > 0 && <div className={style.product__count}>
					{count}
				</div>}
				<img src={product.image} alt={product.name} className={style.product__image}/>
				<div className={style.product__info}>
					<h1 className={style.product__name}>{product.name}</h1>
					<p className={style.product__description}>{product.description}</p>
					<p>{product.price} CZK</p>
				</div>
				<div className={style.product__btns}>
					<button className={style.product__btn} onClick={(e) => {
						e.stopPropagation()
						setCount(count => count + 1)}}>+</button>
					<button className={style.product__btn} onClick={(e) => {
						e.stopPropagation()
						setCount(count => {
							if (count > 0) {
								return count - 1
							}
							return count
						})}}>-</button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail