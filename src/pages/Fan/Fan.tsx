import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Form, Input, Space, Select, Radio, TimePicker } from 'antd';
const { Option } = Select;
import logo from '../../asset/logo.svg';
import arrow from '../../asset/arrow.svg';
import search from '../../asset/search.svg';

import { month } from './FanData';
import SilderFan from './SliderFan/SilderFan';

import './Fan.scss';

export default function Fan() {
	return (
		<div>
			<div className="w-[1440px] h-[900px] mx-auto style-home-fan flex flex-col items-center relative">
				<div className="header w-[1440px] h-[56px] flex items-center justify-center ">
					<img src={arrow} className="absolute left-[40px]" />
					<img src={logo} className="w-[116px] h-[32px] flex items-center" />
				</div>
				{/* <div className="group-search"> */}
				<div className="search w-[576px] h-[48px] flex bg-white rounded-[12px]">
					<img
						src={search}
						className=" top-[14px] left-[10px]"
						style={{ zIndex: '99', width: '27px', height: '27px', margin: 'auto' }}
					/>
					<Input className="h-full  " style={{ border: 'none', outline: 'none', borderRadius: '12px' }} />
				</div>
				<SilderFan />
				{/* </div> */}
				<div className="w-[575px] h-[358px]  m-auto flex flex-col items-center rounded-[24px] bg-order">
					<div className="w-[404px] m-auto py-[40px] ">
						{/* <h1 className="w-[404px] h-[42px]  text-3xl text-white mb-0">Thần số học</h1> */}
						<p className="w-[404px] h-[28px]  text-base text-white mb-[16px]">Hoặc tìm kiếm dựa vào</p>
						<div className="mt-[16px]">
							<Form
								name="complex-form"
								// onFinish={onFinish}
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

								<p className="w-[404px] h-[24px] text-white font-medium  text-center">
									<span className="underline decoration-solid">Nhấn vào đây</span> để xem lại thông
									tin dữ liệu
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
	);
}
