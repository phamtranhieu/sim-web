import React, { Fragment, useState, useEffect } from 'react';
import action from '../../../image/Action.png';
import { Checkbox, Radio, Modal, Button } from 'antd';
import UI from '../../image/UI.png';
import datmua from '../../../image/datmua.png';
import Group from '../../image/Group.png';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { Input } from 'antd';

import logo from '../../asset/logo.svg';
import arrow from '../../asset/arrow.svg';
import search from '../../asset/search.svg';
import muiten from '../../icon/muiten.svg';

import './Main.scss';
import classNames from 'classnames';
import { content, dataNumber } from './MainData';

export default function Main() {
	const navigate = useNavigate();
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
	const [arrayLength, setIsArrayLength] = useState(0);
	const [array, setArray] = useState<any>([]);
	const typePage = searchParams.get('type') || '';
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

	const handleChange = (e: any) => {
		if (e.target.checked) {
			array.push(e.target.checked);
		} else {
			array.splice(0, 1);
		}
		setIsArrayLength(array.length);
	};

	return (
		<>
			<div className="">
				<div className="border-1-[#E9EDF7] w-[1440px] h-[100vh] mx-auto">
					<div
						className={classNames('header-main w-[1440px] h-[386px] mx-auto relative', {
							'bg-idol': typePage == 'idol',
							'bg-class': typePage == 'class',
							'bg-fan': typePage == 'fan',
						})}
					>
						<div className="header-title  w-[1440px] h-[56px] flex items-center justify-center">
							<img src={arrow} className="absolute left-[40px]" />
							<img src={logo} className="w-[116px] h-[32px] flex items-center" />
						</div>
						<div className="input-choose w-[774px] h-[48px] top-[237px] mx-auto flex absolute left-[325px] items-center bg-white p-[8px] rounded-full">
							<img src={search} alt="" className="w-[12px] h-[12px] " />
							<Input
								className="w-[718px] h-[28px] border-none outline-0 rounded-full"
								style={{ border: 'none', outline: '0' }}
							/>
						</div>
					</div>
					<div className="w-[1170px] h-[600px] mx-auto flex">
						<div className="left mt-[36px] mb-[32px]">
							{content
								.filter(item => {
									return item.type == typePage;
								})
								.map((item, index) => {
									return (
										<div key={index}>
											<h1 className="w-[250px] h-[34px] text-[24px] font-semibold">
												{item.title}
											</h1>
											{typePage == 'fan' ? (
												<p className="w-[240px] h-[36px] bg-[#FFAF26] flex items-center pl-[8px] font-semibold text-[16px] rounded-lg mt-[28px] mb-[20px]">
													{item.specific || null}
												</p>
											) : (
												''
											)}

											<p className="w-[280px] h-[300px] font-light text-[16px] text-[#4D4D4D]">
												{item.title2}
											</p>
										</div>
									);
								})}
						</div>
						<div className="right ml-[25px] mt-[40px] overflow-y-auto">
							<div className="flex items-center">
								<img className="w-[25px] h-[25px] mr-[13.5px]" src={UI} />
								<h1 className="w-[152px] h-[36px] font-semibold text-[24px] text-[#242D35] ">
									Danh sách số
								</h1>
							</div>
							<div className="flex w-[840px] h-[524px] mt-[34px]">
								<div className="w-[392px] h-[524px] mr-[50px]">
									<div className="flex w-[388px] h-[26px] justify-around border-b-[1px] border-[#898989] mb-[26px]">
										<p className="w-[95px] h-[22px] font-semibold text-[14px] text-[#898989] mb-0">
											Số thuê bao
										</p>
										<p className="w-[95px] h-[22px] font-semibold text-[14px] text-[#898989]  mb-0">
											Số tiền
										</p>
										<p className="w-[95px] h-[22px] font-semibold text-[14px] text-[#898989]  mb-0">
											Số khuyến mãi
										</p>
									</div>
									<div>
										{dataNumber
											.filter(item => {
												return item.type == typePage;
											})
											.map((item, index) => {
												const valuePrice = item.price
													.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
												const valueDiscount = item.discount
													.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
												return (
													<div className="flex justify-around">
														<div className="flex">
															<Checkbox key={index} onChange={e => handleChange(e)} />
															<p className="font-light text-[16px] w-[106px] h-[24px] text-[#070D14] leading-snug ml-[10px]">
																{item.number}
															</p>
														</div>
														<p className="font-light text-[16px] w-[106px] h-[24px] text-[#565656] leading-snug line-through">
															{valuePrice}đ
														</p>
														<p className="font-semibold text-[16px] w-[106px] h-[24px] text-[#242424] leading-snug">
															{valueDiscount}đ
														</p>
													</div>
												);
											})}
									</div>
								</div>
								<div className="w-[392px] h-[524px]">
									<div className="flex w-[388px] h-[26px] justify-around border-b-[1px] border-[#898989] mb-[26px]">
										<p className="w-[95px] h-[22px] font-semibold text-[14px] text-[#898989] mb-0">
											Số thuê bao
										</p>
										<p className="w-[95px] h-[22px] font-semibold text-[14px] text-[#898989] mb-0">
											Số tiền
										</p>
										<p className="w-[95px] h-[22px] font-semibold text-[14px] text-[#898989] mb-0">
											Số khuyến mãi
										</p>
									</div>
									<div>
										{dataNumber
											.filter(item => {
												return item.type == typePage;
											})
											.map((item, index) => {
												const valuePrice = item.price
													.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
												const valueDiscount = item.discount
													.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
												return (
													<div className="flex justify-around">
														<div className="flex">
															<Checkbox key={index} onChange={e => handleChange(e)} />
															<p className="font-light text-[16px] w-[106px] h-[24px] text-[#070D14] leading-snug ml-[10px]">
																{item.number}
															</p>
														</div>
														<p className="font-light text-[16px] w-[106px] h-[24px] text-[#565656] leading-snug line-through">
															{valuePrice}đ
														</p>
														<p className="font-semibold text-[16px] w-[106px] h-[24px] text-[#242424] leading-snug">
															{valueDiscount}đ
														</p>
													</div>
												);
											})}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div aria-disabled className="reservation relative">
						{/* <span className="text-white font-semibold">Đặt mua</span> */}
						<Button
							style={{
								backgroundColor: arrayLength < 2 ? '#FEF2F2' : '#FF4B5A',
								border: '0',
								fontWeight: '600',
								color: arrayLength < 2 ? '#FCA5A5' : '#FFFFFF',
								width: '202px',
								height: '48px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								borderRadius: '20px',
								margin: '0 auto',
								marginTop: '30px',
							}}
							disabled={arrayLength < 2}
							onClick={() => {
								navigate('/login');
							}}
						>
							Đặt mua
						</Button>
						<img src={muiten} className="absolute left-[130px]" />
					</div>
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
