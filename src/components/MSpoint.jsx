import { Routes, Route, Link, Navigate } from "react-router-dom";

function MSpoint(props) {
	return (
		<>
			<div className="MS_point">
				<div className="MS_year">{props.month}</div>
			</div>
		</>
	);
}

export default MSpoint;