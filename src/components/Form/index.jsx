/* eslint-disable react/prop-types */
import { useState } from 'react'
import style from './style.module.scss'

const Form = ({onClose, sendOrder}) => {

	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [address, setAddress] = useState('')
	const [time, setTime] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()

		const order = {
			name,
			phone,
			address,
			time
		}

		sendOrder(order)
	}

	return (
		<div className={style.form}>
			<div className={style.form__nav}>
				<h2 className={style.form__title}>Objednávka</h2>
				<button className={style.form__close} onClick={onClose}>Zavřít</button>
			</div>
			<form className={style.form__form} onSubmit={handleSubmit}>
				<input className={style.form__input} type="text" placeholder="Zadejte své jméno" value={name} onChange={e => setName(e.target.value)}/>
				<input className={style.form__input} type="text" placeholder="Zadejte své telefonní číslo" value={phone} onChange={e => setPhone(e.target.value)}/>
				<input className={style.form__input} type="text" placeholder="Zadejte svou adresu" value={address} onChange={e => setAddress(e.target.value)}/>
				<input className={style.form__input} type="time" placeholder="Zadejte čas doručení" value={time} onChange={e => setTime(e.target.value)}/>
				<button className={style.form__button} type="submit">Odeslat</button>
			</form>
		</div>
	)
}

export default Form