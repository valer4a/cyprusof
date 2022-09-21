import { useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import YSpoint from './YSpoint';


function swap(obj) {
	const res = {};
	Object.keys(obj).forEach(function (value) {
		var key = obj[value];
		res[key] = value;
	});
	return res;
};
function nearestValue(values, search) {
	let countValue = values.length;
	let nearest = values[0];
	for (var i = 0; i <= countValue; i++) {
		if (Math.abs(nearest - search) > Math.abs(values[i] - search)) {
			nearest = values[i];
		}
	}
	return nearest;
}
function setYear(year) {
	var pointY = [-700, 0, 648, 965, 1192, 1586, 1878, 1960, 2022];
	var points = document.getElementsByClassName('YS_point');
	var YSP = document.getElementById('YSP');
	var ps = [];
	for (let i = 0; i < points.length; i++) {
		ps.push(points[i].offsetLeft);
	}
	var iY = nearestValue(pointY, year);
	var pY = swap(pointY);
	var bpY = pY[iY];
	var pxRes = ps[bpY];
	if (iY >= year) {
		var delta = pxRes - ps[bpY - 1];
		var mA = iY - pointY[bpY - 1];
		var dp = delta / mA;
		var dppx = Math.abs(year - pointY[bpY - 1]) * dp;
		var dpRes = ps[bpY - 1] + dppx;
		YSP.style.left = dpRes + 'px';
	}
	if (iY < year) {
		var delta = pxRes - ps[bpY - 1];
		var mA = iY - pointY[bpY - 1];
		var dp = delta / mA;
		var dppx = Math.abs(year - pointY[bpY - 1]) * dp;
		var dpRes = ps[bpY - 1] + dppx;
		YSP.style.left = dpRes + 'px';
	}
	YSP.innerHTML = year + 'г';
	window.history.replaceState(null, null, "/history/" + year);
}

function Y2selector(props) {
	const [statYear, setStatYear] = useState(props.year);
	function exyInput(value) {
		//setStatYear(value);
	}
	function exyPlus() {
		var SY = parseInt(statYear) + 1;
		setStatYear(SY);
		setYear(SY);
		document.getElementsByClassName('ex_changeButton')[0].classList.add('active');
	}
	function exyMinus() {
		var SY = parseInt(statYear) - 1;
		setStatYear(SY);
		setYear(SY);
		document.getElementsByClassName('ex_changeButton')[0].classList.add('active');
	}
	function exyChange() {
		console.log('change year');
		document.getElementsByClassName('ex_changeButton')[0].classList.remove('active');
	}

	return (
		<>
			<div className="exactYearBox">
				<div className="exy">
					<div className="exy_minus" onClick={exyMinus}>-</div>
					<div className="exy_inputBox">
						<div>{statYear}</div>
					</div>
					<div className="exy_plus" onClick={exyPlus}>+</div>
				</div>
				<div className="ex_changeButton" onClick={exyChange}>
					Вперед
				</div>
			</div>
		</>
	);
}

export default Y2selector;