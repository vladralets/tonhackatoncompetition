/* eslint-disable react/prop-types */
import style from './style.module.scss'

const ProductDetail = ({product}) => {
	return (
		<div className={style.product}>
			<div className={style.product__wrapper}>
				<img src={product.image} alt={product.name} className={style.product__image}/>
				<div className={style.product__info}>
					<h1 className={style.product__name}>{product.name}</h1>
					<p className={style.product__description}>{product.description}</p>
					<p>{product.price} CZK</p>
				</div>
				<div className={style.product__btns}>
					
				</div>
			</div>
		</div>
	)
}

export default ProductDetail