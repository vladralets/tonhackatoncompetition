import style from './style.module.scss'

const categories = ['Vše', 'Snídaně', 'Bagely', 'Saláty', 'Snacky', 'Polévky', 'Dezerty', 'Nápoje', 'Káva'];

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
				>
					{category}
				</button>
			))}
		</div>
	);
};

export default CategoryList