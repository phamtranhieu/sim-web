import React, { Fragment, useState, useEffect } from 'react';
import { data } from './ChooseData';
import action from '../../../image/Action.png';
import { Checkbox, Radio, Modal, Button } from 'antd';
import './Choose1';
import UI from '../../../image/UI.png';
import datmua from '../../../image/datmua.png';
import Group from '../../../image/Group.png';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Choose1() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		showModal();
	}, []);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	const handleClick = () => {
		navigate('/choose/step2');
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
					<div className="block-sale w-[840px] h-[598px]">
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
					<img src={datmua} alt="" className="mx-auto mt-[30px] disabled:" />
				</div>
				<div className="w-[358px] h-[100px]">
					<h2 className="w-[103px] h-[34px] text-[24px] text-[#242D35] font-semibold mb-[20px]">Luận giải</h2>
					<p className="w-[358px] h-[24px] text-[16px] text-[#737377]">
						Chọn "Xem chi tiết" để xem luận giải
					</p>
				</div>
			</div>
			<Modal
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				// className="w-[378px] h-[549px]"
				bodyStyle={{ width: '520px', height: '549px' }}
				footer={null}
				className="popup-choose w-[520px] h-[549px]"
			>
				<div className=" mx-auto mb-[45px]">
					<img src={Group} alt="" className="w-[106px] h-[106px] mx-auto" />
				</div>
				<h2 className="w-[287px] h-[28px] mx-auto text-[20px] font-semibold text-center">
					Gợi ý tìm kiếm số yêu thích
				</h2>
				<p className="w-[287px] h-[36px] text-[12px] font-medium text-[#B91C1C] mx-auto text-center">
					Sử dụng dấu (*) khi bạn cần tìm kiếm số thuê bao yêu thích ví dụ
				</p>
				<ul className="w-[322px] h-[181px] m-auto">
					<li className="my-[10px]">
						Để tìm số thuê bao chứa số 68 bất kỳ, gõ <span className="text-[14px] font-medium">68</span>
					</li>
					<li className="my-[10px]">
						Để tìm số thuê bao bắt đầu bằng số 68, gõ <span className="text-[14px] font-medium">68*</span>
					</li>
					<li className="my-[10px]">
						Để tìm số thuê bao kết thúc bằng số 68, gõ <span className="text-[14px] font-medium">*68</span>
					</li>
					<li className="my-[10px]">
						Để tìm số thuê bao bát đầu bằng số 68 và kết thúc bằng 99, gõ
						<span className="text-[14px] font-medium"> 68*99</span>
					</li>
				</ul>
				<div className="choose-number w-[488px] h-[48px] bg-[#FF4B5A] flex items-center justify-center text-white text-[18px] font-semibold rounded-lg">
					Bắt đầu chọn số
				</div>
			</Modal>
		</>
	);
}
