import React from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { data } from './StepData3';
import './Step3.scss';

const { Option } = Select;
const { TextArea } = Input;

export default function Step3() {
	return (
		<div className="w-[627px]  mx-auto mt-[40px]">
			<p className="h-[24px] font-semibold text-[16px] mb-[24px]">Thông tin cá nhân</p>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 32 }}
				initialValues={{ remember: true }}
				layout="vertical"
				// onFinish={onFinish}
				// onFinishFailed={onFinishFailed}

				autoComplete="off"
			>
				<Form.Item
					label={<label style={{ height: '20px', fontSize: '14px', fontWeight: 600 }}>Họ và tên</label>}
					name="name"
					rules={[{ required: false, message: 'Please input your username!' }]}
				>
					<Input
						className="w-[627px] h-[40px]"
						style={{ backgroundColor: '#F6F4F5', borderRadius: '8px' }}
						placeholder="Tên của bạn là gì"
					/>
				</Form.Item>

				<Form.Item
					label={<label style={{ height: '20px', fontSize: '14px', fontWeight: 600 }}>Số điện thoại</label>}
					name="phone"
					rules={[{ required: false, message: 'Please input your phone!' }]}
				>
					<Input
						className="w-[627px] h-[40px]"
						style={{ backgroundColor: '#F6F4F5', borderRadius: '8px' }}
						placeholder="+84"
					/>
				</Form.Item>

				<Form.Item
					label={<label style={{ height: '20px', fontSize: '14px', fontWeight: 600 }}>Địa chỉ email</label>}
					name="email"
					rules={[{ required: false, message: 'Please input your eamil!' }]}
				>
					<Input
						className="w-[627px] h-[40px]"
						style={{ backgroundColor: '#F6F4F5', borderRadius: '8px' }}
						placeholder="Địa chỉ của bạn là..."
					/>
				</Form.Item>

				<p className="h-[24px] font-semibold text-[16px] mb-[24px]">Địa chỉ giao hàng</p>

				<Form.Item
					label={<label style={{ height: '20px', fontSize: '14px', fontWeight: 600 }}>Tỉnh/ Thành phố</label>}
					name="city"
					rules={[{ required: false, message: 'Please input your phone!' }]}
					// style={{ backgroundColor: '#F6F4F5', borderRadius: '8px' }}
				>
					<Select
						style={{ width: '100%', height: '40px' }}
						// onChange={handleChange}
						// defaultValue="Chọn Tỉnh/ Thành phố"
						placeholder="Chọn Tỉnh/ Thành phố"
					>
						{data.map((item, index) => {
							return (
								<Option key={index} value={item.name}>
									{item.name}
								</Option>
							);
						})}
					</Select>
				</Form.Item>

				<Form.Item
					label={<label style={{ height: '20px', fontSize: '14px', fontWeight: 600 }}>Quận/ Huyện</label>}
					name="district"
					rules={[{ required: false, message: 'Please input your phone!' }]}
				>
					<Select
						style={{ width: '100%' }}
						// onChange={handleChange}
						placeholder="Chọn Quận/ Huyện"
					>
						{data.map((item, index) => {
							return (
								<Option key={index} value={item.name}>
									{item.name}
								</Option>
							);
						})}
					</Select>
				</Form.Item>

				<Form.Item
					label={<label style={{ height: '20px', fontSize: '14px', fontWeight: 600 }}>Phường/ Xã</label>}
					name="small"
					rules={[{ required: false, message: 'Please input your phone!' }]}
				>
					<Select
						className="select-city"
						style={{ width: '100%', height: '40px', backgroundColor: '#F6F4F5' }}
						// onChange={handleChange}
						placeholder="Chọn Phường/ Xã"
					>
						{data.map((item, index) => {
							return (
								<Option key={index} value={item.name}>
									{item.name}
								</Option>
							);
						})}
					</Select>
				</Form.Item>

				<Form.Item
					label={<label style={{ height: '20px', fontSize: '14px', fontWeight: 600 }}>Địa chỉ</label>}
					name="address"
					rules={[{ required: false, message: 'Please input your address!' }]}
				>
					<Input
						placeholder="Số nhà, tên đường"
						style={{ backgroundColor: '#F6F4F5', borderRadius: '8px' }}
					/>
				</Form.Item>

				<Form.Item
					label={<label style={{ height: '20px', fontSize: '14px', fontWeight: 600 }}>Ghi chú</label>}
					name="note"
					rules={[{ required: false, message: 'Please input your note!' }]}
				>
					<TextArea
						rows={4}
						placeholder="Ghi chú cho người giao hàng"
						style={{ backgroundColor: '#F6F4F5', borderRadius: '8px' }}
					/>
				</Form.Item>
			</Form>
		</div>
	);
}
