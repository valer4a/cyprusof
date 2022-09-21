import { useEffect, useState } from 'react';

function FullSearch() {
	const [sc_1, setChecked] = useState(true);
	const [sv, setSv] = useState();
	function ss(value) {
		if (value.length > 2) {
			var sval = value.toLowerCase();
			setSv(sval);
		} else {
			setSv(sval);
		}
	}
	return (
		<>
			<div className="search">
				<input type="text" placeholder='Поиск по всему сайту' onKeyUp={(e) => ss(e.target.value)} />
			</div>
			<div className="sub_search">
				<input type="checkbox" id="inContent" defaultChecked={sc_1} onChange={(e) => setChecked(!sc_1)} />
				<label htmlFor="inContent" style={{ marginTop: '2px', position: 'absolute' }}> Искать в содержимом</label>
			</div>
		</>
	);
}

export default FullSearch;