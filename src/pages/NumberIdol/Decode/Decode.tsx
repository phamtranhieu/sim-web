import React from 'react';
import { Button, Modal, Form, Input, Space, Select, Radio, TimePicker } from 'antd';
import logo from '../../../asset/logo.svg';
import arrow from '../../../asset/arrow.svg';
import muiten from '../../../icon/muiten.svg';
import caro from '../../../image/caro.png';
import number3 from '../../../image/Số chủ đạo_ 3.png';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Decode() {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const a = searchParams.get('type');
	console.log(a);
	return (
		<div>
			<div className="w-[1440px] h-[1200px] mx-auto style-home-idol flex flex-col items-center relative">
				<div className="header w-[1440px] h-[56px] flex items-center justify-center ">
					<img src={arrow} className="absolute left-[40px]" />
					<img src={logo} className="w-[116px] h-[32px] flex items-center" />
				</div>
				<div className="w-[full] h-[full] mt-[70px] m-auto flex flex-col items-center">
					<img src={number3} className="mb-[40px]" />
					<div className="w-[500px] h-[736px] bg-order">
						<div className="w-[412px] h-[272px] m-auto py-[50px]">
							<p className="  text-base font-normal text-[16px] text-white ">
								Gần đây, TP.HCM và một số địa phương yêu cầu người dân không đồng ý tiêm vaccine phòng
								Covid-19 mũi 3
							</p>
							<p className=" font-normal text-[16px]  text-base text-white ">
								Gần đây, TP.HCM và một số địa phương yêu cầu người dân không đồng ý tiêm vaccine phòng
								Covid-19 mũi 3, 4 phải ký cam kết và chịu trách nhiệm nếu để lây lan dịch bệnh. Ngoài
								việc này, các địa phương phải báo cáo số lượng người dân không đồng ý tiêm về sở y tế
								ngay sau khi đợt cao điểm kết thúc.
							</p>
						</div>
						<div className="mt-[28px]">
							<img src={caro} alt="" className="ml-[45px]" />
						</div>
						<p className=" w-[412px] mx-auto mt-[28px] font-normal text-[16px]  text-base text-white ">
							Gần đây, TP.HCM và một số địa phương yêu cầu người dân không đồng ý tiêm vaccine phòng
							Covid-19 mũi 3, 4 phải ký cam kết và chịu trách nhiệm nếu để lây lan dịch bệnh. Ngoài việc
							này, các địa phương phải báo cáo số lượng người dân không đồng ý tiêm về sở y tế ngay sau
							khi đợt cao điểm kết thúc.
						</p>
					</div>
				</div>
				<div className="flex w-[264px] h-[48px] items-center mx-auto bg-[#FF4B5A] rounded-full relative mb-[44px]">
					<span
						className="w-[136px] h-[28px] text-[18px] font-semibold text-white mb-0 mx-auto"
						onClick={() => {
							navigate('/main/?type=idol');
						}}
					>
						Tìm số phù hợp
					</span>
					<img className="absolute left-[197px]" src={muiten} alt="" />
				</div>
			</div>
		</div>
	);
}
