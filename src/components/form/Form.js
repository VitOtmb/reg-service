import { useState, useEffect } from 'react';
import Select from 'react-select';
import { getResource } from '../../services/DataRequest';
import './form.scss';

const Form = () => {
	let [optionCities, setOptionCities] = useState([]);
	let [optionCars, setOptionCars] = useState([]);

	useEffect(() => {
		getResource('http://localhost:3000/cities').then((res) => optionsLoadedCities(res));
	}, []);

	useEffect(() => {
		getResource('http://localhost:3000/cars').then((res) => optionsLoadedCars(res));
	}, []);

	const optionsLoadedCities = (optionCities) => {
		setOptionCities([...optionCities]);
	};
	const optionsLoadedCars = (optionCars) => {
		setOptionCars([...optionCars]);
	};

	const selectOptionCities = optionCities.map((item) => (
		<option key={item.code} value={item.name}>
			{item.name}
		</option>
	));

	const selectOptionCars = optionCars.map((item) => (
		<option key={Object.keys(item)} value={Object.keys(item)} className="cars">
			{Object.keys(item)}
		</option>
	));

	return (
		<div className="contentField">
			<div className="container">
				<h2 className="contentField__title">Оставить заявку</h2>
				<h3 className="contentField__subtitle">Заполните данные формы</h3>

				<form>
					<div className="userInfo">
						<input
							type="text"
							id="surname"
							name="surname"
							placeholder="Фамилия"
							required
						></input>
						<input type="text" id="name" name="name" placeholder="Имя" required></input>
						<input
							type="text"
							id="patronymic"
							name="patronymic"
							placeholder="Отчество"
							required
						></input>
						<input type="email" id="email" placeholder="Email" required></input>
					</div>
					<div className="userData">
						<div className="userData__block1">
							<input
								type="text"
								id="driverlLicense"
								placeholder="Водительское удостоверение"
							></input>
							<select defaultValue="" id="cities">
								<option disabled value="">
									Город
								</option>
								{selectOptionCities}
							</select>
						</div>
						<div className="userData__block2">
							<select defaultValue="">
								<option disabled value="">
									Марка автомобиля
								</option>
								{selectOptionCars}
							</select>
							<select defaultValue="">
								<option disabled value="">
									Модель
								</option>
							</select>
						</div>
					</div>

					<div className="checkbox__form">
						<input type="checkbox"></input>
						<span>Согласен на обработку персональных данных</span>
					</div>

					<button name="save" className="save-data">
						Сохранить
					</button>
					<button type="submit" name="submit" className="send">
						Отправить на регистрацию
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
