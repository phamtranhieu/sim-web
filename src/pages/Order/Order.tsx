import React, { useEffect, useState } from 'react';
import './Order.scss';
// import { dataHome } from './data';
import logo from '../../icon/logo.svg';
import arrow from '../../icon/arrow.svg';
import phongthuy from '../../icon/phongthuy.svg';
import False from '../../image/False.png';
import { Button, Modal, BackTop } from 'antd';

export default function Home() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	// const navigate = useNavigate();
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
					{/* <div className="w-[1440px] h-[56px] absolute">
						<img src={arrow} alt="" className="relative top-[24px] left-[66px]" />
						<img className="w-[116px] h-[32px]  relative top-[-12px] left-[662px]" src={logo} alt="" />
					</div> */}
					{/* <ul className="w-[376px] h-[456px] m-auto flex items-center justify-center flex-col">
						{dataHome.map((item, index) => {
							return (
								<>
									<li className="item-data w-full">
										<img className="icon" src={item.image} alt="" />
										<p className="m-0 w-[240px] h-[28px]">{item.title}</p>
										<img src={item.button} alt="" />
									</li>
								</>
							);
						})}
					</ul> */}
				</div>
			</div>
		</>
	);
}
