import React, { useEffect, useState } from 'react';
import './Order.scss';
import { Button, Modal, Form, Input, Space, Select, Radio, TimePicker } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
const { Option } = Select;
import type { Moment } from 'moment';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import { month, gender, time } from './OrderData';

export default function Home() {
	const navigate = useNavigate();
	// const [isModalVisible, setIsModalVisible] = useState(false);
	// useEffect(() => {
	// 	showModal();
	// }, []);
	// const showModal = () => {
	// 	setIsModalVisible(true);
	// };

	// const handleOk = () => {
	// 	setIsModalVisible(false);
	// };

	// const handleCancel = () => {
	// 	setIsModalVisible(false);
	// };
	const onChange = (time: any, timeString: string) => {
		if (time != null) {
			console.log(time, timeString);
		}
	};
	const onFinish = (data: any) => {
		console.log(data);
	};
	return (
		<>
			<div className="w-[1440px] h-[100vh] mx-auto style-home flex flex-col items-center py-[128px]">
				<div className="w-[full] h-[full] bg-home mx-auto flex flex-col items-center">
					<div className="w-[500px] h-[644px] bg-order">
						<div className="w-[404px] m-auto py-[50px]">
							<h1 className="w-[404px] h-[42px]  text-3xl text-white mb-0">Nhập thông tin</h1>
							<p className="w-[404px] h-[24px]  text-base text-white mb-[52px]">
								Vui lòng nhập các thông tin dưới đây để tiếp tục
							</p>
							<Form
								name="complex-form"
								onFinish={onFinish}
								labelCol={{ span: 32 }}
								wrapperCol={{ span: 32 }}
								layout="vertical"
							>
								<Form.Item
									label={
										<label
											style={{
												color: 'white',
												width: '404px',
												height: '24px',
												fontWeight: 600,
												fontSize: '16px',
											}}
										>
											Ngày tháng năm sinh
										</label>
									}
									className="date-data"
									style={{
										color: 'white',
										marginBottom: '25px',
										// width: '404px',
										// height: '24px',
										// fontWeight: 600,
										// fontSize: '16px',
									}}
								>
									<div>
										<Input.Group className="group-item" compact>
											<Form.Item
												name={['date', 'day']}
												style={{ display: 'inline-block', width: '124px', height: '52px' }}
												rules={[
													{ required: true, message: 'Day is required' },
													{
														pattern: /^(?:\d*)$/,
														message: 'Must number',
													},
													{
														len: 2,
														message: '2 characters long',
													},
												]}
											>
												<Input
													style={{
														width: '124px',
														height: '52px',
														borderRadius: '12px',
													}}
													placeholder="DD"
												/>
											</Form.Item>
											<Form.Item
												name={['date', 'month']}
												style={{ display: 'inline-block', width: '124px', height: '52px' }}
												rules={[
													{ required: true, message: 'Month is required' },
													{
														pattern: /^(?:\d*)$/,
														message: 'Value should contain just number',
													},
													{
														pattern: /^[\d]{0,2}$/,
														message: 'Value should be less than 2 character',
													},
												]}
											>
												<Select
													className="select-date"
													placeholder="MM"
													style={{
														width: '124px',
														height: '52px',
														borderRadius: '12px',
														marginLeft: '16px',
													}}
												>
													{month.map((item: any, index: any) => {
														return (
															<>
																<Option
																	// style={{
																	// 	width: '124px',
																	// 	height: '52px',
																	// 	borderRadius: '12px',
																	// }}
																	value={item.value}
																>
																	{item.title}
																</Option>
															</>
														);
													})}
												</Select>
											</Form.Item>
											<Form.Item
												name={['date', 'year']}
												style={{
													display: 'inline-block',
													width: '124px',
													height: '52px',
													marginLeft: '32px',
												}}
												rules={[
													{ required: true, message: 'Year is required' },
													{
														pattern: /^(?:\d*)$/,
														message: 'Must number',
													},
													{
														len: 4,
														message: '4 characters long',
													},
												]}
											>
												<Input
													style={{
														display: 'inline-block',
														width: '124px',
														height: '52px',
														borderRadius: '12px',
													}}
													placeholder="YYYY"
												/>
											</Form.Item>
										</Input.Group>
									</div>
								</Form.Item>

								<Form.Item
									label={
										<label
											style={{
												color: 'white',
												width: '404px',
												height: '24px',
												fontWeight: 600,
												fontSize: '16px',
											}}
										>
											Giờ sinh
										</label>
									}
									name="time"
									rules={[{ required: true }]}
									style={{ display: 'inline-block', width: '100%' }}
								>
									{/* <TimePicker
										onChange={onChange}
										style={{ width: '404px', height: '52px', borderRadius: '12px' }}
										// defaultValue={moment('12:08', format)}
										format="HH:mm"
									/> */}
									<Select
										defaultValue="00:00"
										className="select-time"
										style={{ width: '404px', height: '52px', borderRadius: '12px' }}
									>
										{time.map((item, index) => {
											return (
												<>
													<Option
														style={{ width: '404px', height: '52px', borderRadius: '12px' }}
														value={item.value}
													>
														{item.title}
													</Option>
												</>
											);
										})}
									</Select>
								</Form.Item>

								<Form.Item
									label={
										<label
											style={{
												color: 'white',
												width: '404px',
												height: '24px',
												fontWeight: 600,
												fontSize: '16px',
											}}
										>
											Giới tính
										</label>
									}
									rules={[{ required: true, message: 'Gender is required' }]}
									name="gender"
								>
									<Radio.Group
										// onChange={onChange}
										// value={value}

										style={{ width: '404px', height: '24px' }}
									>
										{gender.map((item, index) => {
											return (
												<>
													<Radio
														value={item.value}
														style={{
															color: 'white',
															fontWeight: 600,
															fontSize: '16px',
															marginTop: '18px',
														}}
													>
														{item.title}
													</Radio>
												</>
											);
										})}
									</Radio.Group>
								</Form.Item>
								<p className="w-[404px] h-[24px] text-white font-medium mt-[50px] text-center">
									<span className="underline decoration-solid">Nhấn vào đây</span> để xem lại thông
									tin dữ liệu
								</p>
								<Form.Item
									colon={false}
									style={{ width: '404px', height: '52px', borderRadius: '24px' }}
								>
									<Button
										className="button-submit"
										type="primary"
										danger
										htmlType="submit"
										onClick={() => {
											navigate('/choose/step1');
										}}
									>
										Tiếp tục
									</Button>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
