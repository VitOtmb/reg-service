import logo from '../../resource/logo.png';

import './header.scss';

const Header = () => {
	return (
		<div className="header">
			<a href="#header">
				<img className="header__logo" src={logo} alt="logo"></img>
			</a>
			<h1 className="header__title">Бронирование Автомобилей</h1>
		</div>
	);
};

export default Header;
