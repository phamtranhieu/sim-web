import React from 'react';
import './Choose.scss';
import logo from '../../asset/logo.svg';
import arrow from '../../asset/arrow.svg';
import search from '../../asset/search.svg';
import { Outlet } from 'react-router-dom';
import { Input } from 'antd';
// import './Choose';

export default function Choose() {
	return (
		<div>
			<div className="header-choose w-[1440px] h-[386px] mx-auto relative">
				<div className="header-title  w-[1440px] h-[56px] flex items-center justify-center">
					<img src={arrow} className="absolute left-[40px]" />
					<img src={logo} className="w-[116px] h-[32px] flex items-center" />
				</div>
				<div className="input-choose w-[774px] h-[48px] top-[237px] mx-auto flex absolute left-[325px] items-center bg-white p-[8px]">
					<img src={search} alt="" className="w-[12px] h-[12px] " />
					<Input className="w-[718px] h-[28px] border-0 outline-none" />
				</div>
			</div>
			<div className="mx-auto mt-2 w-[1440px] h-[708px]">
				<Outlet />
			</div>
		</div>
	);
}
