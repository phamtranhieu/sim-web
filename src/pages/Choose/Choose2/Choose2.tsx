import React, { Fragment, useState, useEffect } from 'react';
import { data, info } from './ChooseData';
import action from '../../../image/Action.png';
import { Checkbox, Radio, Modal, Button } from 'antd';
import './Choose2.scss';
import UI from '../../../image/UI.png';
import Group from '../../../image/Group.png';
import datmua from '../../../image/datmua.png';
import { Outlet, useNavigate } from 'react-router-dom';
import hinh5 from '../../../icon/hinh5.svg';
import kim from '../../../icon/kim.svg';
import moc from '../../../icon/moc.svg';
import thuy from '../../../icon/thuy.svg';
import hoa from '../../../icon/hoa.svg';
import tho from '../../../icon/tho.svg';

export default function Choose2() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/login');
	};
	return (
		<>
			<div className="flex w-[1440px] px-[90px] justify-between mt-[24px]">
				<div>
					<div className="flex items-center w-[318px] h-[36px] mb-[18px]">
						<img
							className="w-[30px] h-[30px] cursor-pointer"
							src={UI}
							alt=""
							onClick={() => {
								handleClick();
							}}
						/>
						<h2 className="w-[274px] h-[36px] text-[24px] font-semibold mb-0 ml-[11px]  ">
							Số thăng quan tiến chức
						</h2>
					</div>
					<div className="block-sale w-[840px] h-[623pxpx]">
						<div className="title flex justify-between border-b-[1px] border-b-[#E9EDF7] ">
							<p className="mb-[8px]">Số thuê bao</p>
							<p className="mb-[8px]">Giá tiền</p>
							<p className="mb-[8px]">Giá khuyến mãi</p>
							<p className="mb-[8px]">Số thuê bao</p>
							<p className="mb-[8px]">Giá tiền</p>
							<p className="mb-[8px]">Giá khuyến mãi</p>
						</div>
						<div className="data-item w-[820px] h-[564px] overflow-y-auto flex mt-[24px]">
							<div>
								{data.map((item, index) => {
									const newValuePrice = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
									const newValueDiscount = item.discountPrice
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

									return (
										<div className="data-item w-[398px] h-[272px] mr-0 my-[20px]">
											<div className="block-a flex h-[24px] justify-around">
												<div className="flex">
													<Radio className="w-[22px] h-[22px]" />
													<p className="w-[106px] h-[24px] text-[16px] text-semibold mb-0">
														{item.teleNumber}
													</p>
												</div>
												<p className="w-[88px] h-[26px]  text-[16px] text-semibold mb-0 line-through">
													{newValuePrice}đ
												</p>
												<p className="w-[94px] h-[24px] tracking-tighter  font-semibold text-[16px] text-[#242424] mb-0">
													{newValueDiscount}đ
												</p>
											</div>
											<div className="block-b w-[398px] h-[232px] mt-[11px] bg-[#F6F6F6] mr-[10px] p-[20px]">
												<div className="block-b-1 w-[358px] h-[50px] flex justify-between mb-[16px]">
													<div className="">
														<h3 className="text-[16px] text-semibold w-[191px] h-[24px] text-[#B91C1C]">
															Điểm phong thủy : {item.point}
														</h3>
														<p className="w-[175px] h-[22px] mt-[4px]">
															SIM vận khí tốt cho gia chủ
														</p>
													</div>
													<span className="flex items-center justify-center w-[50px] h-[50px] text-white text-[18px] text-semibold bg-[#B91C1C] rounded-lg">
														{item.point}
													</span>
												</div>
												<div className="block-b-2 relative">
													<h3 className="text-[16px] text-semibold w-[358px] h-[24px] text-[#B91C1C]">
														Diễn dịch
													</h3>
													<p className="text-[14px] text-semibold w-[358px] h-[66px] mb-0">
														"Khi ký hợp đồng, CLB ở Pháp có hứa hẹn gì về thời gian thi đấu
														cho Quang Hải hay không"
													</p>
													<div className="flex items-center absolute left-[230px]">
														<p className="mb-0 mr-[10px] w-[78px] h-[20px] font-medium text-[14px] text-[#0E7490]">
															Xem chi tiết
														</p>
														<img
															className=""
															src={action}
															alt=""
															style={{ width: '8px', height: '8px' }}
														/>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
							<div>
								{data.map((item, index) => {
									const newValuePrice = item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
									const newValueDiscount = item.discountPrice
										.toString()
										.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
									return (
										<div className="data-item w-[398px] h-[272px] mr-0 my-[20px]">
											<div className="block-a flex h-[24px] justify-around">
												<div className="flex">
													<Radio className="w-[22px] h-[22px]" />
													<p className="w-[106px] h-[24px] text-[16px] text-semibold mb-0">
														{item.teleNumber}
													</p>
												</div>
												<p className="w-[88px] h-[26px]  text-[16px] text-semibold mb-0 line-through">
													{newValuePrice}đ
												</p>
												<p className="w-[94px] h-[24px] font-semibold text-[16px] text-[#242424] mb-0 ">
													{newValueDiscount}đ
												</p>
											</div>
											<div className="block-b w-[398px] h-[232px] mt-[11px] bg-[#F6F6F6] mr-[10px] p-[20px]">
												<div className="block-b-1 w-[358px] h-[50px] flex justify-between mb-[16px]">
													<div className="">
														<h3 className="text-[16px] text-semibold w-[191px] h-[24px] text-[#B91C1C]">
															Điểm phong thủy : {item.point}
														</h3>
														<p className="w-[175px] h-[22px] mt-[4px]">
															SIM vận khí tốt cho gia chủ
														</p>
													</div>
													<span className="flex items-center justify-center w-[50px] h-[50px] text-white text-[18px] text-semibold bg-[#B91C1C] rounded-lg">
														{item.point}
													</span>
												</div>
												<div className="block-b-2 relative">
													<h3 className="text-[16px] text-semibold w-[358px] h-[24px] text-[#B91C1C]">
														Diễn dịch
													</h3>
													<p className="text-[14px] text-semibold w-[358px] h-[66px] mb-0">
														"Khi ký hợp đồng, CLB ở Pháp có hứa hẹn gì về thời gian thi đấu
														cho Quang Hải hay không"
													</p>
													<div className="flex items-center absolute left-[230px]">
														<p className="mb-0 mr-[10px] w-[78px] h-[20px] font-medium text-[14px] text-[#0E7490]">
															Xem chi tiết
														</p>
														<img
															src={action}
															alt=""
															style={{ width: '8px', height: '8px' }}
														/>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<img
						src={datmua}
						alt=""
						className="mx-auto mt-[30px] cursor-pointer"
						onClick={() => {
							handleClick();
						}}
					/>
				</div>
				<div className="w-[358px] h-[700px] border-l-[1px] border-[#E9EDF7] px-[15px] overflow-y-auto">
					<h2 className="w-[103px] h-[34px] text-[24px] text-[#242D35] font-semibold mb-[20px]">Luận giải</h2>
					<div className="overflow-y-auto">
						{/* <div> */}
						{info.map((item, index) => {
							return (
								<div className="flex w-[297px] h-[70px] rounded-md right-item px-[16px] py-[12px] mb-[12px]">
									<img src={item.image} alt="" />
									<div className="ml-[16px]">
										<p className="w-[170px] h-[24px] mb-0">{item.text1}</p>
										<p className="w-[170px] h-[24px] text-[14px] font-semibold mb-0">
											{item.text2}
										</p>
									</div>
								</div>
							);
						})}
						{/* </div> */}
						<div className="border-[#E9EDF7] border-[1px] w-[297px] rounded-lg px-[16px] py-[12px]">
							<div className="flex items-center">
								<img src={hinh5} />
								<p className="w-[130px] h-[22px] ml-[16px] mb-0">Phân tích ngũ hành</p>
							</div>
							<div className="mt-[16px]">
								<div className="flex justify-evenly mb-0">
									<p>Kim</p>
									<p>Mộc</p>
									<p>Thủy</p>
									<p>Hỏa</p>
									<p>Thổ</p>
								</div>
								<div className="flex justify-evenly mt-[9px]">
									<img src={kim} alt="" />
									<img src={moc} alt="" />
									<img src={thuy} alt="" />
									<img src={hoa} alt="" />
									<img src={tho} alt="" />
								</div>
								<div className="flex justify-evenly mt-[9px]">
									<p>1</p>
									<p>2</p>
									<p>3</p>
									<p>4</p>
									<p>5</p>
								</div>
								<p>
									Tương tự Elon Musk tại Tesla, CEO của các công ty tại Mỹ nhận về thu nhập gấp hàng
									trăm lần so với nhân viên của mình.
								</p>
								<p>
									Tương tự Elon Musk tại Tesla, CEO của các công ty tại Mỹ nhận về thu nhập gấp hàng
									trăm lần so với nhân viên của mình.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
