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

import './Main.scss';
import classNames from 'classnames';
import { content, dataNumber } from './MainData';

export default function Main() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();
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

	return (
		<>
			<div>
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
						<Input className="w-[718px] h-[28px] border-0 outline-0 rounded-full" />
					</div>
				</div>
				<div className="w-[1440px] h-[600px] mx-auto flex">
					<div className="left">
						{content
							.filter(item => {
								return item.type == typePage;
							})
							.map((item, index) => {
								return (
									<div key={index}>
										<h1 className="w-[250px] h-[24px]">{item.title}</h1>
										<p className="w-[280px] h-[300px]">{item.title2}</p>
									</div>
								);
							})}
					</div>
					<div className="right">
						<div>
							<img src={UI} />
						</div>
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
