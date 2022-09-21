import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link, Navigate } from "react-router-dom";

export const PageLoader = () => {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/a' element="a" />
					<Route path='*' element="UNDEFINED" />
				</Routes>
			</BrowserRouter>
		</>
	)
}



const root = ReactDOM.createRoot(document.getElementById('mainbox'));
root.render(<PageLoader />);

reportWebVitals();