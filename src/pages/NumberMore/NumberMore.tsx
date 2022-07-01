import React from 'react';
import button from '../../image/arrow - 1-left.png';
import logo from '../../image/logo - type - head.png';
import { numberInfor } from './NumberMoreData';

export default function NumberMore() {
	return (
		<div className="bg-[#F6F6F6] h-full">
			<div className="w-[1440px] h-[110vh] mx-auto bg-[#F6F6F6]">
				<div className="header-choose-package w-[1440px] h-[56px] flex items-center justify-center relative">
					<img className="w-[26px] h-[26px] absolute left-[12px]" src={button} alt="" />
					<img className="w-[116px] h-[32px]" src={logo} alt="" />
				</div>
				<div className="w-[975px] h-[1094px] mx-auto bg-[#F6F6F6]">
					<div className="w-[975px] h-[28px] mx-auto mt-[38px]">
						<span className="w-[115px] h-[28px]">GÓI 1 THÁNG</span>
					</div>
					<div className="w-[975px] h-[282px] flex mr-[36px]">
						{numberInfor
							.filter(item => {
								return item.month == 1;
							})
							.map((item, index) => {
								return (
									<div className="flex mr-[36px]">
										<img src={item.image} />
									</div>
								);
							})}
					</div>
					<div className="w-[975px] h-[28px] mx-auto mt-[38px]">
						<span className="w-[115px] h-[28px]">GÓI 3 THÁNG</span>
					</div>
					<div className="w-[975px] h-[282px] flex mr-[36px]">
						{numberInfor
							.filter(item => {
								return item.month == 3;
							})
							.map((item, index) => {
								return (
									<div className="flex mr-[36px]">
										<img src={item.image} />
									</div>
								);
							})}
					</div>
					<div className="w-[975px] h-[28px] mx-auto mt-[38px]">
						<span className="w-[115px] h-[28px]">GÓI 6 THÁNG</span>
					</div>
					<div className="w-[975px] h-[282px] flex mr-[36px]">
						{numberInfor
							.filter(item => {
								return item.month == 6;
							})
							.map((item, index) => {
								return (
									<div className="flex mr-[36px]">
										<img src={item.image} />
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
}
