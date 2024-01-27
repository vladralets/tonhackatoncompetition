import style from './style.module.scss'

const tg = window.Telegram.WebApp
const categories = ['Vše', 'Snídaně', 'Bagely', 'Saláty', 'Snacky', 'Polévky', 'Dezerty', 'Nápoje', 'Káva'];
if (tg.platform === "macos" || tg.platform === "windows") {
  style.category["&::-webkit-scrollbar"] = { display: "block" };
}

const CategoryList = ({
	// eslint-disable-next-line react/prop-types
	onCategoryClick,
}) => {
	return (
		<div className={style.category}>
			{categories.map((category, index) => (
				<button 
					key={index} 
					onClick={() => onCategoryClick(category)} 
					className={style.category__button}
					style={{
						
					}}
				>
					{category}
				</button>
			))}
		</div>
	);
};

export default CategoryList