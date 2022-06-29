import React from 'react';
import family from '../../../image/family.png';

export default function Step2() {
	return (
		<div className="w-[575px] h-[1096px] mx-auto mt-[26px]">
			<div className="w-[575px] h-[132px]">
				<p className="w-[125px] h-[24px] mb-[8px] font-semibold text-[16px]">THÔNG TIN SIM</p>
				<div className="w-[575px] h-[100px] bg-[#F6F6F6] flex items-center p-[12px] rounded-md">
					<img src={family} />
					<div className="ml-[12px]">
						<h3 className="w-[121px] h-[29px] mb-0 font-semibold text-[20px]">SIM Gia Đình</h3>
						<p className="w-[135px] h-[28px] mb-0 font-normal text-[18px]">Số lượng : 9 sim</p>
					</div>
				</div>
			</div>
			<div className="mt-[30px]">
				<h3>DANH SÁCH SỐ</h3>
			</div>
		</div>
	);
}
