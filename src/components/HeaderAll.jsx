import { Routes, Route, Link, Navigate } from "react-router-dom";
import NavBoxes from './NavBoxes';

function HeaderAll() {
	return (
		<>
			<div className="headerBig">
				<div className="headerLogo">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<div className="logo_img">
							<img src="/images/cyprus.svg" />
						</div>
					</Link>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<div className="logo_text_all">
							cyprusof.ru
						</div>
					</Link>
				</div>

			</div>
			<div className="middle_header">
				<NavBoxes to="/history" title="История" about="Хронографическая карта" />
				<NavBoxes to="/objects" title="Обьекты" about="Церкви, монастыри, достопримы" />
				<NavBoxes to="/peoples" title="Люди" about="Биографии личностей" />
				<NavBoxes to="/media" title="Медиа-галерея" about="То, что касается острова" bgcx="ct_green" />
			</div>
		</>
	);
}

export default HeaderAll;

