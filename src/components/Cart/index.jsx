/* eslint-disable react/prop-types */
import {useCartStore} from '../../utils/cartStore'
import style from './style.module.scss'

const Cart = ({onClose}) => {
	const {cart} = useCartStore()

	return (
		<div className={style.cart}>
			<div className={style.cart__nav}>
				<h2 className={style.cart__title}>Cart</h2>
				<button onClick={onClose} className={style.cart__close}>Zavřít</button>
			</div>
			{cart.products.map((item, index) => (
				<div className={style.cart__item} key={index}>
					<img src={item.image} alt={item.name} className={style.cart__image}/>
					<div className={style.cart__info}>
						<h3 className={style.cart__name}>{item.name}</h3>
						<p className={style.cart__price}>Price: {item.price} czk</p>
						<p className={style.cart__quantity}>Quantity: {item.count}</p>
						<p className={style.cart__itemTotal}>Total: {item.price * item.count}</p>
					</div>
				</div>
			)
			)}
		</div>
	)
}

export default Cart