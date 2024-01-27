import style from './style.module.scss'
const tg = window.Telegram.WebApp
import { useEffect, useState } from 'react'

// const categories = ['Vše', 'Snídaně', 'Bagely', 'Saláty', 'Snacky', 'Polévky', 'Dezerty', 'Nápoje', 'Káva'];
const categories = [{
	id: "all",
	name: "Vše",
}, {
	id: 0,
	name: "Snídaně",
}, {
id: 1,
	name: "Bagely",
}, {
id: 2,
	name: "Saláty",
}, {
id: 3,	
	name: "Snacky",
}, {
id: 4,
	name: "Polévky",
}, {
id: 5,
	name: "Dezerty",
}, {
id: 6,
	name: "Nápoje",
}, {
id: 7,
	name: "Káva",
}]


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
					onClick={() => onCategoryClick(category.id)} 
					className={style.category__button}
				>
					{category.name}
				</button>
			))}
		</div>
	);
};

export default CategoryList