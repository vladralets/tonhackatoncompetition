/* eslint-disable react/prop-types */
import {useCartStore} from '../../utils/cartStore'
import style from './style.module.scss'

const Cart = ({onClose}) => {
	const {cart} = useCartStore()

	return (
		<div className={style.cart}>
			<button onClick={onClose} className={style.cart__close}>Zavřít</button>
			<h2>Cart</h2>
			{cart.products.map((item, index) => (
				<div key={index}>
					<img src={item.image} alt={item.name} />
					<div>
						<h3>{item.name}</h3>
						<p>{item.price}</p>
						<p>{item.count}</p>
						<p>{item.price * item.count}</p>
					</div>
				</div>
			)
			)}
		</div>
	)
}

export default Cart