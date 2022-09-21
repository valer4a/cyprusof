import { Routes, Route, Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import HeaderAll from "../HeaderAll";
import Yselector from '../Yselector';
import FullSearch from '../FullSerach';
import EventLoad from '../EventLoad';
import Y2selector from '../Y2selector';

function HistoryPage() {
	let { year } = useParams();
	if (year == undefined) { year = 648; }
	return (
		<>
			<HeaderAll />
			<div className="contentBox">
				<div className="y_pointer">
					<Yselector year={year} />
					<Y2selector year={year} />
				</div>
				<div className="main_content_box">
					<div className="mcb_left">
						<div className="search_box">
							<FullSearch />
						</div>
						<div className="fullLink">
							<Link to="/history/all">Смотреть список всех событий</Link>
						</div>
						<div className="events_box">
							<EventLoad year={year} />
						</div>
					</div>
					<div className="mcb_right">
						<div className="right_top">
							<div className="right_top_left">

							</div>
							<div className="right_top_right">

							</div>
						</div>
						<div className="right_content">
							<b>Первое арабское вторжение на Кипр (648)</b><br />
							Для Византии Кипр мог служить внешней защитой южных берегов, а также как военно-морская база, с которой их флот мог бы нанести удар по арабской территории на востоке и юге. С другой стороны, арабский контроль над Кипром, вероятно, обеспечил бы свободу от византийских морских нападений на арабский материк и мог бы в то же время ослабить позиции византийских сухопутных войск на восточной сухопутной границе, подвергнув их атакам арабов с острова.
							Первым из арабских государственных деятелей, осознавших величайшее стратегическое значение Кипра в войне с Византией стал Муавия. Такое  осознание, вероятно, пришло в том числе благодаря византийским нападениям на арабскую территорию со стороны Кипра.  Также, можно предположить, что потеря империей Александрии в предшествующий период принесла значительные суммы денег на Кипр, и что Муавия был осведомлен о наличии значительных количеств золота на Кипре, и таким образом имел дополнительный стимул для начала атаки.

						</div>
						<div className="right_bottom">

						</div>
					</div>
				</div>
			</div>

		</>
	);
}

export default HistoryPage;