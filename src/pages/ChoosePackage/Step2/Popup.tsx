import React, { useState } from 'react';
import family from '../../../image/family.png';
import { listNumber, packageNumber } from './StepData2';
import { Button, Modal } from 'antd';
import monster from '../../../image/monster.png';
import text1 from '../../../image/text1.png';

export default function Popup(props: any) {
	const { isModalVisible, handleCancel, data } = props;
	console.log(data);
	return (
		<div>
			<Modal
				width="636px"
				visible={isModalVisible}
				// onOk={handleOk}
				onCancel={handleCancel}
				bodyStyle={{ height: '600px', backgroundColor: data.bgStatus, borderRadius: '10px' }}
				footer={null}
			>
				<div className="w-[520px] h-[121px] flex mx-auto mt-[55px] mb-[12px]">
					<div className="w-[164px] h-[121px] border-r-[1px] border-white">
						<h1 className="font-bold text-[31px] text-white">GÓI CƯỚC</h1>
						<h1 className="font-bold text-[31px] text-white">{data.namePackage}</h1>
					</div>
					<div className="w-[312px] h-[100px] ml-[25px]">
						<p className="text-white font-medium text-[20px] mb-0">DATA: {data.data}</p>
						<p className="text-white font-medium text-[20px] mb-0">THOẠI NỘI MẠNG: {data.inline}</p>
						<p className="text-white font-medium text-[20px] mb-0">HSD : {data.date}</p>
						<p className="text-white font-medium text-[20px] mb-0">GIA HẠN TỰ ĐỘNG : {data.auto}</p>
					</div>
				</div>
				<div className="w-full border-y-[1px] border-dashed border-white">
					<div className="w-[461px] h-[101px] m-auto">
						<h1 className="w-[461px] h-[101px] font-extrabold text-[40px] text-white mb-0 text-center">
							{data.money}
						</h1>
					</div>
				</div>
				<div className="flex">
					<div>
						<img src={monster} />
					</div>
					<div className="mt-[20px] ml-[20px]">
						<img className="object-cover" src={text1} />
					</div>
				</div>
			</Modal>
		</div>
	);
}
