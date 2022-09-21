import { Routes, Route, Link, Navigate } from "react-router-dom";
import NavBoxes from '../NavBoxes';

function IndexPage() {
	return (
		<>
			<div className="logo">
				<div className="logo_img">
					<img src="images/cyprus.svg" />
				</div>
				<div className="logo_text">
					cyprusof.ru
				</div>
			</div>
			<div className="wellcome">Любишь Кипр? - тебе сюда!</div>
			<div className="catalogue">
				<NavBoxes to="/history" title="История" about="Хронографическая карта" />
				<NavBoxes to="/objects" title="Обьекты" about="Церкви, монастыри, достопримы" />
				<NavBoxes to="/peoples" title="Люди" about="Биографии личностей" />
				<NavBoxes to="/media" title="Медиа-галерея" about="То, что касается острова" bgcx="ct_green" />
				<NavBoxes to="/tours" title="Туризм" about="Маршруты, заказ экскурсий" bgcx="ct_green" />
				<NavBoxes to="/history" title="TOP-10" about="Куда стоит заехать" bgcx="ct_green" />
			</div>
		</>
	);
}

export default IndexPage;