import styles from './style.module.scss';

const stores = [
	{
		id: 1,
		name: 'Karlovy Vary',
	},
	{
		id: 2,
		name: 'Cheb',
	},
	{
		id: 3,
		name: 'Praha - Florenc',
	},
	{
		id: 4,
		name: 'Praha - Čimice',
	},
	{
		id: 5,	
		name: 'Praha - Vršovice',
	},
	{
		id: 6,	
		name: 'Praha - Malostranská',
	}

]

const Header = () => {
	return (
		<div className={styles.header}>
			<img src="/images/logo.svg" alt="logo" className={styles.header__logo}/>
			<select className={styles.header__select}>
				{stores.map(store => (
					<option className={styles.header__option} key={store.id} value={store.id}>{store.name}</option>
				))}
			</select>
		</div>
	)
}

export default Header;