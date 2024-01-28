/* eslint-disable react/prop-types */
import style from './style.module.scss'
import { useEffect, useState } from 'react'
import {useCartStore} from '../../utils/cartStore'

const ProductDetail = ({product, onClose}) => {
	const [count, setCount] = useState(0)
	const {addToCart, cart} = useCartStore()

	const countHandler = (mode) => {
		if (mode === 'plus') {
			setCount(count => count + 1)
		} else if (mode === 'minus') {
			setCount(count => {
				if (count > 0) {
					return count - 1
				}
				return count
			})
		}
	}

	useEffect(() => {
		const productInCart = cart.products.find(item => item.id === product.id)
		if (productInCart) {
			console.log(productInCart);
			setCount(+productInCart.count)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		console.log(count)
	}, [count])

	const handleAddToCart = () => {
		addToCart(product, count)
		setCount(0)
		onClose()
	}

	return (
		<div className={style.product} onClick={handleAddToCart}>
			<div className={style.product__wrapper} onClick={(e) => e.stopPropagation()}>
				<img src={product.image} alt={product.name} className={style.product__image}/>
				<div className={style.product__info}>
					<h1 className={style.product__name}>{product.name}</h1>
					<p className={style.product__description}>{product.description}</p>
					<div className={style.product__order}>
						{!count ?  (<p>{product.price} CZK</p>) : (<p>{product.price * count} CZK</p>)}
						<div className={style.product__buttons}>
							{count === 0 ? (<button className={style.product__button} onClick={() => setCount(count => count + 1)}>Přidat do košíku</button>) : (
							<>
								<button className={style.product__buttonHandle} onClick={() => countHandler('minus')}>-</button>
								<p>{count}</p>
								<button className={style.product__buttonHandle} onClick={() => countHandler('plus')}>+</button>
							</>)}
						</div>
						</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail