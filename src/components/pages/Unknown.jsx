import { Routes, Route, Link, Navigate } from "react-router-dom";
import HeaderAll from "../HeaderAll";

function UnknownPage() {
	return (
		<>
			<HeaderAll />
			<div className="contentBox">
				<div className="msg_404">Указанная страница не найдена!</div>
			</div>
		</>
	);
}

export default UnknownPage;