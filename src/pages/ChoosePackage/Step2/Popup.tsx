import React, { useState } from 'react';
import family from '../../../image/family.png';
import { listNumber, packageNumber } from './StepData2';
import { Button, Modal } from 'antd';

export default function Popup(props: any) {
	// const [isModalVisible, setIsModalVisible] = useState(false);
	const { isModalVisible } = props;
	console.log(isModalVisible);

	// const handleOk = () => {
	// 	setIsModalVisible(false);
	// };

	// const handleCancel = () => {
	// 	setIsModalVisible(false);
	// };

	return (
		<div>
			<Modal
				width="636px"
				visible={isModalVisible}
				// onOk={handleOk}
				// onCancel={handleCancel}
				bodyStyle={{ width: '636px', height: '600px', backgroundColor: '#0097FE', borderRadius: '10px' }}
				footer={null}
			>
				<div></div>
				<div></div>
				<div></div>
			</Modal>
		</div>
	);
}
