import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Checkbox, Form, Input } from 'antd';
import './Register.scss';
import { useNavigate } from 'react-router-dom';

export default function Register() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="w-[1440px] h-[900px] mx-auto flex items-center">
				<img
					className="w-[762px] h-[900px]"
					src={require('../../imageAuth/Screen Shot 2022-06-08 at 16.58 1.png')}
					alt=""
				/>
				<div className="w-full h-full flex items-center">
					<div className="w-[376px] h-[500px] mx-auto">
						<h2 className="w-[372px] h-[42px] font-semibold text-3xl">Đăng ký tài khoản</h2>
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
								rules={[{ required: true, message: 'Please input your email!' }]}
							>
								<Input className="h-[48px] bg-[#F6F6F6]" placeholder="Placeholder" bordered />
							</Form.Item>
							<Form.Item
								className="label-password"
								label="Nhập mật khẩu"
								name="password"
								rules={[{ required: true, message: 'Please input your password!' }]}
							>
								<Input.Password className=" bg-[#F6F6F6] h-[48px] p-0" placeholder="Placeholder" />
							</Form.Item>
							<Form.Item
								className="label-confirm-password"
								label="Xác nhận lại mật khẩu"
								name="re-password"
								rules={[{ required: true, message: 'Please confirm your password!' }]}
							>
								<Input.Password className=" bg-[#F6F6F6] h-[48px] p-0" placeholder="Placeholder" />
							</Form.Item>
							<div className="mt-[12px] h-[78px]">
								<span className="w-[376px] h-[36px] font-normal text-xs text-[#898989] ">
									Bằng việc đằng nhập bạn đồng ý với Điều khoản sử dụng và Chính sách quyền riêng tư
									của myLocal.vn
								</span>
								<p
									className="mt-[20px] float-right font-semibold underline underline-offset-2"
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
								<Button type="primary" danger htmlType="submit">
									Đăng ký
								</Button>
							</Form.Item>
							{/* <p className="block text-center">
								Bạn chưa có tài khoản? <span className="font-semibold">Đăng ký</span>
							</p> */}
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}
