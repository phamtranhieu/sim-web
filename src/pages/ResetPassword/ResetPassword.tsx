import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate, Outlet } from 'react-router-dom';
import './ResetPassword.scss';

export default function ResetPassword() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="w-[1440px] h-[900px] mx-auto flex items-center">
				<img
					className="w-[762px] h-[900px]"
					src={require('../../imageAuth/Screen Shot 2022-06-08 at 16.47 1.png')}
					alt=""
				/>
				<div className="w-full h-full flex items-center justify-center">
					<Outlet />
					{/* <div className="w-[376px] h-[500px] mx-auto">
						<h2 className="w-[372px] h-[42px] font-semibold text-3xl">Đăt lại mật khẩu</h2>
						<span className="w-[376px] h-[36px] font-semibold text-sm text-[#898989] ">
							Nhập mã đến email hoặc số điện thoại của bạn để đặt lại mật khẩu
						</span>
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
								className="confirm-register"
								label="Email hoặc số điện thoại"
								name="confirm-number"
								rules={[{ required: true, message: 'Please input your number!' }]}
							>
								<Input className="h-[48px] bg-[#F6F6F6]" placeholder="Placeholder" bordered />
							</Form.Item>

							<Form.Item
								className="button-submit"
								// wrapperCol={{ offset: 8, span: 16 }}
								// style={{ display: 'block' }}
							>
								<Button type="primary" danger htmlType="submit">
									Gửi mã xác nhận
								</Button>
							</Form.Item>
							<p className="block text-center">
								Bạn chưa có tài khoản?{' '}
								<span
									className="font-semibold"
									style={{ cursor: 'pointer' }}
									onClick={() => {
										navigate('/login');
									}}
								>
									Gửi mã xác nhận
								</span>
							</p>
						</Form>
					</div> */}
				</div>
			</div>
		</div>
	);
}
