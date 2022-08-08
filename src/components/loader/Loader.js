import loader from './loader.png';

import './loader.scss';

const Loader = () => {
	return (
		<>
			<div className="overlay">
				<img src={loader} alt="loader"></img>;
			</div>
		</>
	);
};

export default Loader;
