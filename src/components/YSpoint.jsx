import { Routes, Route, Link, Navigate } from "react-router-dom";

function YSpoint(props) {
	return (
		<>
			<div className="YS_point">
				<div className="YS_year">{props.year}г</div>
			</div>
		</>
	);
}

export default YSpoint;