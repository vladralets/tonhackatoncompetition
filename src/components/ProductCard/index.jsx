/* eslint-disable react/prop-types */
import styles from './style.module.scss'

const ProductCard = ({
	onClick,
	product,
}) => {
	return (
		<div key={product.id} onClick={onClick} className={styles.product}>
			<img src={product.image} alt={product.name} className={styles.product__image}/>
			<div className={styles.product__info}>
				<h3  className={styles.product__name}>{product.name}</h3>
				<p className={styles.product__price}>{product.price} CZK</p>
			</div>
		</div>
	)
}

export default ProductCard