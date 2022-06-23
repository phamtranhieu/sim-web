import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Form, Input, Space, Select, Radio, TimePicker } from 'antd';
const { Option } = Select;
import '../../pages/NumberIdol/NumberIdol';
import './NumberIdol.scss';
import { month } from './NumberIdolData';
import anhthansohoc from '../../image/thansohoc (2).png';
import thansohoc from '../../asset/thansohoc.svg';
import logo from '../../asset/logo.svg';
import arrow from '../../asset/arrow.svg';

export default function NumberIdol() {
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
	useEffect(() => {}, []);
	const onFinish = (data: any) => {
		console.log(data);
	};
	return (
		<>
			<div className="w-[1440px] h-[900px] mx-auto style-home-idol flex flex-col items-center relative">
				<div className="header w-[1440px] h-[56px] flex items-center justify-center ">
					<img src={arrow} className="absolute left-[40px]" />
					<img src={logo} className="w-[116px] h-[32px] flex items-center" />
				</div>
				<div className="w-[full] h-[full] bg-home m-auto flex flex-col items-center">
					<div className="w-[500px] h-[644px] bg-order">
						<div className="w-[404px] m-auto py-[50px]">
							<h1 className="w-[404px] h-[42px]  text-3xl text-white mb-0">Thần số học</h1>
							<p className="w-[404px] h-[24px]  text-base text-white mb-[52px]">
								Vui lòng nhập các thông tin dưới đây để tiếp tục
							</p>
							<div>
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
												Họ và tên
											</label>
										}
										name="name"
										rules={[{ required: true }]}
										style={{ display: 'inline-block', width: '100%' }}
									>
										<Input style={{ width: '404px', height: '52px', borderRadius: '12px' }} />
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
												Ngày tháng năm sinh*
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
									</Form.Item>

									<p className="w-[404px] h-[24px] text-white font-medium mt-[50px] text-center">
										<span className="underline decoration-solid">Nhấn vào đây</span> để xem lại
										thông tin dữ liệu
									</p>
									<Form.Item
										colon={false}
										style={{ width: '404px', height: '52px', borderRadius: '24px' }}
									>
										<Button className="button-submit" type="primary" danger htmlType="submit">
											Tiếp tục
										</Button>
									</Form.Item>
								</Form>
							</div>
						</div>
					</div>
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
					<img
						style={{ borderRadius: '24px' }}
						className="w-[340px] h-[580px] rounded-3xl"
						src={anhthansohoc}
					/>
					<div className="w-[376px] h-[580px] ">
						<img className="w-[376px] h-[94px] mb-[36px]" src={thansohoc} />
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