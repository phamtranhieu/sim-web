import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Onboarding from './pages/Onboarding/Onboarding';
import Fan from './pages/Fan/Fan';
import Class from './pages/Class/Class';
import NumberIdol from './pages/NumberIdol/NumberIdol';
import Decode from './pages/NumberIdol/Decode/Decode';

import Authenticate from './pages/Authenticate/Authenticate';
import Register from './pages/Register/Register';
import ConfirmRegister from './pages/ConfirmRegister/ConfirmRegister';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ConfirmPassword from './pages/ResetPassword/ConfirmPassword';
import SetPassword from './pages/ResetPassword/SetPassword';
import Home from './pages/Home/Home';

import Order from './pages/Order/Order';
import Main from './pages/Main/Main';

import Choose from './pages/Choose/Choose';
import Choose1 from './pages/Choose/Choose1/Choose1';
import Choose2 from './pages/Choose/Choose2/Choose2';
import Choose3 from './pages/Choose/Choose3/Choose3';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route index element={<Onboarding />} />

				<Route path="/number-idol" element={<NumberIdol />} />
				<Route path="/number-idol/decode" element={<Decode />} />
				<Route path="/fan" element={<Fan />} />
				<Route path="/class" element={<Class />} />

				<Route path="/login" element={<Authenticate />} />
				<Route path="/register" element={<Register />} />
				<Route path="/confirm-register" element={<ConfirmRegister />} />
				<Route path="/reset-password" element={<ResetPassword />}>
					<Route path="set" element={<SetPassword />} />
					<Route path="confirm" element={<ConfirmPassword />} />
				</Route>

				<Route path="/home" element={<Home />} />

				<Route path="/order" element={<Order />} />

				<Route path="/choose" element={<Choose />}>
					<Route path="step1" element={<Choose1 />} />
					<Route path="step2" element={<Choose2 />} />
					<Route path="step3" element={<Choose3 />} />
				</Route>

				<Route path="/main" element={<Main />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
