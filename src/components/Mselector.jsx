import { Routes, Route, Link, Navigate } from "react-router-dom";
import MSpoint from './MSpoint';

function Mselector() {

	function mdHandler(e) {
		var YSP = document.getElementById('YSP');
		YSP.onmousemove = function (event) {
			let firstPoint = document.getElementsByClassName('YS_point')[0];
			let endPoint = document.getElementsByClassName('YS_point')[8];
			if (event.clientX > firstPoint.offsetLeft && event.clientX < endPoint.offsetLeft) {
				YSP.style.left = event.clientX - 25 + 'px';
			}
		}
		YSP.onmouseup = function (event) {
			YSP.onmousemove = null;
		}
		YSP.onmouseout = function (event) {
			YSP.onmousemove = null;
		}
	}
	function mmHandler(e) {

	}

	return (
		<>
			<div className='MS_box'>
				<div className="MS_line">
					<div className="MSP" id="MSP"
						onMouseDown={(e) => mdHandler(e)}
					></div>
					<MSpoint month="Январь" />

				</div>
			</div>
		</>
	);
}

export default Mselector;