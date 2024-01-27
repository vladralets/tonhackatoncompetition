import styles from './style.module.scss';

const Header = () => {
	return (
		<div className={styles.header}>
			<img src="/images/logo.svg" alt="logo" className={styles.header__logo}/>
		</div>
	)
}

export default Header;