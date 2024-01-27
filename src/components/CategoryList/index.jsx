import style from './style.module.scss'
const tg = window.Telegram.WebApp
import { useEffect, useState } from 'react'

const categories = ['Vše', 'Snídaně', 'Bagely', 'Saláty', 'Snacky', 'Polévky', 'Dezerty', 'Nápoje', 'Káva'];


const CategoryList = ({
	// eslint-disable-next-line react/prop-types
	onCategoryClick,
}) => {
	const [isDesctop, setIsDesctop] = useState(false)
	
	useEffect(() => {
		setIsDesctop(tg.platform === "macos" || tg.platform === "tdesktop")
	}, [])

	return (
		<div className={`${isDesctop ? style.categoryExt : style.category}`}>
			{categories.map((category, index) => (
				<button 
					key={index} 
					onClick={() => onCategoryClick(category)} 
					className={style.category__button}
				>
					{category}
				</button>
			))}
		</div>
	);
};

export default CategoryList