import React, { useEffect, useState } from 'react';
import './Home.scss';
import { dataHome } from './data';
import logo from '../../icon/logo.svg';
import arrow from '../../icon/arrow.svg';
import phongthuy from '../../icon/phongthuy.svg';
import False from '../../image/False.png';
import { Button, Modal, BackTop } from 'antd';

import { useNavigate } from 'react-router-dom';

export default function Home() {
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
	return (
		<>
			<div className="w-[1440px] h-[900px] mx-auto style-home flex flex-col items-center">
				<div className="w-full h-full bg-home mx-auto flex flex-col items-center">
					<div className="w-[1440px] h-[56px] absolute">
						<img src={arrow} alt="" className="relative top-[24px] left-[66px]" />
						<img className="w-[116px] h-[32px]  relative top-[-12px] left-[662px]" src={logo} alt="" />
					</div>
					<ul className="w-[376px] h-[456px] m-auto flex items-center justify-center flex-col">
						{dataHome.map((item, index) => {
							console.log(index);
							return (
								<>
									<li className="item-data w-full">
										<img className="icon" src={item.image} alt="" />
										<p className="m-0 w-[240px] h-[28px]">{item.title}</p>
										<img
											onClick={() => {
												if (index == 0) {
													navigate('/order');
												}
											}}
											src={item.button}
											alt=""
										/>
									</li>
								</>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal
				width="972px"
				// bodyStyle={{ height: '740px' }}
				bodyStyle={{ height: '740px', padding: '80px' }}
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<div className="w-[772px] h-[580px] m-auto flex gap-[4.5rem]">
					<img className="w-[340px] h-[580px] rounded-3xl" src={False} />
					<div className="w-[376px] h-[580px] ">
						<img className="w-[376px] h-[94px] mb-[36px]" src={phongthuy} />
						<p>
							TP Thủ Đức cũng có nhiều nơi ngập hơn nửa bánh xe. Đó là đường Quốc Hương, Thảo Điền, Dương
							Văn Cam (đoạn từ Kha Vạn Cân đến Lê Văn Tách, TP Thủ Đức). Đơn vị thoát nước cảnh báo các
							phương tiện hạn chế lưu thông qua các tuyến đường này. Hiện vẫn chưa có thời gian dự kiến sẽ
							hết ngập tại các điểm trên. Bản tin phát đi chiều 22/6 từ Trung tâm dự báo Khí tượng Thủy
							văn khu vực Nam Bộ cho hay trong 3 giờ qua, mây dông phát triển mạnh trên khu vực huyện Hóc
							Môn, TP Thủ Đức, các quận Bình Tân, 6, 11.
						</p>
					</div>
				</div>
			</Modal>
		</>
	);
}
