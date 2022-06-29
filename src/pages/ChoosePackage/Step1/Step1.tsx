import React from 'react';
import Communication from '../../../image/Communication.png';
import { Button, Checkbox, Form, Input } from 'antd';

export default function Step1() {
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className="w-[575px] h-[490px] mx-auto">
			<div className="w-[575px] h-[72px] flex items-center p-[12px] bg-[#EFF6FF] mt-[80px] rounded-lg">
				<img src={Communication} alt="" />
				<p className="w-[495px] h-[44px] text-[14px] font-semibold mb-0 ml-[12px]">
					Để giữ số thuê bao yêu thích trong vòng 60 phút, bạn cần cung cấp số CMND/CCCD
				</p>
			</div>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 32 }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
				layout="vertical"
				style={{
					marginTop: '28px',
				}}
			>
				<Form.Item
					label={
						<label
							style={{
								width: '343px',
								height: '24px',
								fontSize: '16px',
								fontWeight: '400',
							}}
						>
							Số CMND/CCCD thứ 1
						</label>
					}
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input
						style={{
							borderRadius: '20px',
							height: '48px',
							backgroundColor: '#F6F6F6',
							border: 'none',
							outline: 0,
						}}
						placeholder="Nhập số CMND/CCCD"
					/>
				</Form.Item>

				<Form.Item
					label={
						<label
							style={{
								width: '343px',
								height: '24px',
								fontSize: '16px',
								fontWeight: '400',
							}}
						>
							Số CMND/CCCD thứ 2
						</label>
					}
					name="username"
					rules={[{ required: true, message: 'Please input your username!' }]}
				>
					<Input
						style={{
							borderRadius: '20px',
							height: '48px',
							backgroundColor: '#F6F6F6',
							border: 'none',
							outline: 0,
						}}
						placeholder="Nhập số CMND/CCCD"
					/>
				</Form.Item>

				<Form.Item
					label={
						<label
							style={{
								width: '343px',
								height: '24px',
								fontSize: '16px',
								fontWeight: '400',
							}}
						>
							Số CMND/CCCD thứ 3
						</label>
					}
					name="password"
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input
						style={{
							borderRadius: '20px',
							height: '48px',
							backgroundColor: '#F6F6F6',
							border: 'none',
							outline: 0,
						}}
						placeholder="Nhập số CMND/CCCD"
					/>
				</Form.Item>
			</Form>
		</div>
	);
}
