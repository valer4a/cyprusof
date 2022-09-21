import { Routes, Route, Link, Navigate } from "react-router-dom";

function NavBoxes(props) {
	var light = '';
	var wlp = window.location.pathname;
	var i2s = wlp.indexOf('/', 1);
	if (i2s > 0) {
		var wlp2 = wlp.substring(0, i2s);
	}
	else { wlp2 = wlp; }
	if (wlp2 == props.to) { light = 'light'; }
	return (
		<>
			<Link to={props.to} style={{ textDecoration: 'none' }}>
				<div className={'catalogue_item ' + props.bgcx + ' ' + light}>
					<div className="ct_item_title">{props.title}</div>
					<div className="ct_item_about">{props.about}</div>
				</div>
			</Link>
		</>
	);
}

export default NavBoxes;