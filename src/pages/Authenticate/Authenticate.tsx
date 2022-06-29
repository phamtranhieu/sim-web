import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate, Link } from 'react-router-dom';

import './Authenticate.scss';

export default function Authenticate() {
	const navigate = useNavigate();
	return (
		// <div className=" bg-[#E5E5E5]">
		<div className="w-[1440px] h-[100vh] mx-auto flex items-center ">
			<img
				className="w-[762px] h-[900px]"
				src={require('../../imageAuth/Screen Shot 2022-06-08 at 16.40 2 (1).png')}
				alt=""
			/>
			<div className="w-full h-full flex items-center ">
				<div className="w-[376px] h-[474px] mx-auto">
					<h2 className="w-[372px] h-[42px] font-semibold text-3xl">Đăng nhập</h2>
					<Form
						name="basic"
						labelCol={{ span: 16 }}
						wrapperCol={{ span: 24 }}
						initialValues={{ remember: true }}
						layout="vertical"
						// onFinish={onFinish}
						// onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							className="label-email"
							label="Email hoặc số điển thoại*"
							name="email"
							rules={[{ required: true, message: 'Please input your username!' }]}
						>
							<Input className="h-[48px] bg-[#F6F6F6]" placeholder="Placeholder" />
						</Form.Item>

						<Form.Item
							className="label-password"
							label="Nhập mật khẩu"
							name="password"
							rules={[{ required: true, message: 'Please input your password!' }]}
						>
							<Input.Password className=" bg-[#F6F6F6] h-[48px] p-0" placeholder="Placeholder" />
						</Form.Item>
						<div className="mt-[12px] h-[78px]">
							<span className="w-[376px] h-[36px] font-normal text-xs text-[#898989] ">
								Bằng việc đằng nhập bạn đồng ý với Điều khoản sử dụng và Chính sách quyền riêng tư của
								myLocal.vn
							</span>
							{/* <div className="mt-[20px] float-right underline underline-offset-4">
								<Link to="/register">Quên mật khẩu</Link>
							</div> */}
							<p
								className="mt-[20px] float-right font-semibold underline underline-offset-2"
								style={{ cursor: 'pointer' }}
								onClick={() => {
									navigate('/reset-password/set');
								}}
							>
								Quên mật khẩu
							</p>
						</div>

						<Form.Item
							className="button-submit"
							// wrapperCol={{ offset: 8, span: 16 }}
							// style={{ display: 'block' }}
						>
							<Button
								type="primary"
								danger
								htmlType="submit"
								onClick={() => {
									navigate('/choose-package');
								}}
							>
								Đăng nhập
							</Button>
						</Form.Item>
						<p className="block text-center">
							Bạn chưa có tài khoản?{' '}
							<span
								className="font-semibold"
								onClick={() => {
									navigate('/register');
								}}
								style={{ cursor: 'pointer' }}
							>
								Đăng ký
							</span>
						</p>
					</Form>
				</div>
			</div>
		</div>
		// </div>
	);
}
