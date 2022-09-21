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

function Yselector(props) {
	const [statYear, setStatYear] = useState(props.year);
	useEffect(() => {
		if (props.year > -701 && props.year < 2023) {
			setYear(props.year);

		}
	});

	function setY(year) {
		//alert('setStatYear(' + year + ')');
		//setStatYear(year);
	}

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
		setStatYear(year);
	}
	function setPixel(pixel, setup = 1) {
		var pointY = [-700, 0, 648, 965, 1192, 1586, 1878, 1960, 2022];
		var points = document.getElementsByClassName('YS_point');
		var YSP = document.getElementById('YSP');
		var ps = [];
		for (let i = 0; i < points.length; i++) {
			ps.push(points[i].offsetLeft);
		}
		var iY = nearestValue(ps, pixel); //Ближайшая фиксированая точка;
		var aps = swap(ps);
		var Ynp = parseInt(aps[iY]); //Номер ближайшей фиксированой точки;
		var Ynpx = pointY[Ynp]; // Год ближайшей фиксированой точки;
		var delta = Math.abs(iY - ps[Ynp - 1]);
		if (iY >= pixel) {
			var Ydp = pointY[Ynp - 1]; // Год соседней фиксированой точки;
			var mA = Math.abs(Ynpx - Ydp);
			var dp = delta / mA;
			var dppx = Math.abs(iY - pixel);
			var Yres = dppx / dp;
			var YY = Ynpx - Yres;

		}
		if (iY < pixel) {
			var Ydp = pointY[Ynp + 1]; // Год соседней фиксированой точки;
			var mA = Math.abs(Ynpx - Ydp);
			var dp = delta / mA;
			var dppx = Math.abs(iY - pixel);
			var Yres = dppx / dp;
			var YY = Ynpx + Yres;

		}
		YY = Math.round(YY);
		if (setup == 1) { window.history.replaceState(null, null, "/history/" + YY); }
		YSP.innerHTML = YY + 'г';
		setY(YY);
		document.getElementsByClassName('ex_changeButton')[0].classList.add('active');
		setStatYear(YY);
		console.log('statYear:' + statYear);
	}
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
			setPixel(event.clientX);

		}
		YSP.onmouseout = function (event) {
			YSP.onmousemove = null;
		}
	}


	return (
		<>
			<div className='YS_box'>
				<div className="YS_line">
					<div className="YSP" id="YSP"
						onMouseDown={(e) => mdHandler(e)}
					></div>
					<YSpoint year="-700" />
					<YSpoint year="0" />
					<YSpoint year="648" />
					<YSpoint year="965" />
					<YSpoint year="1192" />
					<YSpoint year="1586" />
					<YSpoint year="1878" />
					<YSpoint year="1960" />
					<YSpoint year="2022" />
				</div>
			</div>
		</>
	);
}

export default Yselector;