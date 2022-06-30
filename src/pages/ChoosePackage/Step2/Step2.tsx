import React, { useState } from 'react';
import family from '../../../image/family.png';
import { listNumber, packageNumber } from './StepData2';
import { Button, Modal } from 'antd';
import Popup from './Popup';

export default function Step2() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [data, setData] = useState({});

	const showModal = () => {
		setIsModalVisible(true);
	};

	// const handleOk = () => {
	// 	setIsModalVisible(false);
	// };

	// const handleCancel = () => {
	// 	setIsModalVisible(false);
	// };
	const newFunction = (data: any) => {
		console.log(data);
	};
	const handleChoose = (itemFunction: any, itemStatus: string) => {
		console.log(itemFunction);
		console.log(itemStatus);
		packageNumber
			.filter(item => {
				return item['name-package'] == itemStatus;
			})
			.map((item, index) => {
				setData(item);
			});

		if (itemFunction == 'Xem chi tiết') {
			showModal();
		}
	};

	return (
		<>
			<div className="w-[575px] h-[990px] mx-auto mt-[26px]">
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
					<div className="w-[575px] h-[808px]">
						{listNumber.map((item, index) => {
							return (
								<div
									className="w-[575px] h-[94px] flex p-[10px]"
									style={{ borderBottom: '1px solid #E3E3E3' }}
								>
									<div className="w-[368px] h-[66px]">
										<p className="w-[123px] h-[28px] text-[#2C3137] font-semibold text-[16px] mb-[10px]">
											{item.number}
										</p>
										<div
											className="w-[100px] h-[30px] rounded-full flex items-center "
											style={{ backgroundColor: item['bg-status'] }}
										>
											<p className="w-[80px] h-[22px] font-semibold text-[14px] text-white mb-0 mx-auto text-center">
												{item.status}
											</p>
										</div>
									</div>
									<div className="w-[163px] h-[32px] flex items-center float-right my-auto">
										<img className="w-[20px] h-[20px] mr-[10px]" src={item.accordance} />
										<p
											className="w-[131px] h-[24px] font-medium text-[16px] mb-0 "
											style={{ color: item['text-color'] }}
											onClick={() => {
												handleChoose(item.function, item.status);
											}}
										>
											{item.function}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<Popup isModalVisible newFunction />
		</>
	);
}
